/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production"; // Detect production

const nextConfig = {
  output: "export", // Required for GitHub Pages
  basePath: "/happyanniversary",
  assetPrefix:"/happyanniversary/",
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  trailingSlash: true, // Ensures correct static file references
};

export default nextConfig;