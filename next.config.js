/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8080',
				pathname: '/assets/img/**',
			},
		],
	},
}

module.exports = nextConfig
