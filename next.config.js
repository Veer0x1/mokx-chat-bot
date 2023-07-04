/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['lh3.googleusercontent.com','s3-alpha-sig.figma.com']
  }
}
