export const creatorProfile = {
  name: '鍾沛良',
  enName: 'CHUNG PEI-LIANG',
  studioTitle: '鍾沛良 // ATELIER',
  jpSubtitle: '作品記録・セルシェーディング',
  age: 22,
  level: 'LV. 22 創作者',
  roleTag: '22歲 ｜ 3D 視覺創作者 × 節奏表演者',
  enRole: '3D Artist & Rhythm Performer',
  status: 'STATUS: 開放專案合作與職涯機會',
  bioPitch:
    '以手繪賽璐珞 (Cel-Shaded) 美學融合溫潤吉卜力調色，將音樂節奏與即時渲染技術灌注於 3D 空間雕塑。打造富有呼吸感、生命力與冒險溫度的立體奇幻宇宙。',
  letterParagraphs: [
    '「你好！我是 22 歲的沛良。對我而言，3D 建模從不只是冷冰冰的多邊形頂點組合，而是在數位螢幕裡堆疊出有溫度、會呼吸的手作工藝品。」',
    '從賽璐珞動畫電影的溫厚筆觸，到動態捕捉中的即興身體旋律，我擅長將表演藝術的節奏起伏轉換為立體空間的動態靈魂。'
  ],
  avatars: {
    twoD: {
      label: '2D 手繪',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPgCS8iTw5pJCZLsDhWkhtUMZ9mRsXEVdnCbifsUJuSEzN8wjT2Nf7R0VLlJYtoxNW__NIs_8Ehp3O_SrWVw2sI6yOB2cwAl4n7nBu3yIX8U8jU03fFrldsIRjY76GnnJki_L8J6RtVsYp4GtcPPGH8Q_Ta2faJnb-HfirBG3M20uDVt1zzsj8J_EbzKgYWCVADN3B-jMFCJrafPbAiDYdQkRCEtB8cbnlWZlE4uk',
      alt: 'A warm hand-drawn Studio Ghibli style watercolor 2D self-portrait of a thoughtful 22-year-old Taiwanese male 3D artist wearing glasses, loose linen shirt, holding a wooden stylus pencil against a soft pastel amber meadow backdrop.'
    },
    threeD: {
      label: '3D Q版',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaSO7kJ7FsjoZD9E9LQrRjsb1V0-gxU5AV8puKbjORS6kOGTMWjcnVlCP0WbDZ-jo0SRCb_cP5KVkY1TRQrIj9CU5pR8MtEMH2jNXMcFRUB5ZzYOnENMooLnVPWDpgKd2_UjGqIgvKLAS0iYS1T6cocbyJlVqxV_qo4Nv5molHIq-nUeylY-1YISRgnufBbsY0R0OUe_2l3Q_6HQhz4CYFH72P4zPClbvJdvt9HBY',
      alt: 'A stylized 3D collectible vinyl chibi figure of Chung Pei-Liang with oversized headphones, hip hop streetwear hoodie, and miniature glowing digital sculpting tablet in hand, rendered with cel-shaded anime textures and crisp specular rim lights.'
    }
  },
  contact: {
    phone: '6663629',
    email: 'qwer878787@gmail.com'
  }
};

export const projectCategories = [
  { id: 'all', label: '全部作品 (All)' },
  { id: 'character', label: '角色模型 (Character)' },
  { id: 'env', label: '場景與建築 (Environment)' },
  { id: 'props', label: '風格化道具 (Props)' }
];

