import React, { useState } from 'react';
import {
  creatorProfile,
  skillMetrics,
  toolkitSatchel,
  rhythmTalent
} from '../../data/portfolioData';
import HexagonRadarChart from '../canvas/HexagonRadarChart';

export default function AboutSkillsSection() {
  const [isAvatarFlipped, setIsAvatarFlipped] = useState(false);
  const [showRadar, setShowRadar] = useState(true);
  const [bpmActive, setBpmActive] = useState(false);

  return (
    <section className="space-y-space-md" id="about">
      {/* Section Header */}
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <span
            className="material-symbols-outlined text-[#F28C52] text-headline-sm"
            data-icon="draw"
          >
            draw
          </span>
          <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-primary font-bold">
            冒險手帳與創作者面板
          </h2>
        </div>
        <p className="text-body-sm font-body-sm text-on-surface-variant">
          Creator Stats, Dimensional Radar &amp; Rhythm Flow
        </p>
      </div>

      {/* Warm Parchment Letter & Interactive Flip Avatar Card */}
      <div className="bg-surface-container-lowest rounded-2xl ink-border-heavy cel-shadow-lg p-space-md space-y-space-md relative overflow-hidden">
        {/* Header with Interactive Flip Avatar */}
        <div className="flex items-center space-x-4">
          <div
            className="perspective-1000 w-24 h-24 shrink-0 cursor-pointer select-none"
            onClick={() => setIsAvatarFlipped((prev) => !prev)}
            title="點擊切換 2D手繪肖像 / 3D Q版公仔"
          >
            <div
              id="avatarCardInner"
              className={`relative w-full h-full transform-style-3d transition-transform duration-500 rounded-xl ink-border-heavy cel-shadow-sm ${
                isAvatarFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front: 2D Ghibli Watercolor Portrait */}
              <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-[#FBF8F1]">
                <img
                  className="w-full h-full object-cover"
                  src={creatorProfile.avatars.twoD.src}
                  alt={creatorProfile.avatars.twoD.alt}
                />
                <span className="absolute bottom-1 right-1 bg-surface-container-lowest/90 px-1 py-0.2 rounded text-[9px] font-bold ink-border-heavy text-primary">
                  {creatorProfile.avatars.twoD.label}
                </span>
              </div>

              {/* Back: 3D Stylized Chibi Figure */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-primary-container">
                <img
                  className="w-full h-full object-cover"
                  src={creatorProfile.avatars.threeD.src}
                  alt={creatorProfile.avatars.threeD.alt}
                />
                <span className="absolute bottom-1 right-1 bg-surface-container-lowest/90 px-1 py-0.2 rounded text-[9px] font-bold ink-border-heavy text-primary">
                  {creatorProfile.avatars.threeD.label}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <h3 className="text-headline-sm font-headline-sm text-primary font-bold">
                {creatorProfile.name}
              </h3>
              <span className="text-label-sm font-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-bold ink-border-heavy">
                {creatorProfile.level}
              </span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant font-medium">
              {creatorProfile.enRole}
            </p>
            <button
              type="button"
              onClick={() => setIsAvatarFlipped((prev) => !prev)}
              className="text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1 hover:underline"
            >
              <span className="material-symbols-outlined text-xs" data-icon="sync">
                sync
              </span>
              <span>
                點擊頭像翻轉 2D/3D 形態（目前：
                {isAvatarFlipped ? '3D Q版公仔' : '2D 吉卜力手繪'}）
              </span>
            </button>
          </div>
        </div>

        {/* Handcrafted Letter Text */}
        <div className="p-3.5 bg-surface-container-low rounded-xl ink-border-heavy border-dashed text-body-sm font-body-sm text-on-surface-variant leading-relaxed space-y-2">
          {creatorProfile.letterParagraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* 3D Skill Metrics (Proficiency Bars + Hexagon Radar Chart) */}
        <div className="space-y-3 pt-1">
          <div className="flex items-center justify-between">
            <h4 className="text-label-lg font-label-lg text-primary font-bold flex items-center space-x-1.5">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="tune"
              >
                tune
              </span>
              <span>核心素質能力 (3D Skill Metrics)</span>
            </h4>
            <button
              type="button"
              onClick={() => setShowRadar((prev) => !prev)}
              className="px-2.5 py-1 rounded-lg bg-surface-container-high text-primary text-label-sm font-label-sm font-bold ink-border-heavy cel-shadow-sm cel-btn-active flex items-center space-x-1"
            >
              <span className="material-symbols-outlined text-xs">
                radar
              </span>
              <span>{showRadar ? '隱藏雷達圖' : '顯示雷達圖'}</span>
            </button>
          </div>

          <div
            className={`grid grid-cols-1 ${
              showRadar ? 'lg:grid-cols-12 gap-4 items-center' : ''
            }`}
          >
            {/* Stitch Proficiency Bars */}
            <div className={`${showRadar ? 'lg:col-span-7' : ''} space-y-2.5`}>
              {skillMetrics.map((metric) => (
                <div key={metric.id}>
                  <div className="flex justify-between text-label-sm font-label-sm font-bold text-primary mb-1">
                    <span>{metric.label}</span>
                    <span>{metric.value}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-surface-container-high ink-border-heavy overflow-hidden p-0.5">
                    <div
                      className={`h-full ${metric.barClass} rounded-full transition-all duration-1000`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* PRD3 3.3.2 Radar Chart */}
            {showRadar && (
              <div className="lg:col-span-5">
                <HexagonRadarChart metrics={skillMetrics} />
              </div>
            )}
          </div>
        </div>

        {/* Toolkit Satchel (Software Icons / Tags) */}
        <div className="pt-2">
          <span className="text-label-sm font-label-sm text-on-surface-variant font-bold block mb-2">
            常備冒險裝備箱 (Toolkit Satchel)
          </span>
          <div className="flex flex-wrap gap-2">
            {toolkitSatchel.map((tool) => (
              <span
                key={tool.name}
                title={tool.level}
                className="px-3 py-1 rounded-lg bg-surface-container-high text-primary font-label-md font-label-md ink-border-heavy cel-shadow-sm flex items-center space-x-1.5"
              >
                <span className={`w-2 h-2 rounded-full ${tool.dotClass}`} />
                <span>{tool.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Special Talent Feature Card: 節奏共鳴 (Rhythm & Flow) */}
        <div className="mt-4 p-space-md rounded-xl bg-gradient-to-br from-tertiary-fixed/40 to-surface-container-low ink-border-heavy cel-shadow space-y-3 border-l-4 border-l-[#F28C52]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span
                className={`material-symbols-outlined text-[#F28C52] text-xl ${
                  bpmActive ? 'animate-bounce' : ''
                }`}
                data-icon="graphic_eq"
              >
                graphic_eq
              </span>
              <h4 className="text-headline-sm font-headline-sm text-primary font-bold">
                {rhythmTalent.title}
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setBpmActive((prev) => !prev)}
              className="px-2.5 py-1 rounded-full bg-surface-container-lowest text-primary text-label-sm font-label-sm font-bold ink-border-heavy cel-shadow-sm cel-btn-active flex items-center space-x-1"
            >
              <span className="material-symbols-outlined text-xs">
                {bpmActive ? 'pause' : 'equalizer'}
              </span>
              <span>{bpmActive ? '120 BPM 律動中' : '預覽節拍律動'}</span>
            </button>
          </div>

          <p className="text-label-md font-label-md text-tertiary font-bold">
            {rhythmTalent.subtitle}
          </p>
          <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
            {rhythmTalent.description}
          </p>

          {/* Three Cross-Disciplinary Pillars from PRD3 3.3.3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
            {rhythmTalent.pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`p-2.5 rounded-lg bg-surface-container-lowest/90 ink-border-heavy transition-transform ${
                  bpmActive && i % 2 === 0 ? '-translate-y-0.5' : ''
                }`}
              >
                <span className="text-label-sm font-label-sm font-bold text-primary block">
                  {pillar.title}
                </span>
                <span className="text-[12px] text-on-surface-variant leading-snug block mt-0.5">
                  {pillar.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
