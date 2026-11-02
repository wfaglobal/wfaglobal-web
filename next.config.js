/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The personal page moved from /books to /ravi; keep old links working.
      { source: '/books', destination: '/ravi', permanent: true },
    ]
  },
}
module.exports = nextConfig
