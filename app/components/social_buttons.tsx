import React from "react";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

const SocialButtons = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <button className="text-xl font-semibold py-3 px-6 outline-1 rounded-full outline-gruv-highlight-yellow text-gruv-highlight-yellow hover:bg-gruv-highlight-yellow hover:text-gruv-bg transition-colors duration-300">
        <Link href="/resume">Resume</Link>
      </button>

      <button className="outline-1 outline-gruv-highlight-yellow text-gruv-highlight-yellow hover:bg-gruv-highlight-yellow hover:text-gruv-bg transition-colors duration-300 rounded-full p-3 cursor-pointer">
        <Linkedin className="w-6 h-6" />
      </button>

      <button className="outline-1 outline-gruv-highlight-yellow text-gruv-highlight-yellow hover:bg-gruv-highlight-yellow hover:text-gruv-bg transition-colors duration-300 rounded-full p-3 cursor-pointer">
        <Github className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SocialButtons;
