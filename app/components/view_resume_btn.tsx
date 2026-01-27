import Link from "next/link";
import React from "react";

const ViewResume = () => {
  return (
    <button className="text-xl font-semibold py-2 px-6 outline-1 rounded-full outline-gruv-highlight-yellow text-gruv-highlight-yellow hover:bg-gruv-highlight-yellow hover:text-gruv-bg transition-colors duration-300">
      <Link href="/resume">Resume</Link>
    </button>
  );
};

export default ViewResume;
