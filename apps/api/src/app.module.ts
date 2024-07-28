import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import appConfig from './configs/app.config';
import dbConfig, { DB } from './configs/db.config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			// 환경 변수의 값을 캐싱하여 읽기 속도 향상
			cache: true,
			// 다른 모듈에서 import 하는 번거로움 제거
			isGlobal: true,
			load: [appConfig, dbConfig],
			// TODO: validation schema 추가하기
		}),
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => {
				console.log({ uri: configService.get(DB).mongoDB.uri });
				return {
					uri: configService.get(DB).mongoDB.uri,
					useNewUrlParser: true,
					useUnifiedTopology: true,
				};
			},
			inject: [ConfigService],
		}),
		UserModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
