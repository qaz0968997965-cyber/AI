import React from 'react';

const TABS = [
  { id: 'hero', label: '物語', icon: 'auto_stories' },
  { id: 'featured-works', label: '作品集', icon: 'brush' },
  { id: 'about', label: '草図', icon: 'draw' },
  { id: 'contact', label: '通信', icon: 'mail' }
];

export default function BottomNavBar({ activeSection, onSelectSection }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-40 flex justify-around items-center px-space-xs py-space-xs pb-safe bg-surface-container-lowest/95 backdrop-blur-md border-t border-primary/20 shadow-[0_-3px_0_0_rgba(30,43,36,0.15)] max-w-screen-md mx-auto">
      {TABS.map((tab) => {
        const isActive =
          activeSection === tab.id ||
          (tab.id === 'about' && activeSection === 'career');
        return (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            onClick={() => onSelectSection?.(tab.id)}
            data-tab={tab.id}
            className={`flex flex-col items-center justify-center px-3 py-1 rounded-lg transition-all nav-tab ${
              isActive
                ? 'bg-tertiary-fixed text-tertiary shadow-[2px_2px_0_0_rgba(30,43,36,0.2)] font-bold'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span
              className="material-symbols-outlined text-headline-sm"
              data-icon={tab.icon}
            >
              {tab.icon}
            </span>
            <span className="text-label-sm font-label-sm mt-0.5 font-bold">
              {tab.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
