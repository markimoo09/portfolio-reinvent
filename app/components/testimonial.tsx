import React from "react";

type Testimonial = {
  testimony: string;
  author: string;
  key: string;
};

const testimonials: Testimonial[] = [
  {
    testimony: "Hardworking, You'll be sure to get quality outputs from him.",
    author: "John Doe",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Mark Christopher demonstrates a well-rounded level of professional excellence through strong technical proficiency and adaptability. He consistently delivers high-quality results, even in challenging or high-pressure environments.",
    author: "John Doe",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Great team member and can effectively communicate and get along with other members to make sure goals are met.",
    author: "John Doe",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Great team member and can effectively communicate and get along with other members to make sure goals are met.",
    author: "John Doe",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Great team member and can effectively communicate and get along with other members to make sure goals are met.",
    author: "John Doe",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Great team member and can effectively communicate and get along with other members to make sure goals are met.",
    author: "John Doe",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Great team member and can effectively communicate and get along with other members to make sure goals are met.",
    author: "John Doe",
    key: crypto.randomUUID(),
  },
  {
    testimony:
      "Great team member and can effectively communicate and get along with other members to make sure goals are met.",
    author: "John Doe",
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
        <div className="animate-testimonial-marquee hover:animation-testimonial-marquee-paused flex w-max gap-4">
          {looped.map((testimony, i) => {
            return (
              <div
                key={`${testimony.key}-${i}`}
                className="flex-none w-96 md:w-96 snap-start flex flex-col p-6 min-h-40 justify-between gap-12 bg-gruv-bg-tinted rounded-xl"
              >
                <p className="text-md font-stretch-extra-condensed">
                  {testimony.testimony}
                </p>

                <h3 className="text-lg font-bold text-gruv-highlight-yellow text-right">
                  {testimony.author}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
