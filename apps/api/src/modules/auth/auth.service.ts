import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { KEY as USER_REPOSITORY_INTERFACE_KEY } from '../user/interface/user-repository.interface';
import { UserRepository } from '../user/user.repository';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../user/schema/user.schema';
import authConfig from 'src/configs/auth.config';
import { ConfigType } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		@Inject(USER_REPOSITORY_INTERFACE_KEY)
		private readonly userRepository: UserRepository,
		@Inject(authConfig.KEY)
		private readonly config: ConfigType<typeof authConfig>,
	) {}

	generateAccessToken(user: UserDocument): string {
		const payload = {
			userId: user._id,
		};
		return this.jwtService.sign(payload);
	}

	async generateRefreshToken(user: UserDocument): Promise<string> {
		const payload = {
			userId: user._id,
		};

		const refreshToken = this.jwtService.sign(payload, {
			secret: this.config.jwt.refreshSecret,
			expiresIn: this.config.jwt.refreshExpiresIn,
		});

		const saltOrRounds = 10;

		const currentRefreshToken = await bcrypt.hash(
			refreshToken,
			saltOrRounds,
		);

		await this.userRepository.updateOne(
			{ _id: user._id },
			{
				refreshToken: currentRefreshToken,
			},
		);

		return refreshToken;
	}

	async login(loginDTO: LoginDTO) {
		// 유저가 있는지 없는 지 확인
		const { provider, providerId, name, image } = loginDTO;

		let user = await this.userRepository.findOne({
			provider,
			providerId,
		});

		let isNewUser = false;

		if (!user) {
			isNewUser = true;
			user = await this.userRepository.create({
				provider,
				providerId,
				name,
				image,
			});
		}

		if (!user.job && !user.personality) {
			isNewUser = true;
		}

		const accessToken = this.generateAccessToken(user);
		const refreshToken = await this.generateRefreshToken(user);

		return {
			accessToken,
			refreshToken,
			isNewUser,
		};
	}

	async refresh(refreshToken: string) {
		try {
			const decodedRefreshToken = this.jwtService.verify(refreshToken, {
				secret: this.config.jwt.refreshSecret,
			});
			const userId = decodedRefreshToken.userId;

			const user = await this.userRepository.findOne({ _id: userId });

			if (!user) {
				throw new UnauthorizedException(
					'No matching user with refresh token',
				);
			}

			const isRefreshTokenMatching = await bcrypt.compare(
				refreshToken,
				user.refreshToken,
			);

			if (!isRefreshTokenMatching) {
				throw new UnauthorizedException('Invalid refresh token');
			}

			const accessToken = this.generateAccessToken(user);

			return accessToken;
		} catch (err) {
			throw new UnauthorizedException('Invalid refresh token');
		}
	}
}
