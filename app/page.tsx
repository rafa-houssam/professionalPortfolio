"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ParticleBackground from "./components/ParticleBackground";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Homepage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const containerRef = useRef(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const phrases = [
    "3rd year CS student at ESI Algiers",
    "Full-stack Web Developer",
    "AI Enthusiast",
    "Freelancer",
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

  useGSAP(() => {
    gsap.from(".hero-text-reveal", {
      y: 80,
      opacity: 0,
      duration: 0.9,
      stagger: 0.08,
      ease: "power4.out",
      delay: 0.3,
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      // Skip heavy tilt on small screens
      if (window.innerWidth < 768) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 16;
      const y = (clientY / innerHeight - 0.5) * 16;

      gsap.to(imageRef.current, {
        rotateY: x,
        rotateX: -y,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <motion.div
      className="overflow-y-hidden-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Disable particles on small screens for performance */}
      

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 items-center lg:items-center justify-center w-full py-10 sm:py-14 md:py-16">
        {/* IMAGE CONTAINER */}
        <div className="order-2 lg:order-1 w-full sm:w-auto flex justify-center lg:justify-start">
          <div className="hidden lg:block relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 lg:rounded-full flex-shrink-0">
            <div
              ref={imageRef}
              className="w-full h-full relative rounded-full overflow-hidden shadow-2xl border-4 border-white/20"
            >
              <Image
                src="/unnamed.png"
                alt="Hero image"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* TEXT CONTAINER */}
        <div className="order-1 lg:order-2 w-full lg:w-1/2 flex flex-col gap-6 sm:gap-7 md:gap-8 items-center lg:items-start justify-center text-center lg:text-left hero-text-reveal">
          {/* STATIC TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
            Hello, I'm Rafa Houssam
          </h1>

          {/* DYNAMIC TYPEWRITER TITLE */}
          <div className="h-14 sm:h-16 md:h-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black min-h-[2.5rem] break-words">
              {text}
              <span className="animate-pulse text-black ml-1">|</span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-base md:text-lg text-black max-w-[70ch] leading-relaxed">
            Passionate about full-stack development, curious about AI, and always eager to learn and grow.
            I enjoy working on meaningful projects, solving problems, and exploring new ideas.
          </p>

          {/* BUTTONS */}
          <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/portfolio">
              <button className="w-full sm:w-auto px-5 py-3 rounded-lg ring-1 ring-black bg-black text-white hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98]">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full sm:w-auto px-5 py-3 rounded-lg ring-1 ring-black text-black hover:bg-gray-100 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* MOBILE IMAGE BELOW TEXT (shows on small screens) */}
        <div className="block lg:hidden w-full flex justify-center mt-2">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-lg border-2 border-white/20">
            <Image
              src="/unnamed.png"
              alt="Hero image"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
