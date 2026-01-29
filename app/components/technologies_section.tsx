"use client";

import React, { useState } from "react";

interface Technology {
  name: string;
  icon: string;
  color: string;
}

const TechnologySection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const technologies: Technology[] = [
    { name: "Laravel", icon: "⚡", color: "#FF2D20" },
    { name: "Filament", icon: "◆", color: "#FDAE4B" },
    { name: "Fast API", icon: "⚡", color: "#009688" },
    { name: "Pydantic AI", icon: "🤖", color: "#E92063" },
    { name: "Next JS", icon: "▲", color: "#ffffff" },
    { name: "Vue JS", icon: "◇", color: "#42B883" },
    { name: "Swift UI", icon: "◈", color: "#F05138" },
    { name: "Tailwind", icon: "◎", color: "#38BDF8" },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
    { name: "Git", icon: "⎇", color: "#F05032" },
    { name: "GitHub", icon: "◉", color: "#ffffff" },
    { name: "Dokku", icon: "▣", color: "#6762A6" },
    { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
    { name: "TypeScript", icon: "◫", color: "#3178C6" },
  ];

  const duplicateArray = <T,>(arr: T[]) => [...arr, ...arr, ...arr];

  const TechPill = ({ tech }: { tech: Technology }) => (
    <div className="group relative flex items-center gap-3 whitespace-nowrap rounded-2xl border border-white/10 bg-gruv-bg-tinted/80 backdrop-blur-sm px-7 py-4 text-lg font-medium tracking-tight text-gray-200 transition-all duration-300 hover:border-gruv-highlight-green/50 hover:bg-gruv-bg-tinted hover:scale-105 hover:shadow-[0_0_24px_rgba(141,188,122,0.2)]">
      {/* Accent line on hover */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gruv-highlight-green rounded-full transition-all duration-300 group-hover:h-1/2" />

      {/* Icon with color */}
      <span
        className="text-2xl transition-transform duration-300 group-hover:scale-110"
        style={{ color: tech.color }}
      >
        {tech.icon}
      </span>

      {/* Name */}
      <span className="transition-colors duration-300 group-hover:text-white">
        {tech.name}
      </span>
    </div>
  );

  return (
    <div className="flex w-full flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-gruv-highlight-green animate-pulse" />
          <h2 className="text-3xl font-bold tracking-tight">
            Technologies & Tools
          </h2>
        </div>
      </div>

      {/* Marquee container */}
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-gruv-bg/50 border border-white/5 py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-gruv-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-gruv-bg to-transparent z-10" />

        {/* Single row marquee */}
        <div
          className="tech-marquee flex items-center gap-5"
          style={{
            animation: "tech-marquee-scroll 45s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {duplicateArray(technologies).map((tech, index) => (
            <TechPill key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-gruv-highlight-green/20 rounded-tl-sm" />
        <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-gruv-highlight-green/20 rounded-tr-sm" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-gruv-highlight-green/20 rounded-bl-sm" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-gruv-highlight-green/20 rounded-br-sm" />
      </div>
    </div>
  );
};

export default TechnologySection;
