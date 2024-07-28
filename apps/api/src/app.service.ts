import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import appConfig from './configs/app.config';

@Injectable()
export class AppService {
	constructor(
		@Inject(appConfig.KEY)
		private config: ConfigType<typeof appConfig>,
	) {}

	getHello(): { host: string; port: number } {
		const host = this.config.host;
		const port = this.config.port;

		return {
			host,
			port,
		};
	}
}
