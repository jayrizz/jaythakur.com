/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/book',
        destination: 'https://cal.com/jay-thakur-jxo6zg/30min',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
