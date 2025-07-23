/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 如果使用自定義域名，不需要 basePath
  // 如果使用 username.github.io/repo-name，則需要設置 basePath
  // basePath: '/0lai0.github.io',
  images: {
    unoptimized: true,
  },
  // 確保靜態資源路徑正確
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  // 處理客戶端路由
  trailingSlash: true,
}

export default nextConfig
