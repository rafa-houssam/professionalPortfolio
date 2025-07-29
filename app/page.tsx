"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex gap-8 flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-100 lg:w-100 relative mb-6 lg:mt-12 ">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold">
           3rd year cs student at ESI Algiers,Web developer,AI enthusiast.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Passionate about full-stack development, curious about AI, and always eager to learn and grow. I enjoy working on meaningful projects, solving problems, and exploring new ideas.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 pb-5">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href="/portfolio">
              View My Work</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <Link href="/contact">
              Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;