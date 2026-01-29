import React from "react";
import AboutMe from "./components/about_me";
import ExperienceSection from "./components/experience";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <AboutMe />
      <ExperienceSection />
    </div>
  );
};

export default HomePage;
