/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 啟用靜態輸出
  images: {
    unoptimized: true, // 禁用圖片優化以支持靜態輸出
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // 添加 TypeScript 和 ESLint 配置
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
