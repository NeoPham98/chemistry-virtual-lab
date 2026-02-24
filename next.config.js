/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: false,

    // Allow serving large static files
    experimental: {},

    async headers() {
        return [
            {
                // CORS for API routes
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS,PUT,DELETE' },
                    { key: 'Access-Control-Allow-Headers', value: 'Content-Type,Authorization,token' },
                ],
            },
            {
                // Cache headers for large static assets
                source: '/libs/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
                ],
            },
        ]
    },

    // Rewrites: proxy non-API, non-file paths to API mock
    // The chemistry lab makes calls to paths like /passport/..., /user/...
    // These need to be redirected to our API handler
    async rewrites() {
        return [
            // nobook-style API paths → our mock handler
            { source: '/passport/:path*', destination: '/api/passport/:path*' },
            { source: '/user/:path*', destination: '/api/user/:path*' },
            { source: '/experiment/:path*', destination: '/api/experiment/:path*' },
            { source: '/module/:path*', destination: '/api/module/:path*' },
            { source: '/vip/:path*', destination: '/api/vip/:path*' },
            { source: '/activate/:path*', destination: '/api/activate/:path*' },
            { source: '/activation/:path*', destination: '/api/activation/:path*' },
            { source: '/payment/:path*', destination: '/api/payment/:path*' },
        ]
    },
}

module.exports = nextConfig
