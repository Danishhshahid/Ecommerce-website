import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'],  // Add 'cdn.sanity.io' to allowed domains for images
  },
};

export default nextConfig;
