import React from 'react';
import { creatorProfile } from '../../data/portfolioData';

export default function Footer() {
  return (
    <footer className="w-full py-space-lg px-gutter-mobile flex flex-col items-center text-center space-y-space-sm pb-28 mt-space-xl border-t border-dashed border-primary/30 bg-surface-container">
      <div className="flex items-center space-x-2">
        <span
          className="material-symbols-outlined text-primary text-headline-sm"
          data-icon="flight"
        >
          flight
        </span>
        <span className="text-headline-sm font-headline-sm text-primary font-bold">
          {creatorProfile.studioTitle}
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-body-sm font-body-sm">
        <a
          className="text-on-surface-variant hover:text-tertiary transition-colors"
          href={`tel:${creatorProfile.contact.phone}`}
        >
          Hotline: {creatorProfile.contact.phone}
        </a>
        <span className="text-primary/30">•</span>
        <a
          className="text-on-surface-variant hover:text-tertiary transition-colors"
          href={`mailto:${creatorProfile.contact.email}`}
        >
          Email: {creatorProfile.contact.email}
        </a>
        <span className="text-primary/30">•</span>
        <a
          className="text-on-surface-variant hover:text-tertiary transition-colors"
          href="#contact"
        >
          Air Post Desk
        </a>
      </div>
      <p className="text-body-sm font-body-sm text-on-surface-variant">
        © 2026 鍾沛良 Chung Pei-Liang. Crafted with React &amp; Three.js (Cel &amp; Paper).
      </p>
      {/* Back to Top Glider */}
      <a
        className="inline-flex items-center space-x-1 text-label-sm font-label-sm text-secondary font-bold hover:underline mt-2 px-3 py-1 rounded-full bg-surface-container-lowest ink-border-heavy cel-shadow-sm cel-btn-active"
        href="#hero"
      >
        <span className="material-symbols-outlined text-sm" data-icon="north">
          north
        </span>
        <span>搭乘風之翼回到頂部 (乘風滑翔)</span>
      </a>
    </footer>
  );
}
