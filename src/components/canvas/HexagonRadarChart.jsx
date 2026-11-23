import React from 'react';

/**
 * 3D Skill Radar Chart (PRD3 Module 3.2)
 * Visualizes the 5 core 3D creator metrics in a Ghibli-styled polygon radar chart
 */
export default function HexagonRadarChart({ metrics }) {
  const size = 240;
  const center = size / 2;
  const radius = 82;
  const levels = [0.25, 0.5, 0.75, 1];

  const getPoint = (index, total, scale = 1) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const x = center + Math.cos(angle) * radius * scale;
    const y = center + Math.sin(angle) * radius * scale;
    return { x, y };
  };

  const total = metrics.length;
  const dataPolygon = metrics
    .map((m, idx) => {
      const pt = getPoint(idx, total, m.value / 100);
      return `${pt.x},${pt.y}`;
    })
    .join(' ');

  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-low ink-border-heavy">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      >
        {/* Concentric Web Levels */}
        {levels.map((lvl) => {
          const pts = metrics
            .map((_, idx) => {
              const p = getPoint(idx, total, lvl);
              return `${p.x},${p.y}`;
            })
            .join(' ');
          return (
            <polygon
              key={lvl}
              points={pts}
              fill="none"
              stroke="#1E2B24"
              strokeOpacity="0.2"
              strokeWidth="1"
              strokeDasharray={lvl < 1 ? '3 3' : 'none'}
            />
          );
        })}

        {/* Axis Spokes */}
        {metrics.map((m, idx) => {
          const end = getPoint(idx, total, 1);
          return (
            <line
              key={m.id}
              x1={center}
              y1={center}
              x2={end.x}
              y2={end.y}
              stroke="#1E2B24"
              strokeOpacity="0.25"
              strokeWidth="1"
            />
          );
        })}

        {/* Data Polygon Fill */}
        <polygon
          points={dataPolygon}
          fill="rgba(104, 185, 132, 0.38)"
          stroke="#1E2B24"
          strokeWidth="2"
        />

        {/* Vertex Nodes & Labels */}
        {metrics.map((m, idx) => {
          const pt = getPoint(idx, total, m.value / 100);
          const labelPt = getPoint(idx, total, 1.24);
          return (
            <g key={m.id}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r="4.5"
                fill={m.color}
                stroke="#1E2B24"
                strokeWidth="1.5"
              />
              <text
                x={labelPt.x}
                y={labelPt.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[10px] font-bold fill-current text-primary"
              >
                {m.shortLabel} ({m.value}%)
              </text>
            </g>
          );
        })}
      </svg>
      <span className="text-label-sm font-label-sm text-on-surface-variant mt-1">
        // 五維度創作者能力雷達圖 (3D Creator Polygon Radar)
      </span>
    </div>
  );
}
