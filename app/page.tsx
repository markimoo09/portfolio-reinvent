import React from "react";
import AboutMe from "./components/about_me";
import ExperienceSection from "./components/experience";
import TestimonialSection from "./components/testimonial";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-14 ">
      <AboutMe />
      <ExperienceSection />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
