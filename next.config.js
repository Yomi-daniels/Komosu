import { withContentlayer } from "next-contentlayer";
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default withContentlayer({
  nextConfig,
});
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
//   },
// };
// module.exports = nextConfig;
