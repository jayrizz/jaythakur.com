/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  images: { unoptimized: true },
  
  // Proxy configuration for external services
  async rewrites() {
    return [
      // API proxy routes handled by route handlers
    ]
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig