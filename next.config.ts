import type { NextConfig } from "next";

// @ts-ignore
const WebpackObfuscator = require('webpack-obfuscator');

const nextConfig: NextConfig = {
  // 1. SECURITY: Hide source maps
  productionBrowserSourceMaps: false,

  // 2. SECURITY: Add HTTP Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ],
      },
    ];
  },

  // Note: We added 'dev' and 'webpack' to the arguments
  webpack: (config, { dev, isServer, webpack }) => {
    
    // --- EXISTING MUPDF CONFIGURATION (Preserved) ---
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,      
      asyncWebAssembly: true,   
      layers: true,             
    };

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        module: false,
        process: false,
        buffer: false,
      };

      // Fix for node: prefixes
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(/^node:/, (resource: any) => {
          resource.request = resource.request.replace(/^node:/, "");
        })
      );
    }
    // ------------------------------------------------

    // 3. SECURITY: OBFUSCATION & WATERMARKING (Production Client Only)
    if (!dev && !isServer) {
      // Disable devtool (source maps) completely
      config.devtool = false;

      // A. Add Copyright Banner
      config.plugins.push(
        new webpack.BannerPlugin({
          banner: "© 2026 Nextooly. All rights reserved. Unauthorized reproduction or distribution is strictly prohibited.",
          raw: false,
          entryOnly: true,
        })
      );

      // B. Scramble the code (Performance Optimized Profile)
      config.plugins.push(
        new WebpackObfuscator(
          {
            compact: true,
            controlFlowFlattening: false, // Keep false for speed
            splitStrings: false,          // Keep false for speed
            identifierNamesGenerator: 'hexadecimal', 
            rotateStringArray: true,
            stringArray: true,
            stringArrayThreshold: 0.75,
            debugProtection: true,
            disableConsoleOutput: true,
            log: false,
            renameGlobals: false,
            selfDefending: true,
          },
          // Exclude frameworks to keep the build fast
          ['framework-*.js', 'main-*.js', 'commons-*.js', 'b-*.js'] 
        )
      );
    }

    return config;
  },
};

export default nextConfig;