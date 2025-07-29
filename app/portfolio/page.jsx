"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "LMCS research laboratory",
    desc: "Research management platform built with modern web technologies. A comprehensive system for managing research projects, collaboration, and data visualization.",
    img: "/p2.jpeg",
    link: "https://github.com/rafa-houssam/LMCS-Scholars",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "studybuddy",
    desc: "Study platform with rooms, discussions, and user authentication. Built with Django, providing a collaborative learning environment for students.",
    img: "/p4.png",
    link: "https://github.com/rafa-houssam/Django",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Basic ecommerce app",
    desc: "Full-stack e-commerce platform built with modern web technologies. Features product management, user authentication, shopping cart, and order processing system.",
    img: "/ecom.png",
    link: "https://github.com/rafa-houssam/basic-ecommerce-website",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "onyva webapp",
    desc: "onyva is a web app where Algerian youth can search for real activities away from their phones, including charity, football, planting, and other useful experiences.",
    img: "/p3.jpeg",
    link: "https://github.com/rafa-houssam/Hackin1",
  },
];

const PortfolioPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        {/* Header */}
        <div className="w-full h-[calc(100vh-6rem)] flex items-center justify-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center px-4">
          My Works
        </div>

        {/* Scroll Section */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex w-max">
            {/* Spacer */}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />

            {/* Projects */}
            {items.map((item) => (
              <div
                key={item.id}
                className={`h-screen w-screen flex items-end justify-center bg-gradient-to-r ${item.color} p-4 sm:p-8`}
              >
                <div className="flex flex-col gap-4 text-white max-w-full sm:max-w-xl md:max-w-2xl">
                  <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-96 rounded-lg overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                  </div>
                  <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg font-light text-white">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank">
                    <button className="px-4 py-2 bg-white text-gray-700 rounded-md font-semibold hover:bg-gray-200 transition">
                      See Code
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full h-screen flex flex-col gap-12 items-center justify-center text-center px-4 mt-48 sm:mt-60">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">
          Do you have a project?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-sm sm:text-lg">
                Front-end and Backend developer
              </textPath>
            </text>
          </motion.svg>

          <Link
            href="/contact"
            className="absolute top-0 left-0 right-0 bottom-0 m-auto w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-black text-white rounded-full flex items-center justify-center text-sm sm:text-base"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
