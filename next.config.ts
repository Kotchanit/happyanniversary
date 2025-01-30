import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/happyanniversary',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
