import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization for better SEO
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Compress responses for better performance
  compress: true,
  // Enable sitemap generation
  trailingSlash: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
    optimizePackageImports: ['@/components'],
  },
  // SEO-friendly headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ],
      },
    ]
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, if needed
  // remarkPlugins: [],
  // rehypePlugins: [],
  // If you use `MDXProvider`, uncomment the following line.
  // providerImportSource: "@mdx-js/react",
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
