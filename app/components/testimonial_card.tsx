import React from "react";

type Testimonial = {
  testimony: string;
  author: string;
  position: string;
  key: string;
};
const TestimonialCard = ({ testimony }: { testimony: Testimonial }) => {
  return (
    <div className="transition-color duration-200 border border-transparent hover:border-gruv-highlight-yellow flex-none w-96 md:w-96 snap-start flex flex-col p-6 min-h-40 gap-3 bg-gruv-bg-tinted rounded-xl">
      <div className="flex gap-3 items-stretch">
        <div className="rounded-full bg-gruv-highlight-yellow text-white w-8 h-8 items-center justify-center flex ">
          {testimony.author[0]}
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-white ">{testimony.author}</h3>
          <p className="text-sm text-gray-400">{testimony.position}</p>
        </div>
      </div>

      <p className="text-md font-stretch-extra-condensed">
        {testimony.testimony}
      </p>
    </div>
  );
};

export default TestimonialCard;
