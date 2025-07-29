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
      <div className="h-full flex flex-col lg:flex-row gap-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="hidden lg:block lg:w-1/2 lg:h-full relative mt-12">
          <Image src="/hero.png" alt="Hero image" fill className="object-contain" />
        </div>

        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-center lg:text-left">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold">
            3rd year CS student at ESI Algiers, Web developer, AI enthusiast.
          </h1>
          
          {/* DESCRIPTION */}
          <p className="md:text-xl font-light">
            Passionate about full-stack development, curious about AI, and always eager to learn and grow. I enjoy working on meaningful projects, solving problems, and exploring new ideas.
          </p>
          
          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pb-5">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white w-full sm:w-auto">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black w-full sm:w-auto">
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
