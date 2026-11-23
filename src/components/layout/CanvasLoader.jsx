import React from 'react';

export default function CanvasLoader({ label = '水彩暈染與 3D 場景載入中...' }) {
  return (
    <div className="w-full h-80 rounded-2xl ink-border-heavy bg-gradient-to-b from-[#E8F1F5]/70 to-[#FBF8F1] flex flex-col items-center justify-center p-6 space-y-3 text-center">
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-surface-container-lowest ink-border-heavy cel-shadow-sm animate-bounce">
        <span className="material-symbols-outlined text-3xl text-[#4A90E2]">
          flight
        </span>
      </div>
      <p className="text-label-md font-label-md font-bold text-primary">
        {label}
      </p>
      <div className="w-48 h-2.5 rounded-full bg-surface-container-high ink-border-heavy overflow-hidden p-0.5">
        <div className="h-full w-2/3 bg-[#68B984] rounded-full animate-pulse" />
      </div>
      <span className="text-label-sm font-label-sm text-on-surface-variant">
        // アトリエ・鍾 WebGL Toon Shader
      </span>
    </div>
  );
}
