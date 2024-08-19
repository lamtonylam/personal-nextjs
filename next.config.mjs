/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    output: "export",
    basePath: process.env.BASE_PATH || "",
};

export default nextConfig;
