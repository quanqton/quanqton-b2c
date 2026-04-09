import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
