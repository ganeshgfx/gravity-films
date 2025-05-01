/** @type {import('next').NextConfig} */
const nextConfig = {
     output: "export",
     distDir: "dist",
     images: {
          unoptimized: true,
     },
     assetPrefix: "",
     // Add redirect rules
     async redirects() {
          return [
               {
                    source: "/:path*",
                    destination: "/",
                    permanent: false,
                    // Add this condition to prevent redirect loop
                    basePath: false,
                    // Only redirect if not already on homepage
                    has: [
                         {
                              type: "query",
                              key: "redirected",
                              value: undefined,
                         },
                    ],
               },
          ];
     },
};

export default nextConfig;
