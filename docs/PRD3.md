**吉卜力風格 3D 個人作品集網站開發規格書 (SRS)**

**1\. 專案概述與技術架構**

本專案旨在為創作者 **鍾沛良** 打造一個結合吉卜力手繪動畫溫度（Ghibli Watercolor & Cel-Shaded Aesthetic）與 **3D WebGL 即時互動渲染**的個人作品集網站。透過溫暖的自然光影、賽璐珞（Cel-Shading）材質與細膩的微互動，完整呈現 3D 建模作品、跨領域個人特質與職涯規劃，並支援無縫部署於 **Render** 平台。

**核心技術選型**

| **層級**        | **技術選型**                                          | **說明**                                               |
| --------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| **前端框架**    | React 18+ (Vite 模板)                                 | 確保高效能建置與 Render 靜態託管相容性                 |
| **3D 渲染核心** | Three.js、@react-three/fiber (R3F)、@react-three/drei | 負責 3D 場景渲染、燈光控制、模型載入與鏡頭互動         |
| **樣式與主題**  | Tailwind CSS + 手繪風格自訂樣式                       | 結合水彩紙張紋理、手繪筆刷邊框與圓潤襯線字體           |
| **動畫庫**      | Framer Motion                                         | 實現雲朵飄動、卡片微浮動、信紙展開與轉場動態           |
| **3D 資源規格** | .glb / .gltf（搭配 Draco 壓縮）                       | 單一展示模型控制在 **5MB–15MB** 以內，確保網頁秒開流暢 |
| **託管部署**    | Render (Static Site)                                  | 綁定 GitHub 自動觸發 CI/CD 建置與發布                  |

**2\. 視覺風格與 UI/UX 規範 (Ghibli / Cel-Shaded Theme)**

- **色彩計畫 (Palette)**：
  - **主背景**：溫暖羊皮紙米白（#FBF8F1）、水彩霧藍（#E8F1F5）、暮光深林綠（#1E2B24，用於夜間切換或重點區塊）。
  - **強調色**：天空湛藍（#4A90E2）、草原嫩綠（#68B984）、落日暖橘（#F28C52）、向日葵暖黃（#F5C75B）。
  - **介面邊框與文字**：深炭褐墨線（#2C2A29），搭配手繪感不規則圓角邊框（border-radius: 16px 24px 18px 22px）與柔和紙張陰影（box-shadow: 0 8px 24px rgba(44, 42, 41, 0.08)）。
- **視覺元素與 3D 著色規範**：
  - **材質與光影**：全站 3D 模型採用自訂 **Toon / Cel-Shading 著色器**，模擬手繪賽璐珞的明暗交界線，搭配柔和的輪廓外描邊（Outline Effect）與環境光遮蔽（AO）。
  - **自然動態氛圍**：背景融入微風吹拂的雲朵、飄落的花瓣或光塵（Particle System），營造宛如置身吉卜力動畫世界中的療癒沉浸感。
  - **日文與手繪裝飾標籤**：如 // 作品記録 01、アトリエ・鍾（Atelier Chung）。
- **效能與降級機制 (Graceful Degradation)**：
  - **載入體驗**：首頁與各 3D 視窗均配置 React.Suspense，搭配手繪風「龍貓/飛行器前進」或「水彩暈染進度條」骨架屏（Skeleton Loader）。
  - **裝置自適應**：偵測行動裝置或低階 GPU 時，自動限制渲染解析度倍率（dpr={\[1, 1.5\]}）並關閉複雜的即時陰影計算。

**3\. 頁面模組與功能規格**

全站採用**單頁式故事卷軸（Storybook Scroll Layout）**，頂部配備懸浮木質/紙質感導覽列（首頁、3D 作品、關於我、職涯旅程、聯絡信箱）。

**模組一：獨特自我介紹（Hero Section / 主視覺區）**

