/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    basePath: "/public-page",
    reactStrictMode: true,
};

export default nextConfig;
