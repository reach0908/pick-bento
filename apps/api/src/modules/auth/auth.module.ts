import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtKakaoStrategy } from 'src/core/strategy/jwt-social-kakao.strategy';

@Module({
	controllers: [AuthController],
	providers: [AuthService, JwtKakaoStrategy],
})
export class AuthModule {}
