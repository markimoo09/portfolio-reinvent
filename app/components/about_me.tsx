"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedIntro from "./animated_intro";
import SocialButtons from "./social_buttons";
import TechnologySection from "./technologies_section";

const AboutMe = () => {
  return (
    <>
      <div className="relative w-full min-h-[calc(100vh-7.5rem)] flex items-center">
        <div className="fixed inset-0 -z-10 bg-gruv-bg bg-[linear-gradient(to_right,#8080801c_1px,transparent_1px),linear-gradient(to_bottom,#8080801c_1px,transparent_1px)] bg-size-[120px_120px] mask-[radial-gradient(circle_at_50%_50%,black_0%,black_18%,transparent_42%),linear-gradient(to_right,transparent_0%,black_46%,black_54%,transparent_100%),linear-gradient(to_bottom,transparent_0%,black_46%,black_54%,transparent_100%)] mask-composite-intersect mask-repeat-no-repeat [mask-100%_100%,100%_100%,100%_100%] pointer-events-none"></div>
        <div className="flex w-full flex-col gap-18 py-6">
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
            <div className="flex flex-1 min-w-0 flex-col gap-6">
              <h1 className="text-[5.4rem] font-semibold leading-none tracking-tighter font-stretch-extra-condensed">
                Heya! I'm <br />
                <span className="text-gruv-highlight-green">Mark Lumbay</span>
              </h1>

              <AnimatedIntro />

              <div className="flex flex-row gap-3 mt-14">
                <SocialButtons />
              </div>
            </div>

            <div className="flex flex-1 justify-center lg:justify-end">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-112 lg:w-md shrink-0 rounded-full overflow-hidden bg-gruv-bg-tinted ring-1 ring-white/10">
                <Image
                  src="/images/IMG_5081_2.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 28rem, (min-width: 640px) 20rem, 16rem"
                />
              </div>
            </div>
          </div>

          <TechnologySection />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
