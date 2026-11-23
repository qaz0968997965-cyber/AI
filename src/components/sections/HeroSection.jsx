import React, { Suspense } from 'react';
import { creatorProfile } from '../../data/portfolioData';
import CanvasLoader from '../layout/CanvasLoader';
import FloatingIslandScene from '../canvas/FloatingIslandScene';

export default function HeroSection({ isTwilight }) {
  return (
    <section className="relative pt-2" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:items-center">
        {/* Left / Top UI Column */}
        <div className="lg:col-span-5 flex flex-col space-y-3">
          {/* Status Badge with Green Leaf Breathing Indicator */}
          <div className="inline-flex items-center self-start space-x-1.5 px-3 py-1 rounded-full bg-surface-container-high ink-border-heavy text-label-sm font-label-sm text-primary shadow-[1px_1px_0px_0px_rgba(30,43,36,0.5)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#68B984] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#68B984]" />
            </span>
            <span className="tracking-wide">{creatorProfile.status}</span>
          </div>

          {/* Creator Nameplate */}
          <h1 className="text-display-mobile lg:text-display font-display-mobile text-primary tracking-tight font-bold">
            {creatorProfile.name}
            <span className="block text-headline-sm font-headline-sm text-on-surface-variant font-medium mt-0.5 tracking-normal">
              {creatorProfile.enName}
            </span>
          </h1>

          {/* Core Tag Capsule */}
          <div className="inline-block self-start bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-lg ink-border-heavy cel-shadow-sm text-label-md font-label-md font-bold">
            {creatorProfile.roleTag}
          </div>

          {/* Bio Pitch Snippet (visible on desktop left column, and below canvas on mobile) */}
          <p className="hidden lg:block text-body-md font-body-md text-on-surface-variant leading-relaxed pt-1">
            {creatorProfile.bioPitch}
          </p>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex flex-col sm:flex-row gap-3 pt-2">
            <a
              className="flex items-center justify-center space-x-2 bg-primary text-on-primary font-label-lg text-label-lg px-5 py-3 rounded-xl ink-border-heavy cel-shadow cel-btn-active transition-all hover:-translate-y-0.5"
              href="#featured-works"
            >
              <span
                className="material-symbols-outlined text-lg"
                data-icon="meeting_room"
              >
                meeting_room
              </span>
              <span>推開工作室大門 (瀏覽作品)</span>
            </a>
            <a
              className="flex items-center justify-center space-x-2 bg-surface-container text-primary font-label-lg text-label-lg px-5 py-3 rounded-xl ink-border-heavy cel-shadow-sm cel-btn-active transition-all hover:-translate-y-0.5"
              href="#about"
            >
              <span
                className="material-symbols-outlined text-lg"
                data-icon="explore"
              >
                explore
              </span>
              <span>查看冒險履歷</span>
            </a>
          </div>
        </div>

        {/* Right / Center Interactive 3D Canvas Diorama */}
        <div className="lg:col-span-7">
          <Suspense fallback={<CanvasLoader />}>
            <FloatingIslandScene isTwilight={isTwilight} />
          </Suspense>
        </div>
      </div>

      {/* Mobile Bio Pitch Snippet & Action Buttons (Exact Stitch Order) */}
      <div className="lg:hidden space-y-3">
        <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed px-1">
          {creatorProfile.bioPitch}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-space-sm">
          <a
            className="flex items-center justify-center space-x-2 bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3.5 rounded-xl ink-border-heavy cel-shadow cel-btn-active transition-all"
            href="#featured-works"
          >
            <span
              className="material-symbols-outlined text-lg"
              data-icon="meeting_room"
            >
              meeting_room
            </span>
            <span>推開工作室大門 (瀏覽作品)</span>
          </a>
          <a
            className="flex items-center justify-center space-x-2 bg-surface-container text-primary font-label-lg text-label-lg px-6 py-3.5 rounded-xl ink-border-heavy cel-shadow-sm cel-btn-active transition-all"
            href="#about"
          >
            <span
              className="material-symbols-outlined text-lg"
              data-icon="explore"
            >
              explore
            </span>
            <span>查看冒險履歷</span>
          </a>
        </div>
      </div>
    </section>
  );
}
