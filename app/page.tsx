import React from "react";
import AboutMe from "./components/about_me";
import ExperienceSection from "./components/experience";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-14 ">
        <AboutMe />
        <ExperienceSection />
      </div>
    </div>
  );
};

export default HomePage;
