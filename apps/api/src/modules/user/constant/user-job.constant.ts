export const JOB = {
	DEVELOPER: 'developer',
} as const;

export const JOBS = Object.values(JOB);
export type Job = (typeof JOB)[keyof typeof JOB];
