import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
