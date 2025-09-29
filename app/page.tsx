"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const Homepage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      className="min-h-screen h-full relative overflow-hidden"
      style={{ minHeight: '100dvh' }}
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-1/3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-30"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8 lg:py-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* IMAGE CONTAINER */}
        <motion.div
          className="flex lg:hidden relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-8 group"
          variants={imageVariants}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50">
            <Image
              src="/hero.png"
              alt="Hero image"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse" />
          </div>
          {/* Floating dots around image */}
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full"
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <motion.div
          className="hidden lg:block relative w-80 h-80 xl:w-96 xl:h-96 group"
          variants={imageVariants}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50">
            <Image
              src="/hero.png"
              alt="Hero image"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse" />
          </div>
          {/* Floating elements around desktop image */}
          <motion.div
            className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* TEXT CONTAINER */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left"
          variants={containerVariants}
        >
          {/* TITLE */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent leading-tight"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              3rd year CS student at ESI Algiers,
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              Web developer, AI enthusiast.
            </motion.span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            className="text-lg md:text-xl lg:text-lg xl:text-xl text-gray-700 leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            Passionate about{" "}
            <motion.span
              className="text-purple-600 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              full-stack development
            </motion.span>
            , curious about{" "}
            <motion.span
              className="text-pink-600 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              AI
            </motion.span>
            , and always eager to learn and grow. I enjoy working on meaningful projects, solving problems, and exploring new ideas.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full sm:w-auto"
            variants={containerVariants}
          >
            <Link href="/portfolio">
              <motion.button
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl w-full sm:w-auto relative overflow-hidden"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">View My Work</span>
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className="px-8 py-4 rounded-xl border-2 border-gray-800 text-gray-800 font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl relative overflow-hidden"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div
                  className="absolute inset-0 bg-gray-800"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Contact Me</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* SCROLL INDICATOR */}
          <motion.div
            className="flex flex-col items-center gap-2 mt-8 lg:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
