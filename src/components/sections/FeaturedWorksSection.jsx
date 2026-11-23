import React, { useState } from 'react';
import { featuredProjects, projectCategories } from '../../data/portfolioData';

export default function FeaturedWorksSection({ onInspectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === selectedCategory);

  return (
    <section className="space-y-space-md" id="featured-works">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span
              className="material-symbols-outlined text-secondary text-headline-sm"
              data-icon="brush"
            >
              brush
            </span>
            <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-primary font-bold">
              精選作品研究
            </h2>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant">
            Handcrafted Cel-Shaded Models &amp; Storyboard Dioramas
          </p>
        </div>
        <span className="text-label-sm font-label-sm text-on-surface-variant font-bold">
          // 點擊卡片或 AR 圖示開啟 360° 3D 檢視器與草圖對比
        </span>
      </div>

      {/* Category Filter Pills */}
      <div
        className="flex items-center space-x-2 overflow-x-auto pb-2 -mx-margin-mobile px-margin-mobile sm:mx-0 sm:px-0 no-scrollbar"
        id="categoryFilter"
      >
        {projectCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              data-category={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`filter-btn shrink-0 px-3.5 py-1.5 rounded-full text-label-sm font-label-sm ink-border-heavy cel-shadow-sm transition-all ${
                isActive
                  ? 'active font-bold bg-primary text-on-primary'
                  : 'font-semibold bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Storybook Work Cards Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-space-md"
        id="projectsContainer"
      >
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            data-cat={project.category}
            onClick={() => onInspectProject(project)}
            className="project-card breeze-card cursor-pointer bg-surface-container-lowest rounded-2xl ink-border-heavy cel-shadow-md overflow-hidden transition-all hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {/* Artwork Preview Frame */}
              <div className="relative h-52 w-full border-b-[1.5px] border-primary overflow-hidden bg-[#E8F1F5]/40">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={project.image}
                  alt={project.imageAlt}
                />
                <div
                  className={`absolute top-3 left-3 ${project.badgeColor} px-2.5 py-0.5 rounded ink-border-heavy text-label-sm font-label-sm font-bold shadow-[2px_2px_0px_0px_rgba(30,43,36,0.8)]`}
                >
                  {project.polycountBadge}
                </div>
                <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur text-primary px-2.5 py-0.5 rounded ink-border-heavy text-label-sm font-label-sm font-bold">
                  {project.techBadge}
                </div>
                <div className="absolute bottom-2 right-2 bg-primary/85 text-on-primary px-2 py-0.5 rounded text-[10px] font-bold">
                  {project.jpTag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-space-md space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="text-label-sm font-label-sm text-secondary font-bold tracking-wider">
                      {project.code}
                    </span>
                    <h3 className="text-headline-sm font-headline-sm text-primary font-bold">
                      {project.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    title="開啟即時 3D 檢視器與案例分析"
                    onClick={(e) => {
                      e.stopPropagation();
                      onInspectProject(project);
                    }}
                    className="p-2 rounded-lg bg-surface-container text-primary ink-border-heavy cel-shadow-sm cel-btn-active shrink-0 hover:bg-[#F5C75B] transition-colors"
                  >
                    <span
                      className="material-symbols-outlined text-lg"
                      data-icon="view_in_ar"
                    >
                      view_in_ar
                    </span>
                  </button>
                </div>

                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-surface-container-high ink-border-heavy text-label-sm font-label-sm text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
