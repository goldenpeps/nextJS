import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.BASE_PATH || "",
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    jsx: true,
  },
});

export default withMDX(nextConfig);
