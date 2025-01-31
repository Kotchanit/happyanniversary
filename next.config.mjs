/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
//   basePath: "/happyanniversary",
//   assetPrefix: "/happyanniversary",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;