/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 啟用靜態輸出
  images: {
    unoptimized: true, // 禁用圖片優化以支持靜態輸出
  },
}

export default nextConfig
