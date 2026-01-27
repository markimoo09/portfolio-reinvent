import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 py-6 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 items-center">
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <h2>
              <Link href="/" className="text-3xl font-bold">
                Markimoo
                <span className="text-gruv-highlight-green">.dev</span>
              </Link>
            </h2>
          </div>

          <div>
            <nav>
              <ul className="flex flex-row gap-4 items-center">
                <li>
                  <Link
                    href="/about"
                    className="text-lg font-semibold hover:text-gruv-highlight-yellow text-gruv-highlight-yellow transition-colors duration-300"
                  >
                    Who am I?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-lg font-semibold hover:text-gruv-highlight-yellow text-gray-300 transition-colors duration-200"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-lg font-semibold hover:text-gruv-highlight-yellow text-gray-300 transition-colors duration-200"
                  >
                    What I've Built
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-lg font-semibold hover:text-gruv-highlight-yellow text-gray-300 transition-colors duration-200"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
