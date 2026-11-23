import React from 'react';
import { creatorProfile } from '../../data/portfolioData';

export default function TopAppBar({ isTwilight, onToggleTwilight, activeSection }) {
  const navItems = [
    { id: 'hero', label: '首頁', jp: '物語' },
    { id: 'featured-works', label: '3D 作品', jp: '作品集' },
    { id: 'about', label: '關於我', jp: '草図' },
    { id: 'career', label: '職涯旅程', jp: '地図' },
    { id: 'contact', label: '聯絡信箱', jp: '通信' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-low/95 backdrop-blur-md px-gutter-mobile md:px-gutter py-space-xs max-w-screen-xl mx-auto shadow-[0_2px_0_0_rgba(30,43,36,0.12)] ink-border-heavy border-t-0 border-x-0 transition-colors">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        {/* Brand Title */}
        <a href="#hero" className="flex items-center space-x-2 group">
          <span
            className="material-symbols-outlined text-primary text-headline-sm group-hover:rotate-12 transition-transform"
            data-icon="palette"
          >
            palette
          </span>
          <div className="flex flex-col">
            <span className="text-headline-sm font-headline-sm text-primary tracking-wide leading-tight font-bold">
              {creatorProfile.studioTitle}
            </span>
            <span className="text-label-sm font-label-sm text-on-surface-variant font-medium">
              {creatorProfile.jpSubtitle}
            </span>
          </div>
        </a>

        {/* Desktop Storybook Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-surface-container-lowest/80 px-2 py-1 rounded-xl ink-border-heavy cel-shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1 rounded-lg text-label-md font-label-md transition-all flex items-center space-x-1 ${
                  isActive
                    ? 'bg-primary text-on-primary font-bold shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-primary'
                }`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Atmosphere Toggle & Notebook CTA */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={onToggleTwilight}
            title={isTwilight ? '切換至白晝暖陽模式' : '切換至暮光深林模式'}
            className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-surface-container-lowest text-primary text-label-sm font-label-sm ink-border-heavy cel-shadow-sm cel-btn-active transition-all"
          >
            <span className="material-symbols-outlined text-sm">
              {isTwilight ? 'light_mode' : 'forest'}
            </span>
            <span className="hidden sm:inline">
              {isTwilight ? '白晝暖陽' : '暮光深林'}
            </span>
          </button>

          <a
            className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-surface-container-lowest text-primary text-label-md font-label-md ink-border-heavy cel-shadow-sm active:translate-y-0.5 transition-transform"
            href="#contact"
          >
            <span className="material-symbols-outlined text-sm" data-icon="menu_book">
              menu_book
            </span>
            <span>手帳</span>
          </a>
        </div>
      </div>
    </header>
  );
}
