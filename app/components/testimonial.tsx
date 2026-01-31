"use client";

import React from "react";
import TestimonialCard from "./testimonial_card";
import testimonials from "../data/testimonials.json";

const TestimonialSection = () => {
  const looped = [...testimonials, ...testimonials, ...testimonials];
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
              <TestimonialCard
                testimony={testimony}
                key={`${testimony.author}-${i}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
