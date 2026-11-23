import React from 'react';

export default function SectionDivider({ icon = 'spa' }) {
  return (
    <div className="flex items-center justify-center space-x-3 py-2 opacity-75">
      <span className="h-0.5 w-16 bg-primary/20 rounded-full" />
      <span
        className="material-symbols-outlined text-primary text-base"
        data-icon={icon}
      >
        {icon}
      </span>
      <span className="h-0.5 w-16 bg-primary/20 rounded-full" />
    </div>
  );
}
