import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Avoid bundling 'canvas' for the client-side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      };
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',  // Halaman tujuan redirect
        permanent: true,       // Menandakan ini adalah redirect permanen
      },
    ];
  },
};

export default nextConfig;
