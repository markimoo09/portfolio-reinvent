import React from "react";
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";

const SocialButtons = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Link
        href="/resume"
        className="text-xl font-semibold py-3 px-6 outline-1 rounded-full outline-gruv-highlight-yellow text-gruv-highlight-yellow hover:bg-gruv-highlight-yellow hover:text-gruv-bg transition-colors duration-300"
      >
        Resume
      </Link>

      <Link
        href="https://www.linkedin.com/in/marklumbay/"
        target="_blank"
        className="outline-1 outline-gruv-highlight-yellow text-gruv-highlight-yellow hover:bg-gruv-highlight-yellow hover:text-gruv-bg transition-colors duration-300 rounded-full p-3 cursor-pointer"
      >
        <Linkedin className="w-6 h-6" />
      </Link>

      <Link
        href="https://github.com/markimoo09"
        target="_blank"
        className="outline-1 outline-gruv-highlight-yellow text-gruv-highlight-yellow hover:bg-gruv-highlight-yellow hover:text-gruv-bg transition-colors duration-300 rounded-full p-3 cursor-pointer"
      >
        <Github className="w-6 h-6" />
      </Link>

      <Link
        href="mailto:marklumbay@gmail.com"
        className="outline-1 outline-gruv-highlight-yellow text-gruv-highlight-yellow hover:bg-gruv-highlight-yellow hover:text-gruv-bg transition-colors duration-300 rounded-full p-3 cursor-pointer"
      >
        <Mail />
      </Link>
    </div>
  );
};

export default SocialButtons;
