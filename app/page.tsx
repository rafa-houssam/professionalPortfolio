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
  const textRef = useRef(null);
  const imageRef = useRef(null);

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

  useGSAP(() => {
    gsap.from(".hero-text-reveal", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.5,
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      gsap.to(imageRef.current, {
        rotateY: x,
        rotateX: -y,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, { scope: containerRef });

  return (
    <motion.div
      className="h-full relative overflow-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      ref={containerRef}
    >
      <ParticleBackground />
      <div className="h-full flex flex-col lg:flex-row gap-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center justify-center">
        {/* IMAGE CONTAINER */}
        <div className="hidden lg:block relative w-80 h-80 lg:rounded-full  flex-shrink-0 -mt-16 -ml-8 perspective-1000">
          <div ref={imageRef} className="w-full h-full relative rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
            <Image
              src="/hero1.png"
              alt="Hero image"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>

        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center lg:items-start justify-center text-center lg:text-left z-10">
          {/* STATIC TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold text-black hero-text-reveal">
            Hello, I'm Rafa Houssam
          </h1>

          {/* DYNAMIC TYPEWRITER TITLE */}
          <div className="h-20 md:h-28 hero-text-reveal">
            <h1 className="text-3xl md:text-4xl font-bold text-black min-h-[3rem]">
              {text}
              <span className="animate-pulse text-black">|</span>
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="md:text-xl text-black hero-text-reveal">
            Passionate about full-stack development, curious about AI, and always eager to learn and grow. I enjoy working on meaningful projects, solving problems, and exploring new ideas.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 hero-text-reveal">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white w-full sm:w-auto hover:cursor-pointer hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-black p-4 rounded-lg ring-1 ring-black w-full sm:w-auto hover:cursor-pointer hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
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
