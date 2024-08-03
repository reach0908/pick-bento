export const PROVIDER = {
	KAKAO: 'kakao',
} as const;

export const PROVIDERS = Object.values(PROVIDER);
export type Provider = (typeof PROVIDER)[keyof typeof PROVIDER];
