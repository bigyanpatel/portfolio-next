/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.freepnglogos.com","img.icons8.com"]
  }
}

module.exports = nextConfig
