"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
const AboutMe = () => {
  const initialDelay = 1500;
  const prefix = "I am ";
  const phrases = [
    "a Software Engineer",
    "a Backend Engineer",
    "an AI Engineer",
    "a Software Engineer who specializes in Backend and AI Engineering",
  ];
  const targets = phrases.map((phrase) => `${prefix}${phrase}`);

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isStarted) return;

    const timeout = setTimeout(() => {
      setIsStarted(true);
    }, initialDelay);

    return () => clearTimeout(timeout);
  }, [initialDelay, isStarted]);

  useEffect(() => {
    if (isDone || !isStarted) return;

    const fullText = targets[phraseIndex];
    const isFinal = phraseIndex === targets.length - 1;
    const typingSpeed = isDeleting ? 30 : 35;
    const pause = isFinal ? 1500 : 1700;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < fullText.length) {
            setText(fullText.slice(0, text.length + 1));
          } else if (isFinal) {
            setIsDone(true);
          } else {
            setIsDeleting(true);
          }
        } else if (text.length > prefix.length) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => prev + 1);
        }
      },
      text.length === fullText.length && !isDeleting ? pause : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [isDeleting, isDone, phraseIndex, prefix.length, targets, text]);

  const handleRestart = () => {
    setText("");
    setPhraseIndex(0);
    setIsDeleting(false);
    setIsDone(false);
    setIsStarted(false);
  };
  return (
    <>
      <div className="relative h-screen">
        <div className="fixed inset-0 -z-10 bg-gruv-bg bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-size-[120px_120px] mask-[radial-gradient(circle_at_50%_50%,black_0%,black_40%,transparent_65%),linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%),linear-gradient(to_bottom,transparent_0%,black_28%,black_82%,transparent_100%)] mask-composite-intersect mask-repeat-no-repeat [mask-size:100%_100%,100%_100%,100%_100%] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col gap-10 pt-12 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-1 min-w-0 flex-col gap-6">
            <h1 className="text-[5.4rem] font-semibold leading-none tracking-tighter font-stretch-extra-condensed">
              Heya! I'm <br />
              <span className="text-gruv-highlight-green">Mark Lumbay</span>
            </h1>

            <h2
              className="text-xl typing-cursor cursor-pointer"
              onClick={handleRestart}
            >
              {text}
            </h2>
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
      </div>
    </>
  );
};

export default AboutMe;
