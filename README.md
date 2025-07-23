# Personal Website

這是一個使用 Next.js 15 和 React 19 建立的個人網站專案，採用了現代的前端技術棧，包括 Tailwind CSS 和多個 Radix UI 組件。

## 專案架構

```
yclai_website/
├── app/                # Next.js App Router 頁面
├── components/         # React 共用組件
│   ├── ui/            # UI 基礎組件
│   ├── loading-screen.tsx    # 載入動畫
│   ├── particle-background.tsx # 粒子背景
│   └── scroll-indicator.tsx    # 滾動指示器
├── hooks/             # 自定義 React Hooks
├── lib/              # 工具函數和共用邏輯
├── public/           # 靜態資源
└── styles/           # 全局樣式
```

## 主要功能

1. **載入動畫系統**
   - 使用 GSAP 實現平滑的載入過渡效果
   - 粒子動畫背景
   - 進度條動畫
   - 優化的 hydration 處理

2. **響應式設計**
   - 適配桌面和移動設備
   - 流暢的暗色模式切換
   - 漸變色彩方案

3. **動畫效果**
   - 滾動觸發動畫
   - 懸停效果
   - 背景粒子效果
   - 平滑過渡效果

4. **性能優化**
   - 組件懶加載
   - 圖片優化
   - 動畫效能優化

## 技術棧

- Next.js 15.2.4
- React 19
- TypeScript
- Tailwind CSS
- GSAP (動畫)
- Radix UI (UI 組件)
- Next-themes (主題切換)

## 系統需求

- Node.js 18.0.0 或更高版本
- pnpm 8.0.0 或更高版本

## 本地開發

1. 克隆專案：
```bash
git clone [your-repository-url]
cd yclai_website
```

2. 安裝依賴：
```bash
pnpm install
```

3. 啟動開發伺服器：
```bash
pnpm dev
```

4. 開啟瀏覽器訪問 `http://localhost:3000`

## 部署到 GitHub Pages

1. **準備部署**

   首先，在 `next.config.mjs` 中添加必要的配置：
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/yclai_website',
     images: {
       unoptimized: true,
     },
   }
   ```

2. **創建部署腳本**

   在 `package.json` 中添加部署腳本：
   ```json
   {
     "scripts": {
       "deploy": "next build && touch out/.nojekyll && git add out/ && git commit -m \"Deploy\" && git subtree push --prefix out origin gh-pages"
     }
   }
   ```

3. **設置 GitHub Pages**

   - 前往 GitHub 倉庫設置
   - 在 "Pages" 部分選擇 "gh-pages" 分支
   - 選擇 "/(root)" 作為部署目錄

4. **執行部署**
   ```bash
   pnpm deploy
   ```

## 開發指南

1. **組件開發規範**
   - 使用 TypeScript 類型
   - 遵循 React 最佳實踐
   - 確保組件可重用性

2. **樣式開發**
   - 使用 Tailwind CSS 工具類
   - 遵循設計系統顏色變量
   - 確保暗色模式支援

3. **動畫開發**
   - 使用 GSAP timeline 管理動畫序列
   - 優化動畫性能
   - 確保可訪問性

4. **測試檢查清單**
   - 響應式設計適配
   - 暗色模式切換
   - 動畫效果
   - 載入效能
   - 跨瀏覽器兼容性

## 故障排除

1. **Hydration 錯誤**
   - 確保服務端和客戶端渲染結果一致
   - 使用 useEffect 處理客戶端特定邏輯
   - 檢查隨機值生成時機

2. **動畫問題**
   - 檢查 GSAP timeline 序列
   - 確認元素引用是否正確
   - 驗證動畫觸發條件

3. **樣式問題**
   - 檢查 Tailwind 類名
   - 確認暗色模式類名
   - 驗證響應式設計斷點

## 貢獻指南

1. Fork 專案
2. 創建功能分支
3. 提交更改
4. 推送到分支
5. 創建 Pull Request

## 授權

[添加你的授權信息] 