- **核心定位**：營造走進「個人數位工作室」的溫暖第一印象，結合即時 3D 意象展示。
- **畫面佈局**：
  - **左側 / 前景 (UI)**：
    - **創作者名牌**：鍾沛良 // CHUNG PEI-LIANG（搭配手寫字體動態浮現）。
    - **核心標籤**：22歲 ｜ 3D 視覺創作者 × 節奏表演者。
    - **狀態徽章**：STATUS: 開放專案合作與職涯機會（綠葉呼吸燈效果）。
    - **互動按鈕 (CTA)**：「推開工作室大門（瀏覽作品）」、「查看冒險履歷」。
  - **右側 / 背景 (3D Canvas)**：
    - **主展示物件**：可自由拖曳視角（OrbitControls，限制仰角避免穿幫）的吉卜力風格 3D 微縮場景（例如：漂浮在雲端上的個人創作小屋、擺滿建模工具與麥克風的陽光工作桌）。
    - **滑鼠連動與互動**：場景隨滑鼠游標產生輕微視差傾斜（Parallax Tilt）；點擊場景中的特定物件（如桌上的收音機或小精靈）會觸發專屬可愛待機動畫（Idle/Action Animation）。

**模組二：精選作品 / 案例研究（Featured Works / Case Studies）**

- **核心定位**：展示 3D 建模與材質渲染實力，提供零距離 3D 模型檢視與製作解析。
- **功能規格**：
  1. **作品分類篩選器 (Tags)**：
     - 全部作品 (All)、角色模型 (Character)、場景與建築 (Environment & Props)、風格化道具 (Stylized Assets)。
  2. **作品呈現形式**：
     - **手繪畫框網格**：卡片採用水彩畫紙質感與木框邊角裝飾，滑鼠懸停時卡片輕微上浮並伴隨微風光影掃過。
     - **即時 3D 檢視器（Modal / Drawer 彈窗）**：
       - 點擊卡片開啟全螢幕或大尺寸 3D 預覽視窗，支援 360 度旋轉、滾輪縮放與右鍵平移。
       - **檢視模式切換**：吉卜力賽璐珞渲染 (Cel-Shaded / Final)、拓撲線框模式 (Wireframe)、白模/法線檢視 (Matcap / Clay)。
       - **模型技術面板**：顯示貼圖解析度（2K/4K）與面數資訊（Polycount: Verts / Faces）。
  3. **案例研究解析 (Case Study Detail)**：
     - **2D 草圖到 3D 成品對比拉桿（Before / After Slider）**：讓訪客左右拖曳比較原始設計手稿與最終 3D 渲染成品。
     - **製作工具標籤**：Blender、ZBrush、Substance 3D Painter、Unity 等。
     - **創作故事與技術難點**：條列說明造型發想、手繪貼圖筆觸處理與光影烘培技巧。

**模組三：關於我與專業技能（About Me & Skills）**

