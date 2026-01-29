import React from "react";

const ExperienceSection = () => {
  return (
    <div className="h-screen w-full grid md:grid-cols-5 grid-cols-1 gap-7 py-6">
      <div className="outline-1 outline-gruv-highlight-green/40 bg-gruv-bg-tinted row-span-2 col-span-3 rounded-xl p-8 hover:pl-10 transition-all duration-200">
        <div className="flex flex-col gap-2 h-full justify-end">
          <h1 className="text-3xl font-bold">
            <span className="text-gruv-highlight-green">Software Engineer</span>{" "}
            at Sageware Solutions
          </h1>
          <h2 className="text-2xl">
            Bridging yesterday's limitations with tomorrow's possibilities
          </h2>
        </div>
      </div>
      <div className="outline-1 outline-gruv-highlight-green/40 bg-gruv-bg-tinted row-span-1 col-span-2 rounded-xl p-8 hover:pl-10 transition-all duration-200">
        <div className="flex flex-col gap-2 h-full justify-start">
          <h1 className="text-2xl font-bold text-gruv-highlight-green">
            Busolv AI Calorie Counter
          </h1>

          <h2 className="text-xl">AI Engineer</h2>
        </div>
      </div>
      <div className="outline-1 outline-gruv-highlight-green/40 bg-gruv-bg-tinted row-span-1 col-span-2 rounded-xl p-8 hover:pl-10 transition-all duration-200">
        <div className="flex flex-col gap-1 h-full justify-center">
          <h1 className="text-lg font-medium">My Expertise</h1>

          <h2 className="text-2xl font-bold text-gruv-highlight-green font-stretch-extra-condensed">
            Laravel, Filament, Fast API, Pydantic, Next JS
          </h2>
        </div>
      </div>
      <div className="outline-1 outline-gruv-highlight-green/40 bg-gruv-bg-tinted row-span-1 col-span-2 rounded-xl p-8 hover:pl-10 transition-all duration-200">
        <div className="flex flex-col gap-1 h-full justify-start">
          <h1 className="text-lg font-medium">I specialize in</h1>

          <h2 className="text-2xl font-bold text-gruv-highlight-green font-stretch-extra-condensed">
            Backend & AI Engineering
          </h2>
        </div>
      </div>
      <div className="outline-1 outline-gruv-highlight-green/40 bg-gruv-bg-tinted row-span-2 col-span-3 rounded-xl p-8 hover:pl-10 transition-all duration-200">
        <div className="flex flex-col gap-1 h-full justify-start">
          <h1 className="text-lg font-medium">My Previous Experience</h1>

          <h2 className="text-2xl font-bold  font-stretch-extra-condensed">
            Web Developer Intern at{" "}
            <span className="text-gruv-highlight-green">Syntactics Inc.</span>
          </h2>
        </div>
      </div>
      <div className="outline-1 outline-gruv-highlight-green/40 bg-gruv-bg-tinted row-span-1 col-span-2 rounded-xl p-8 hover:pl-10 transition-all duration-200">
        <div className="flex flex-col gap-1 h-full justify-start">
          <h1 className="text-2xl font-bold  font-stretch-extra-condensed">
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
