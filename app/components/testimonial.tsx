import React from "react";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col gap-4 py-14 w-screen">
      <div className="text-bold text-center text-4xl font-bold text-gruv-highlight-green">
        <h1>You're not the first!</h1>
      </div>

      <div className="items-start flex gap-4 w-full overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 animated-scroll">
        <div className="flex-none w-96 md:w-96 snap-start flex flex-col p-6 min-h-40 justify-between gap-12 bg-gruv-bg-tinted rounded-xl">
          <p className="text-lg font-stretch-extra-condensed">
            Hardworking, You'll be sure to get quality outputs from him.
          </p>

          <h3 className="text-2xl font-bold text-gruv-highlight-yellow text-right">
            John Doe
          </h3>
        </div>

        <div className="flex-none w-96 md:w-96 snap-start flex flex-col p-6 min-h-40 justify-between gap-12 bg-gruv-bg-tinted rounded-xl">
          <p className="text-lg font-stretch-extra-condensed">
            Mark Christopher demonstrates a well-rounded level of professional
            excellence through strong technical proficiency and adaptability. He
            consistently delivers high-quality results, even in challenging or
            high-pressure environments. Easy to work with and collaborative in
            approach, he brings a steady and dependable presence to team
            settings. He has proven experience working across diverse
            environments as a Full Stack Developer, with hands-on expertise in
            Laravel, Filament, FastAPI, and Pydantic AI.
          </p>

          <h3 className="text-2xl font-bold text-gruv-highlight-yellow text-right">
            John Doe
          </h3>
        </div>

        <div className="flex-none w-96 md:w-96 snap-start flex flex-col p-6 min-h-40 justify-between gap-12 bg-gruv-bg-tinted rounded-xl">
          <p className="text-lg font-stretch-extra-condensed">
            Great team member and can effectively communicate and get along with
            other members to make sure goals are met.
          </p>

          <h3 className="text-2xl font-bold text-gruv-highlight-yellow text-right">
            John Doe
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
