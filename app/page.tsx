"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "3rd year CS student at ESI Algiers",
    "Full-stack Web Developer",
    "AI Enthusiast",
    "Freelancer"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <motion.div
      className="mt-17"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row gap-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center justify-center">
        {/* IMAGE CONTAINER */}
        <div className="hidden lg:block relative w-80 h-80 lg:rounded-full overflow-hidden flex-shrink-0 -mt-16 -ml-8">
          <Image
            src="/hero1.png"
            alt="Hero image"
            fill
            className="object-cover rounded-full"
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center lg:items-start justify-center text-center lg:text-left">
          {/* STATIC TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Hello, I'm Rafa Houssam
          </h1>

          {/* DYNAMIC TYPEWRITER TITLE */}
          <div className="h-24 md:h-28">
            <h1 className="text-3xl md:text-4xl font-bold text-black min-h-[3rem]">
              {text}
              <span className="animate-pulse text-black">|</span>
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="md:text-xl text-black">
            Passionate about full-stack development, curious about AI, and always eager to learn and grow. I enjoy working on meaningful projects, solving problems, and exploring new ideas.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white w-full sm:w-auto hover:cursor-pointer hover:bg-gray-800 transition-all">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-black p-4 rounded-lg ring-1 ring-black w-full sm:w-auto hover:cursor-pointer hover:bg-gray-100 transition-all">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