- **核心定位**：將專業 3D 技術力與「唱、跳、Rap」個人特質結合，包裝為「冒險者手帳 / 創作者素質面板」。
- **功能規格**：
  1. **個人簡介與雙模態頭像**：
     - 手繪信紙風格的自我介紹，分享身為 22 歲創作者對視覺敘事與動態美學的熱情。
     - **頭像翻轉互動**：支援點擊切換「吉卜力風手繪 2D 頭像」與「3D 風格化 Q 版公仔頭像」。
  2. **3D 能力數值雷達圖 (Hexagon Radar Chart)**：
     - 視覺化呈現五大核心指標：高模雕刻 (Sculpting)、拓撲佈線 (Topology)、手繪與 PBR 貼圖 (Texturing)、骨架綁定與動畫 (Rigging & Anim)、即時引擎整合 (Engine Integration)。
  3. **技能與跨界天賦欄 (Creator's Satchel)**：
     - **3D 軟體工具組**：以手繪圖示呈現 Blender、Substance Painter、Photoshop、Premiere Pro、Unity 掌握度。
     - **特別天賦：唱、跳、Rap（節奏與動態感知力）**：
       - 獨立設計「節奏共鳴（Rhythm & Flow）」特質卡片，說明音樂與舞蹈背景如何直接賦能 3D 創作——包含**角色動畫的律動感（Animation Timing & Spacing）**、**分鏡剪輯的節拍掌控**，以及**賦予角色靈魂的表演張力**。

**模組四：職涯發展（Career Trajectory & Vision）**

- **核心定位**：以吉卜力動畫中常見的「手繪冒險地圖（Adventure Map）」呈現清晰的職業規劃。
- **功能規格**：
  - **階段一：起點與深耕（Current - 22歲）**：精進風格化 3D 角色與場景製作流程，建立高品質個人作品集與即時渲染展示能力。
  - **階段二：商業實戰與跨界整合（Short-Term）**：進入遊戲、動畫或互動多媒體產業擔任 **3D 美術設計師 / 角色與場景建模師**，將動態節奏感融入商業專案。
  - **階段三：全方位視覺敘事者（Long-Term）**：朝向 **3D 視覺指導（Art Director）** 邁進，結合 3D 空間美學、音樂與表演藝術，打造能觸動人心的沉浸式互動體驗。

**模組五：聯絡方式（Contact）**

- **核心定位**：設計為「吉卜力空中郵局 / 瓶中信」風格的溫馨聯絡區塊，方便企業 HR 或合作夥伴快速聯繫。
- **功能規格**：
  1. **直接聯絡卡片（一鍵複製 / 啟動）**：
     - **聯絡電話**：6663629（點擊可直接撥號或一鍵複製，附帶「已複製到剪貼簿！」手繪提示氣泡）。
     - **電子信箱**：<qwer878787@gmail.com>（支援 mailto: 啟動與一鍵複製）。
  2. **傳送信件表單 (Postcard Form)**：
     - 欄位：您的稱呼 (Name)、電子信箱 (Email)、合作類型 (工作邀約 / 3D 專案委託 / 交流合作)、信件內容 (Message)。
     - 表單驗證與寄送：整合 **EmailJS** 或 **Formspree** 實現免後端直接寄信至 <qwer878787@gmail.com>，送出時播放「信封蓋上火漆印章並飛出」的動畫回饋。
  3. **頁尾 (Footer)**：
     - 手繪風版權宣告：© 2026 鍾沛良 Chung Pei-Liang. Crafted with React & Three.js.
     - 附帶「搭乘風之翼回到頂部（Back to Top）」快捷按鈕。

**4\. Render 部署配置與專案目錄結構**

**4.1 推薦專案結構**

Plaintext

```
ghibli-3d-portfolio/
├── public/
│   ├── models/            # Draco 壓縮後的 .glb 3D 模型檔案
│   ├── textures/          # Matcap 材質球、水彩紙紋理貼圖
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── canvas/        # R3F 3D 場景、模型檢視器、ToonShader 元件
│   │   ├── layout/        # 導覽列、頁尾、Suspense 載入畫面
│   │   └── sections/      # Hero, FeaturedWorks, AboutSkills, CareerMap, Contact
│   ├── data/
│   │   └── portfolioData.js # 作品清單、面數規格、職涯節點資料
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

**4.2 Render Static Site 部署參數**

在 Render 後台建立 **Static Site** 時，依照以下設定即可完成自動化部署：

- **Build Command**：npm install && npm run build
- **Publish Directory**：dist
- **Redirects / Rewrites 設定**：新增 Source: /\* Destination: /index.html（Action: Rewrite），確保前端路由與重新整理正常運作。

這份規格書已經可以直接作為開發藍圖使用！你想先從哪個部分開始動手實作？我可以為你生成 **React + Three.js 的專案基礎架構程式碼**、**吉卜力風格的 Toon Shader 範例**，或是先寫出 **Hero 區塊與聯絡表單的完整前端元件**。