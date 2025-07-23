/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 確保資源路徑正確
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // 確保路由正確
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default nextConfig
