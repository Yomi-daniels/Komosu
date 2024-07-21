/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = {
  //...
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
module.exports = nextConfig;
