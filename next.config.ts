import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['sidewalkplants.s3.ca-central-1.amazonaws.com', 'eightyaday.s3.ca-central-1.amazonaws.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)

