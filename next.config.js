/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://chat.openai.com',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://thesamur.ai',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
