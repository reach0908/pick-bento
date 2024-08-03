import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtKakaoStrategy } from './strategy/jwt-social-kakao.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService, ConfigType } from '@nestjs/config';
import authConfig, { AUTH } from 'src/configs/auth.config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserModule } from '../user/user.module';

@Module({
	imports: [
		UserModule,
		PassportModule,
		JwtModule.registerAsync({
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => {
				const config: ConfigType<typeof authConfig> =
					configService.get(AUTH);
				return {
					global: true,
					secret: config.jwt.secret,
					signOptions: { expiresIn: config.jwt.expiresIn },
				};
			},
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, JwtKakaoStrategy, JwtStrategy],
})
export class AuthModule {}
