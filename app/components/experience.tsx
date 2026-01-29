import React from "react";

// Decorative corner brackets (code-like aesthetic)
const CornerBrackets = ({ className = "" }: { className?: string }) => (
  <>
    <div
      className={`absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-gruv-highlight-green/20 rounded-tl-sm ${className}`}
    />
    <div
      className={`absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-gruv-highlight-green/20 rounded-tr-sm ${className}`}
    />
    <div
      className={`absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-gruv-highlight-green/20 rounded-bl-sm ${className}`}
    />
    <div
      className={`absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-gruv-highlight-green/20 rounded-br-sm ${className}`}
    />
  </>
);

// Floating geometric circles
const FloatingCircles = () => (
  <>
    <div className="absolute top-8 right-12 w-24 h-24 rounded-full border border-gruv-highlight-green/10" />
    <div className="absolute top-12 right-16 w-16 h-16 rounded-full border border-gruv-highlight-yellow/8" />
    <div className="absolute bottom-16 right-8 w-8 h-8 rounded-full bg-gruv-highlight-green/5" />
  </>
);

// Diagonal lines pattern
const DiagonalLines = () => (
  <div className="absolute inset-0 overflow-hidden rounded-xl opacity-[0.03]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          currentColor 10px,
          currentColor 11px
        )`,
      }}
    />
  </div>
);

// Dot grid pattern
const DotGrid = () => (
  <div
    className="absolute inset-0 opacity-[0.04] rounded-xl"
    style={{
      backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
      backgroundSize: "20px 20px",
    }}
  />
);

// Abstract corner shape
const CornerShape = ({
  position,
}: {
  position: "top-right" | "bottom-left";
}) => {
  const posClass =
    position === "top-right" ? "top-0 right-0" : "bottom-0 left-0";
  const rotateClass = position === "top-right" ? "" : "rotate-180";

  return (
    <div className={`absolute ${posClass} overflow-hidden rounded-xl`}>
      <div
        className={`w-32 h-32 ${rotateClass}`}
        style={{
          background: `linear-gradient(135deg, transparent 50%, rgba(141, 188, 122, 0.03) 50%)`,
        }}
      />
    </div>
  );
};

// Horizontal scan lines
const ScanLines = () => (
  <div className="absolute inset-0 overflow-hidden rounded-xl opacity-[0.02]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          currentColor 2px,
          currentColor 3px
        )`,
      }}
    />
  </div>
);

// Glowing orb accent
const GlowingOrb = ({
  position,
  color = "green",
}: {
  position: string;
  color?: "green" | "yellow";
}) => {
  const colorClass =
    color === "green"
      ? "bg-gruv-highlight-green/5"
      : "bg-gruv-highlight-yellow/5";
  return (
    <div
      className={`absolute ${position} w-32 h-32 ${colorClass} rounded-full blur-2xl`}
    />
  );
};

