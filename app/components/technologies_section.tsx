import React from "react";

const TechnologySection = () => {
  const technologies: string[] = [
    "Laravel",
    "Filament",
    "Tailwind",
    "Fast API",
    "Pydantic AI",
    "Swift UI",
    "Next JS",
    "Vue JS",
    "Docker",
    "Git",
    "GitHub",
    "Dokku",
    "PostgreSQL",
  ];
  const duplicatedTechnologies = [...technologies, ...technologies];
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Technologies and Tools I Use
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-gruv-bg to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-gruv-bg to-transparent"></div>

        <div className="border-y border-white/10 py-4 mask-[linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat]">
          <div
            className="tech-marquee flex min-w-[200%] items-center gap-3 pr-4"
            style={{ animation: "tech-marquee-scroll 40s linear infinite" }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="whitespace-nowrap rounded-full border border-white/10 bg-gruv-bg-tinted px-5 py-2 text-sm font-medium tracking-tight text-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
