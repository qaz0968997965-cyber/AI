import React, { useEffect, useState } from 'react';
import TopAppBar from './components/layout/TopAppBar';
import BottomNavBar from './components/layout/BottomNavBar';
import Footer from './components/layout/Footer';
import SectionDivider from './components/layout/SectionDivider';
import HeroSection from './components/sections/HeroSection';
import FeaturedWorksSection from './components/sections/FeaturedWorksSection';
import AboutSkillsSection from './components/sections/AboutSkillsSection';
import CareerMapSection from './components/sections/CareerMapSection';
import ContactSection from './components/sections/ContactSection';
import ModelInspectorModal from './components/canvas/ModelInspectorModal';

export default function App() {
  const [isTwilight, setIsTwilight] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [inspectedProject, setInspectedProject] = useState(null);

  useEffect(() => {
    const sections = ['hero', 'featured-works', 'about', 'career', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isTwilight ? 'bg-[#1E2B24]/10' : ''
      }`}
    >
      {/* Top Navigation Bar */}
      <TopAppBar
        isTwilight={isTwilight}
        onToggleTwilight={() => setIsTwilight((prev) => !prev)}
        activeSection={activeSection}
      />

      {/* Main Storybook Scroll Container */}
      <main className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto px-margin-mobile md:px-gutter pt-20 space-y-space-xl">
        {/* MODULE 1: HERO SECTION (Unique Self-Introduction & 3D Atelier) */}
        <HeroSection isTwilight={isTwilight} />

        <SectionDivider icon="spa" />

        {/* MODULE 2: FEATURED WORKS & CASE STUDIES */}
        <FeaturedWorksSection
          onInspectProject={(project) => setInspectedProject(project)}
        />

        <SectionDivider icon="auto_stories" />

        {/* MODULE 3: ABOUT ME & SKILLS */}
        <AboutSkillsSection />

        <SectionDivider icon="map" />

        {/* MODULE 4: CAREER TRAJECTORY & VISION */}
        <CareerMapSection />

        <SectionDivider icon="local_post_office" />

        {/* MODULE 5: CONTACT & AIR POST */}
        <ContactSection />
      </main>

      {/* Interactive 3D Model Inspection Drawer / Modal */}
      <ModelInspectorModal
        project={inspectedProject}
        onClose={() => setInspectedProject(null)}
      />

      {/* Global Footer */}
      <Footer />

      {/* Bottom Navigation Bar */}
      <BottomNavBar
        activeSection={activeSection}
        onSelectSection={(id) => setActiveSection(id)}
      />
    </div>
  );
}
