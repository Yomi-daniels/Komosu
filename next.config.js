import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Linting: Ignore ESLint during builds for faster production builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Use Pages Router (already configured)
  experimental: {
    appDir: false,
    workers: 4, // Parallelize builds for faster compilation
  },

  // Enable production optimizations
  swcMinify: true, // Use SWC for faster minification
  reactStrictMode: true, // Catch potential issues in development
  compress: true, // Enable Gzip compression for smaller response sizes

  // Optimize images for production
  images: {
    domains: ["example.com"], // Add domains for external images (e.g., your CDN)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Optimize for common device widths
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Optimize for common image sizes
    formats: ["image/avif", "image/webp"], // Use modern formats for better compression
    minimumCacheTTL: 60, // Cache optimized images for 60 seconds
  },

  // Configure HTTP headers for performance and security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Preload critical assets (CSS, fonts)
          {
            key: "Link",
            value:
              "</_next/static/css/styles.css>; rel=preload; as=style, </fonts/my-font.woff2>; rel=preload; as=font; type=font/woff2; crossorigin",
          },
          // Enable HTTP/3 for better performance
          {
            key: "Alt-Svc",
            value: 'h3=":443"; ma=86400',
          },
          // Cache static assets for a year (immutable assets)
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          // Security headers
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Exclude Aider files from Webpack processing
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: [
        /node_modules/,
        /\.aider/, // Exclude .aider directories
        /\.aider.*$/, // Exclude files like .aider.config
        /aider\.log$/, // Exclude aider.log
      ],
    });

    // Bundle analysis for production builds
    if (process.env.ANALYZE === "true") {
      const { BundleAnalyzerPlugin } = require("@next/bundle-analyzer")({
        enabled: true,
      });
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: isServer
            ? "../analyze/server.html"
            : "./analyze/client.html",
        })
      );
    }

    return config;
  },

  // Enable source maps for production debugging
  productionBrowserSourceMaps: true,

  // Optimize font loading
  optimizeFonts: true,
};

export default withContentlayer(nextConfig);
