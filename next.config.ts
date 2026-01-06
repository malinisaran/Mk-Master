import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,   // ⭐ REQUIRED for static export
  },
};

export default nextConfig;
