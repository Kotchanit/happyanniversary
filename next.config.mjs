/** @type {import('next').NextConfig} */
const isProd = process.argv.includes("build"); // Detect build command

const nextConfig = {
  output: "export", // Required for GitHub Pages
  basePath: isProd ? "/happyanniversary" : "", // Set basePath manually
  assetPrefix: isProd ? "/happyanniversary/" : "", // Set asset prefix
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  trailingSlash: true,
};

export default nextConfig;