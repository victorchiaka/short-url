import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing logic goes here
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex(0);
      });
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const Title = () => {
  return (
    <>
      <div className="flex flex-col md:w-[60em] items-center justify-center">
        <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-b from-white to-soothblack sm:text-4xl md:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">
            Short-
          </span>
          Urls
        </h1>
        <div className="h-[4em] flex items-center">
          <p className="text-white">
            <Typewriter text="-Shrink your urls now-" delay={250} infinite />
          </p>
        </div>
      </div>
    </>
  );
};

export default Title;