// Code bracket decoration
const CodeBracket = ({ side }: { side: "left" | "right" }) => {
  const bracket = side === "left" ? "{" : "}";
  const posClass = side === "left" ? "left-4 top-1/2" : "right-4 top-1/2";

  return (
    <div
      className={`absolute ${posClass} -translate-y-1/2 text-6xl font-light text-gruv-highlight-green/[0.07] select-none`}
    >
      {bracket}
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className="h-screen w-full grid md:grid-cols-5 grid-cols-1 gap-7 py-6">
      {/* Main featured card - Sageware */}
      <div className="relative outline-1 outline-gruv-highlight-green/40 bg-gruv-bg-tinted row-span-2 col-span-3 rounded-xl p-8 hover:pl-10 transition-all duration-200 overflow-hidden group">
        <DiagonalLines />
        <GlowingOrb position="bottom-0 right-0" />
        <FloatingCircles />
        <CornerBrackets className="group-hover:border-gruv-highlight-green/40 transition-colors duration-300" />
        <div className="relative z-10 flex flex-col gap-2 h-full justify-end">
          <h1 className="text-3xl font-bold">
            <span className="text-gruv-highlight-green">Software Engineer</span>{" "}
            at Sageware Solutions
          </h1>
          <h2 className="text-2xl">
            Bridging yesterday's limitations with tomorrow's possibilities
          </h2>
        </div>
      </div>

      {/* Busolv AI card */}
      <div className="relative outline-1 outline-gruv-highlight-green/40 bg-gruv-bg-tinted row-span-1 col-span-2 rounded-xl p-8 hover:pl-10 transition-all duration-200 overflow-hidden">
        <DotGrid />
        <CornerShape position="top-right" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border border-gruv-highlight-green/10 rounded-lg rotate-12" />
        <div className="relative z-10 flex flex-col gap-2 h-full justify-start">
          <h1 className="text-2xl font-bold text-gruv-highlight-green">
            Busolv AI Calorie Counter
          </h1>
          <h2 className="text-xl">AI Engineer</h2>
        </div>
      </div>

      {/* Expertise card */}
      <div className="relative outline-1 outline-gruv-highlight-green/40 bg-gruv-bg-tinted row-span-1 col-span-2 rounded-xl p-8 hover:pl-10 transition-all duration-200 overflow-hidden">
        <ScanLines />
        <CodeBracket side="right" />
        <div className="absolute top-4 left-4 w-3 h-3 bg-gruv-highlight-green/20 rounded-full" />
        <div className="absolute top-4 left-10 w-3 h-3 bg-gruv-highlight-yellow/20 rounded-full" />
        <div className="absolute top-4 left-16 w-3 h-3 bg-gruv-highlight-red-orange/20 rounded-full" />
        <div className="relative z-10 flex flex-col gap-1 h-full justify-center">
          <h1 className="text-lg font-medium">My Expertise</h1>
          <h2 className="text-2xl font-bold text-gruv-highlight-green font-stretch-extra-condensed">
            Laravel, Filament, Fast API, Pydantic, Next JS
          </h2>
        </div>
      </div>

      {/* Specialization card */}
      <div className="relative outline-1 outline-gruv-highlight-green/40 bg-gruv-bg-tinted row-span-1 col-span-2 rounded-xl p-8 hover:pl-10 transition-all duration-200 overflow-hidden">
        <GlowingOrb position="top-0 left-0" color="yellow" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-t border-l border-gruv-highlight-green/10 rounded-tl-3xl" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-t border-l border-gruv-highlight-yellow/10 rounded-tl-xl" />
        <div className="relative z-10 flex flex-col gap-1 h-full justify-start">
          <h1 className="text-lg font-medium">I specialize in</h1>
          <h2 className="text-2xl font-bold text-gruv-highlight-green font-stretch-extra-condensed">
            Backend & AI Engineering
          </h2>
        </div>
      </div>

      {/* Previous experience card - Syntactics */}
      <div className="relative outline-1 outline-gruv-highlight-green/40 bg-gruv-bg-tinted row-span-2 col-span-3 rounded-xl p-8 hover:pl-10 transition-all duration-200 overflow-hidden group">
        <DotGrid />
        <CornerShape position="bottom-left" />
        <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col gap-2 opacity-[0.06]">
          <div className="w-16 h-1 bg-current rounded" />
          <div className="w-12 h-1 bg-current rounded" />
          <div className="w-20 h-1 bg-current rounded" />
          <div className="w-8 h-1 bg-current rounded" />
          <div className="w-14 h-1 bg-current rounded" />
        </div>
        <CornerBrackets className="group-hover:border-gruv-highlight-green/40 transition-colors duration-300" />
        <div className="relative z-10 flex flex-col gap-1 h-full justify-start">
          <h1 className="text-lg font-medium">My Previous Experience</h1>
          <h2 className="text-2xl font-bold font-stretch-extra-condensed">
            Web Developer Intern at{" "}
            <span className="text-gruv-highlight-green">Syntactics Inc.</span>
          </h2>
        </div>
      </div>

      {/* Public Speaker card */}
      <div className="relative outline-1 outline-gruv-highlight-green/40 bg-gruv-bg-tinted row-span-1 col-span-2 rounded-xl p-8 hover:pl-10 transition-all duration-200 overflow-hidden">
        <DiagonalLines />
        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-2 border-gruv-highlight-green/10" />
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border border-gruv-highlight-green/5" />
        <CodeBracket side="left" />
        <div className="relative z-10 flex flex-col gap-1 h-full justify-start">
          <h1 className="text-2xl font-bold font-stretch-extra-condensed">
            Public Speaker
          </h1>
          <h2 className="text-lg font-medium">
            I like to <span className="text-gruv-highlight-green">yap</span>.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
