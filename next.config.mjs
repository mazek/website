import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
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
