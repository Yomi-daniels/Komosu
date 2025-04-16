// import { withContentlayer } from "next-contentlayer";
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   experimental: {
//     appDir: false,
//   },
// };
// export default withContentlayer({
//   nextConfig,
// });
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   reactStrictMode: true,
// };
// module.exports = {
//   //...
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },np
// };
// module.exports = nextConfig;
import { withContentlayer } from "next-contentlayer2";
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: false,
  },
};
export default withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  nextConfig,
});
