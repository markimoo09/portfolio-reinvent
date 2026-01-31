"use client";

import React from "react";

type Testimonial = {
  testimony: string;
  author: string;
  position: string;
  key: string;
};

const testimonials: Testimonial[] = [
  {
    testimony: "Hardworking, You'll be sure to get quality outputs from him.",
    author: "John Doe",
    position: "Software Engineer",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Mark Christopher demonstrates a well-rounded level of professional excellence through strong technical proficiency and adaptability. He consistently delivers high-quality results, even in challenging or high-pressure environments.",
    author: "John Doe",
    position: "Software Engineer",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Great team member and can effectively communicate and get along with other members to make sure goals are met.",
    author: "John Doe",
    position: "Software Engineer",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Great team member and can effectively communicate and get along with other members to make sure goals are met.",
    author: "John Doe",
    position: "Software Engineer",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Great team member and can effectively communicate and get along with other members to make sure goals are met.",
    author: "John Doe",
    position: "Software Engineer",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Great team member and can effectively communicate and get along with other members to make sure goals are met.",
    author: "John Doe",
    position: "Software Engineer",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Great team member and can effectively communicate and get along with other members to make sure goals are met.",
    author: "John Doe",
    position: "Software Engineer",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Great team member and can effectively communicate and get along with other members to make sure goals are met.",
    author: "John Doe",
    position: "Software Engineer",
    key: crypto.randomUUID(),
  },
];

const TestimonialSection = () => {
  const looped = [...testimonials, ...testimonials];
  return (
    <div className="flex flex-col gap-4 py-14">
      <div className="text-bold text-center text-4xl font-bold text-gruv-highlight-green">
        <h1>You're not the first!</h1>
      </div>

      <div className="w-full overflow-hidden px-4">
        <div
          className="animate-testimonial-marquee flex w-max gap-4 items-start"
          onMouseEnter={(e) =>
            e.currentTarget.classList.add("animate-testimonial-marquee-paused")
          }
          onMouseLeave={(e) =>
            e.currentTarget.classList.remove(
              "animate-testimonial-marquee-paused",
            )
          }
        >
          {looped.map((testimony, i) => {
            return (
              <div
                key={`${testimony.key}-${i}`}
                className="transition-color duration-200 border border-transparent hover:border-gruv-highlight-yellow flex-none w-96 md:w-96 snap-start flex flex-col p-6 min-h-40 gap-3 bg-gruv-bg-tinted rounded-xl"
              >
                <div className="flex gap-3 items-stretch">
                  <div className="rounded-full bg-gruv-highlight-yellow text-white w-8 h-8 items-center justify-center flex ">
                    {testimony.author[0]}
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-white ">
                      {testimony.author}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {testimony.position}
                    </p>
                  </div>
                </div>

                <p className="text-md font-stretch-extra-condensed">
                  {testimony.testimony}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
