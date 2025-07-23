# YC Website

## 專案架構

```
yclai_website/
├── app/                # Next.js App Router page
├── components/         # React component
│   ├── ui/            # UI component
│   ├── loading-screen.tsx    
│   ├── particle-background.tsx # background
│   └── scroll-indicator.tsx    
├── hooks/             # React Hooks
├── lib/              
├── public/           
└── styles/           
```

## 技術棧

- Next.js 15.2.4
- React 19
- TypeScript
- Tailwind CSS
- GSAP
- Radix UI (UI component)
- Next-themes 

## 系統需求

- Node.js 18.0.0 
- pnpm 8.0.0
  
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
# Deploy trigger
