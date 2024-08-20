/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "export",
  basePath: process.env.BASE_PATH || "",
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
