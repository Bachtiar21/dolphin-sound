import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dolphin-sound",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;