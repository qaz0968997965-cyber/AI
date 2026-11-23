# 鍾沛良 // ATELIER CHUNG — 吉卜力風格 3D 個人作品集網站

本專案依據 `docs/PRD3.md`（吉卜力風格 3D 個人作品集網站開發規格書）與 `references/stitch/` 設計系統與原始匯出程式碼打造，結合 **Ghibli Watercolor & Cel-Shaded Storybook（吉卜力水彩與賽璐珞動畫手繪美學）** 與 **Three.js 3D WebGL 即時互動渲染**，呈現 3D 視覺創作者 × 節奏表演者 **鍾沛良 (CHUNG PEI-LIANG)** 的作品集與冒險履歷。

---

## 1. 核心特色與功能模組

1. **模組一：獨特自我介紹與 3D 雲端工作室 (`HeroSection` + `FloatingIslandScene`)**
   - 顯示創作者名牌、綠葉呼吸燈狀態徽章（`STATUS: 開放專案合作與職涯機會`）與核心標籤（`22歲 ｜ 3D 視覺創作者 × 節奏表演者`）。
   - 內建 **Three.js 3D 漂浮島嶼微縮場景 (`ANIMATION_6`)**：具備自訂 3 階 Cel-Shading 卡通著色器、逆向外擴描邊（Inverted Hull Outline）、漂浮雲朵、上升光塵粒子、滑鼠視差傾斜、視角拖曳旋轉（限制仰角避免穿幫），並支援點擊木屋、樟樹、畫架收音機或小煤炭精靈觸發 120 BPM 節奏律動待機動畫。
   - 支援「白晝暖陽 / 暮光深林」光影氛圍切換與 `React.Suspense` 手繪骨架載入畫面 (`CanvasLoader`)。

2. **模組二：精選 3D 作品與案例研究 (`FeaturedWorksSection` + `ModelInspectorModal`)**
   - 支援分類篩選器：`全部作品 (All)`、`角色模型 (Character)`、`場景與建築 (Environment)`、`風格化道具 (Props)`。
   - 點擊作品卡片或 `view_in_ar` 按鈕可開啟 **即時 3D 檢視器彈窗 (`ModelInspectorModal`)**：
     - **即時 3D 視圖**：支援 360° 旋轉與滾輪縮放，並可即時切換 `Cel-Shaded`（吉卜力賽璐珞渲染 + 外描邊）、`Wireframe`（拓撲線框模式）、`Matcap Clay`（白模雕刻檢視）。
     - **2D 草圖 ⇄ 3D 成品對比拉桿 (`Before / After Slider`)**：左右拖曳比較 2D 原始設計手稿與 3D 最終渲染成品。
     - **技術面板與案例解析**：完整列出多邊形面數（Faces / Verts）、貼圖解析度（2K / 4K）、製作工具標籤與三階段創作故事筆記。

3. **模組三：關於我與冒險者手帳 (`AboutSkillsSection` + `HexagonRadarChart`)**
   - **雙模態 3D 翻轉頭像**：點擊頭像可 180° 翻轉切換「2D 吉卜力水彩手繪肖像」與「3D Q版公仔頭像」。
   - **3D 核心素質能力面板**：同時提供 Stitch 設計稿進度條與 **五維度能力數值雷達圖 (`HexagonRadarChart`)**（貼圖 96%、雕刻 95%、拓撲 92%、引擎整合 90%、骨架動畫 88%）。
   - **常備冒險裝備箱 (`Toolkit Satchel`)** 與 **跨界特別天賦「節奏共鳴 (Rhythm & Flow)」**：呈現唱、跳、Rap 如何賦能 3D 動畫律動（Timing & Spacing）、分鏡剪輯節拍與角色表演張力。

