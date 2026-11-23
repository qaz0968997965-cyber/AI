import React from 'react';
import { careerStages } from '../../data/portfolioData';

export default function CareerMapSection() {
  return (
    <section className="space-y-space-md" id="career">
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <span
            className="material-symbols-outlined text-secondary text-headline-sm"
            data-icon="explore"
          >
            explore
          </span>
          <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-primary font-bold">
            冒險地圖與職涯願景
          </h2>
        </div>
        <p className="text-body-sm font-body-sm text-on-surface-variant">
          Hand-Drawn Expedition Roadmap &amp; Milestones
        </p>
      </div>

      {/* Hand-Inked Timeline Track */}
      <div className="relative pl-6 space-y-space-md before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/30 before:border-dashed before:border-l-[1.5px] before:border-primary">
        {careerStages.map((stage) => (
          <div
            key={stage.id}
            className="relative bg-surface-container-lowest rounded-2xl ink-border-heavy cel-shadow p-space-md space-y-2 transition-transform hover:-translate-y-0.5"
          >
            <div
              className={`absolute -left-[30px] top-4 w-5 h-5 rounded-full ${stage.nodeColor} ink-border-heavy shadow-[1px_1px_0px_0px_rgba(30,43,36,0.9)] flex items-center justify-center`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
            <div className="flex justify-between items-center">
              <span
                className={`px-2 py-0.5 rounded text-label-sm font-label-sm font-bold ${stage.badgeClass} ink-border-heavy`}
              >
                {stage.badge}
              </span>
              <span className="text-label-sm font-label-sm text-on-surface-variant font-bold">
                {stage.timeLabel}
              </span>
            </div>
            <h3 className="text-headline-sm font-headline-sm text-primary font-bold">
              {stage.title}
            </h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
