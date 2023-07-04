/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production'
})

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com']
  }
})

module.exports = nextConfig
