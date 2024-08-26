export const USAGE_STATUS = {
	USING: 'using',
	USED: 'used',
	NOT_USED: 'not_used',
} as const;

export const USAGE_STATUSES = Object.values(USAGE_STATUS);
export type UsageStatus = (typeof USAGE_STATUS)[keyof typeof USAGE_STATUS];