export const featuredProjects = [
  {
    id: 'airship-kazekirimaru',
    code: 'PROJECT NO. 01 // STYLIZED AIRSHIP',
    jpTag: '// 作品記録 01',
    title: '「空賊飛行艇・風切丸」',
    category: 'props',
    modelType: 'airship',
    polycountBadge: '45K Faces',
    polycountDetail: '45,000 Polygons (88,400 Tris)',
    vertsDetail: '46,210 Verts',
    badgeColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    techBadge: '4K Cel-Texture',
    textureSpec: '4K Cel-Textured Map (2 Sets)',
    tools: ['Blender', 'Substance 3D Painter', 'Unity URP'],
    tags: ['Inverted Hull', 'Substance 3D', 'Stylized PBR'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyGpKMYvbevmGY6TFdeYRlp4NUcmV6RJTfBtHwjgwWgjdiDjA7oMseGcrnr-F4iR5ASGuvjjR2iObwTG8rQZzxiR7OsRDYO40qUAr7wPL3GF4SLQBbW3L_MA-1cJ3evx7Nh4DECf5m0gG_SvGjVIYlNfgoErncTucxvgoBj_zqqfbx4pb5liBTosumQ5NdKJCSF6-Qu2UAGDl8fu5JyRRs86yTR6z5n3ipFihAAZM',
    imageAlt:
      'A fantastical Miyazaki-style cel-shaded dieselpunk airship named Kazekirimaru with wooden hull and brass propellers cruising through fluffy watercolor cumulus clouds at dawn.',
    summary:
      '以吉卜力機械奇想為雛型。全手繪邊緣法線貼圖與逆向外擴描邊 (Inverted Hull Outline)，展現翱翔於高空氣流的冒險精神。',
    notes:
      '運用非真實感渲染 (NPR) 拓撲技術，還原厚塗水彩在黃銅鈑金與木製舵輪上的磨損觸感。',
    caseStudy: [
      '造型發想：結合 19 世紀蒸氣飛船與木造帆船結構，強化船首黃銅螺旋槳與鼓風機翼的視覺重心。',
      '手繪貼圖筆觸：在 Substance Painter 中自訂水彩乾刷筆刷，於邊緣磨損處疊加暖橘與檸檬黃色偏。',
      '光影烘培與描邊：採用頂點色控制 Inverted Hull 描邊粗細，確保遠近鏡頭皆維持手繪賽璐珞線條張力。'
    ]
  },
  {
    id: 'spirit-seiran',
    code: 'PROJECT NO. 02 // SPIRIT CREATURE',
    jpTag: '// 作品記録 02',
    title: '「森林守護獸・青嵐」',
    category: 'character',
    modelType: 'creature',
    polycountBadge: '28K Verts',
    polycountDetail: '26,400 Polygons (51,800 Tris)',
    vertsDetail: '28,150 Vertices',
    badgeColor: 'bg-[#68B984] text-on-primary',
    techBadge: 'Hand-Painted',
    textureSpec: '2K Hand-Painted Wash + Alpha Cards',
    tools: ['ZBrush', 'Blender', 'Substance 3D Painter'],
    tags: ['Character Rig', 'Blendshapes', 'Watercolor Shading'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0HXaAJlMLz_LUXI2V-OV7jSyt5XTmbz5T0FwPgq5tKfUOGKU_FUAaSH0-9jIR5BPVJgyDTeylR-wU5JaELYgxQBhV_IibZ1V1g_AeIRxjF86ebIaKLZaYh7BI_bSMnzABsFDAujotzexLOTgyZjjRlr_xmHules2J6PlHzsZQoe2hiGEeOHei2OxShFUgfcsbnAxErEYvB8VHmhJJZT31LjYhVZI0kpQ4TXOU-UA',
    imageAlt:
      'A stylized Ghibli woodland spirit creature named Seiran resembling an organic moss-covered stone lion with glowing amber eyes and leaf mane, sitting in a serene enchanted moss forest.',
    summary:
      '從草圖雕刻至毛髮面片 (Hair Cards) 均手工排布，賦予古老森林生靈沉靜而溫柔的生命感，支援自定義呼吸骨架動畫。',
    notes:
      '有機生物雕刻與苔蘚毛髮的面片排布，結合表情骨架控制器 (Facial Blendshapes) 與呼吸起伏循環。',
    caseStudy: [
      '造型發想：以台灣雲霧森林與古老石獅為靈感，融合岩石肌理與柔軟青苔鬃毛的材質對比。',
      '法線傳遞技巧：將球體法線投射（Normal Transfer）至葉片與毛髮面片，創造蓬鬆如吉卜力樹冠的柔和受光面。',
      '動態與表情：建置 18 組 Blendshapes 與胸腔呼吸律動骨架，呈現沉穩而富靈性的待機動態。'
    ]
  },
  {
    id: 'alchemist-greenhouse',
    code: 'PROJECT NO. 03 // DIORAMA ENVIRONMENT',
    jpTag: '// 作品記録 03',
    title: '「雲端溫室與藥草工作台」',
    category: 'env',
    modelType: 'greenhouse',
    polycountBadge: '62K Faces',
    polycountDetail: '62,000 Faces (118,000 Tris)',
    vertsDetail: '64,900 Verts',
    badgeColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    techBadge: 'Toon Lighting',
    textureSpec: '4K Trim Sheet + Watercolor Decals',
    tools: ['Blender', 'Photoshop', 'Unity URP'],
    tags: ['Modular Kit', 'Trim Sheets', 'Lighting Moods'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbHPNDqJ2qzBPWTX-8SD_DkMsKn8gcvnqq3ss7Gmb6SuzP4aOilmWlTmY8aIxj9WFuB3UseFeS5Z0C-f8Ra90dg-AVsmRQr--K6W-GiDEAoIwjOl2WsNwiPfgPUm-nnx02Nglbl9mPUdruL0yRzg847qrPw84x6gr3mX1Wv8yNRjuEHtUd2OMCh3T5XgpCAEkqKcbQcjqhGjNp7I5eu3x-80ex369oZQWhvPeMlK8',
    imageAlt:
      'An isometric 3D diorama of an alchemist greenhouse workshop filled with hanging glass terrariums, potion vials, brass astrolabes, and sunlit ivy creeping over wooden window frames.',
    summary:
      '模組化室內微縮場景。透過 Trim Sheets 貼圖極大化重複運用效率，並運用 Unity URP 卡通著色器展現晨昏日光過渡。',
    notes:
      '模組化建築組件配合即時自定義卡通著色器 (Custom Toon Shader)，可自如切換白晝暖陽與黃昏暮光。',
    caseStudy: [
      '場景敘事構圖：以等距微縮視角（Isometric Diorama）配置百草櫃、蒸餾器皿與懸吊生態瓶，營造剛離開座位的生活感。',
      '貼圖優化：使用單張 4K 木石金屬共用 Trim Sheet 搭配水彩污漬 Decal，大幅降低 Draw Calls。',
      '光影烘焙：結合 Lightmap 柔和環境光遮蔽（AO）與即時體積光束（Volumetric Sunbeams）表現塵埃微粒。'
    ]
  },
  {
    id: 'clockwork-gramophone',
    code: 'PROJECT NO. 04 // RHYTHM PROP',
    jpTag: '// 作品記録 04',
    title: '「發條音樂盒與唱片機」',
    category: 'props',
    modelType: 'gramophone',
    polycountBadge: '16K Faces',
    polycountDetail: '16,200 Faces (30,400 Tris)',
    vertsDetail: '17,080 Verts',
    badgeColor: 'bg-[#F28C52] text-on-primary',
    techBadge: 'Mechanical Anim',
    textureSpec: '2K PBR Stylized Metallic-Roughness',
    tools: ['Blender', 'Substance 3D Painter', 'Premiere Pro', 'Unity'],
    tags: ['BPM Sync', 'Mechanical Rig', 'Sound FX Link'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZqj9Qh6GdGzPrWwF8PkGav2HQZ4IQjrxwtRxz2mZR3gUiqQWr9T43_6CQfg4yy31mh4CfwO6o0noatRMT_szE--b5nD3sGNfplX0plyz62JtlxgpCbbt-r955Ih4iUxlFJdrCMad1nS_oZyX6PbI2cKoCmlp3reAie0pjdug9dOObjupskHiJqxEk_Y8PVHsnYTKUee7DE3ZIkVB6sjwRPmChMhZM2rzAD_3xvDM',
    imageAlt:
      'A vintage clockwork music box combined with an ornate gramophone, featuring rotating gears, luminous sound crystal, and brass sound horn etched with stylized musical runes.',
    summary:
      '將節奏創作者對音樂的感知具象化為機械運動。精準 120 BPM 旋律齒輪咬合動畫，呈現聲音與造型的共振。',
    notes:
      '精準匹配 120 BPM 搖擺節奏齒輪嚙合連鎖動畫，將打擊樂點與金屬反光閃爍完美對齊。',
    caseStudy: [
      '跨界概念：將自身 Rap 與街舞的節拍拆解（Beat Subdivision）轉化為發條擒縱機構的運動曲線。',
      '材質表現：手繪非等向性金屬高光（Anisotropic Specular），讓黃銅號角在轉動時呈現賽璐珞動畫特有的條狀反光。',
      '動態綁定：利用 Blender Drivers 連動大小齒輪轉速比，並加入重拍時的微幅彈跳擠壓拉伸（Squash & Stretch）。'
    ]
  }
];

export const skillMetrics = [
  {
    id: 'texturing',
    label: '手繪與 PBR 貼圖 (Texturing)',
    shortLabel: '貼圖 Texturing',
    value: 96,
    color: '#68B984',
    barClass: 'bg-[#68B984]'
  },
  {
    id: 'sculpting',
    label: '高模雕刻 (Sculpting)',
    shortLabel: '雕刻 Sculpting',
    value: 95,
    color: '#F5C75B',
    barClass: 'bg-[#F5C75B]'
  },
  {
    id: 'topology',
    label: '拓撲佈線 (Topology)',
    shortLabel: '拓撲 Topology',
    value: 92,
    color: '#68abff',
    barClass: 'bg-[#68abff]'
  },
  {
    id: 'engine',
    label: '即時引擎整合 (Engine Integration)',
    shortLabel: '引擎 Engine',
    value: 90,
    color: '#F28C52',
    barClass: 'bg-[#F28C52]'
  },
  {
    id: 'rigging',
    label: '骨架綁定與動畫 (Rigging & Anim)',
    shortLabel: '動畫 Rig & Anim',
    value: 88,
    color: '#1e2b24',
    barClass: 'bg-primary-container'
  }
];

export const toolkitSatchel = [
  { name: 'Blender', dotClass: 'bg-[#F28C52]', level: '主力建模 / NPR 渲染' },
  { name: 'ZBrush', dotClass: 'bg-[#F5C75B]', level: '高模生物 / 細節雕刻' },
  { name: 'Substance Painter', dotClass: 'bg-[#68B984]', level: '手繪水彩與風格化 PBR' },
  { name: 'Photoshop', dotClass: 'bg-secondary', level: '筆刷貼圖繪製 / 概念設定' },
  { name: 'Premiere Pro', dotClass: 'bg-[#93000a]', level: '節拍剪輯 / 動態分鏡' },
  { name: 'Unity 3D', dotClass: 'bg-primary', level: 'URP Toon Shader / 互動整合' }
];

export const rhythmTalent = {
  title: '「節奏共鳴 (Rhythm & Flow)」',
  subtitle: '唱、跳、Rap 跨界賦能 3D 動態美學',
  description:
    '音樂節拍的切分音 (Syncopation) 與身體律動，深層反哺著 3D 動畫製作時的預備動作 (Anticipation)、緩入緩出 (Spacing) 與停頓留白 (Ma)。讓每一個轉角、每一幀揮擊都自帶旋律的重量與張力。',
  pillars: [
    {
      title: 'Animation Timing & Spacing',
      desc: '街舞律動感轉化為關鍵幀張力與物理重量感'
    },
    {
      title: 'Beat-Synced Storyboarding',
      desc: 'Rap 韻腳與節拍精準對應運鏡切角與剪輯節奏'
    },
    {
      title: 'Expressive Character Acting',
      desc: '舞台表演經驗賦予 3D 角色鮮活的肢體語言與靈魂'
    }
  ]
};

export const careerStages = [
  {
    id: 'stage-01',
    badge: 'CURRENT // STAGE 01',
    badgeClass: 'bg-[#68B984]/20 text-primary',
    nodeColor: 'bg-[#F5C75B]',
    timeLabel: '22 歲・當下',
    title: '起點與深耕：風格化 3D 專精',
    description:
      '打磨個人風格化 3D 角色與場景資產管線，精熟 NPR 卡通著色渲染與即時引擎展示。以扎實的多邊形素質與水彩質感建立獨特視覺語彙。'
  },
  {
    id: 'stage-02',
    badge: 'SHORT-TERM // STAGE 02',
    badgeClass: 'bg-[#E8F1F5] text-secondary',
    nodeColor: 'bg-[#F28C52]',
    timeLabel: '1 ~ 3 年目標',
    title: '商業實戰與跨界整合',
    description:
      '投身具鮮明美學的原創遊戲或動畫工作室，擔任 3D 美術設計師 / 角色與場景建模師。深度融入動態節奏感，主導關鍵角色動作表演與沉浸式場景。'
  },
  {
    id: 'stage-03',
    badge: 'LONG-TERM // STAGE 03',
    badgeClass: 'bg-tertiary-fixed text-tertiary',
    nodeColor: 'bg-[#68abff]',
    timeLabel: '願景航道',
    title: '全方位視覺敘事者 (Art Director)',
    description:
      '晉身 3D 視覺指導與跨領域藝術總監。開創融合空間光影、節奏聲響與敘事溫度的原創 IP，帶領觀眾穿梭於現實與手繪幻想的交界。'
  }
];

export const collaborationTypes = [
  '全職工作機會 / 職涯邀約',
  '3D 角色 / 場景委託專案',
  '音樂節奏與動態跨界表演合作',
  '學術與技術靈感交流'
];
