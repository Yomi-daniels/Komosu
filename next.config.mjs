import { withContentlayer } from "next-contentlayer";
import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer(
  withMDX({
    pageExtensions: ["js", "jsx", "mdx"],
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {},
    swcMinify: true,
    reactStrictMode: true,
    compress: true,
    images: {
      domains: ["www.komosunetwork.com"],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      formats: ["image/avif", "image/webp"],
      minimumCacheTTL: 60,
    },
    async headers() {
      return [
        {
          source: "/:path*",
          headers: [
            { key: "Link", value: "</_next/static/css/styles.css>; rel=preload; as=style, </fonts/my-font.woff2>; rel=preload; as=font; type=font/woff2; crossorigin" },
            { key: "Alt-Svc", value: 'h3=":443"; ma=86400' },
            { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "X-Frame-Options", value: "DENY" },
            { key: "X-XSS-Protection", value: "1; mode=block" },
          ],
        },
      ];
    },
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: [/node_modules/, /\.aider/, /\.aider.*$/, /aider\.log$/],
      });
      return config;
    },
    productionBrowserSourceMaps: true,
    optimizeFonts: true,
  })
);

export default nextConfig;
