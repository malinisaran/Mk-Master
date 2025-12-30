"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  showCursor?: boolean;
}

export default function TypingEffect({ text, speed = 100, showCursor = true }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, isComplete]);

  return (
    <>
      {displayedText}
      {showCursor && !isComplete && (
        <span className="inline-block w-0.5 h-[0.9em] bg-current ml-1 animate-pulse" />
      )}
    </>
  );
}

