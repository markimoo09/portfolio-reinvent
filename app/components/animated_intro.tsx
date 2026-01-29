"use client";
import React, { useEffect, useState } from "react";

const AnimatedIntro = () => {
  const initialDelay = 1500;
  const prefix = "I am ";
  const phrases = [
    "a Software Engineer",
    "a Backend Engineer",
    "a Lead Engineer",
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
    <h2
      className="text-xl typing-cursor cursor-pointer"
      onClick={handleRestart}
    >
      {text}
    </h2>
  );
};

export default AnimatedIntro;