4. **模組四：冒險地圖與職涯願景 (`CareerMapSection`)**
   - 手繪墨線虛線時間軸，呈現階段一（`CURRENT // STAGE 01` 22 歲・當下）、階段二（`SHORT-TERM // STAGE 02` 1~3 年目標）、階段三（`LONG-TERM // STAGE 03` 全方位視覺敘事者 Art Director）。

5. **模組五：空中郵局・瓶中信聯絡專區 (`ContactSection`)**
   - **專案熱線 (`6663629`)** 與 **電子信箱 (`qwer878787@gmail.com`)** 快速卡片：支援直接撥號 / 寄信與一鍵複製（附帶「已複製到剪貼簿！」提示氣泡）。
   - **空中信札明信片表單**：包含稱呼、聯絡信箱、合作類型與信札內容，送出時播放「蓋上火漆印章並飛往雲端郵局」互動動畫。

---

## 2. 專案目錄結構

```text
.
├── docs/
│   └── PRD3.md                                   # CURRENT 網站開發規格書 (SRS)
├── references/
│   └── stitch/                                   # Stitch 原始設計規範與匯出 HTML/Three.js 程式碼
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── FloatingIslandScene.jsx           # Hero 3D 雲端工作室漂浮島嶼場景 (Toon + Outline)
│   │   │   ├── HexagonRadarChart.jsx             # 五維度 3D 能力數值雷達圖 (SVG)
│   │   │   └── ModelInspectorModal.jsx           # 作品 360° 3D 檢視器 + 2D/3D 對比拉桿彈窗
│   │   ├── layout/
│   │   │   ├── TopAppBar.jsx                     # 頂部導覽列與白晝/暮光氛圍切換
│   │   │   ├── BottomNavBar.jsx                  # 底部故事卷軸導覽列 (物語/作品集/草図/通信)
│   │   │   ├── Footer.jsx                        # 頁尾版權宣告與「乘風滑翔回到頂部」按鈕
│   │   │   ├── SectionDivider.jsx                # 手繪風章節分隔線
│   │   │   └── CanvasLoader.jsx                  # React.Suspense 水彩暈染載入骨架屏
│   │   └── sections/
│   │       ├── HeroSection.jsx                   # 模組一：自我介紹與 3D 主視覺區
│   │       ├── FeaturedWorksSection.jsx          # 模組二：精選作品篩選與卡片網格
│   │       ├── AboutSkillsSection.jsx            # 模組三：冒險手帳、翻轉頭像、雷達圖與節奏共鳴
│   │       ├── CareerMapSection.jsx              # 模組四：手繪冒險地圖職涯路徑
│   │       └── ContactSection.jsx                # 模組五：空中郵局、一鍵複製與火漆印章信札表單
│   ├── data/
│   │   └── portfolioData.js                      # 創作者資料、4 件精選作品規格、技能與職涯節點資料
│   ├── App.jsx                                   # 主應用容器與單頁故事卷軸佈局
│   ├── main.jsx                                  # React 18 掛載入口
│   └── index.css                                 # Tailwind CSS 與吉卜力手繪墨線/紙張紋理樣式
├── index.html                                    # HTML 入口與 Google Fonts / Material Symbols
├── package.json                                  # 專案相依套件與腳本設定
├── tailwind.config.js                            # Stitch & PRD3 色彩、字體與間距設定
├── postcss.config.js                             # PostCSS 設定
└── vite.config.js                                # Vite 開發與建置設定
```

---

## 3. 安裝與本機啟動方式

### 環境需求
- **Node.js**: `v18.15.0+`
- **npm**: `9.9.0+`

> 若本機 PowerShell 尚未將 Node.js 加入預設 PATH，可先執行：
> ```powershell
> $env:PATH = "C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\Microsoft\VisualStudio\NodeJs;$env:PATH"
> ```

### 安裝相依套件
```bash
npm install
```

### 啟動開發伺服器
```bash
npm run dev
```
啟動後請於瀏覽器開啟：**http://localhost:5173/**

### 正式環境建置 (Render Static Site 相容)
```bash
npm run build
```
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
