/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['links.papareact.com','avatars.dicebear.com']
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
