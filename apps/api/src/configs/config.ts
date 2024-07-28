export default () => ({
	mongoDB: {
		url: process.env.MONGODB_URL,
	},
	app: {
		host: process.env.HOST || 'localhost',
		port: parseInt(process.env.PORT, 10) || 3000,
	},
});
