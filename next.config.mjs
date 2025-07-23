/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 啟用靜態輸出
  // basePath: '/yclai_website', // 移除 basePath，因為使用自定義域名
  images: {
    unoptimized: true, // 禁用圖片優化以支持靜態輸出
  },
  trailingSlash: true, // 添加尾隨斜杠以支持靜態託管
}

export default nextConfig
