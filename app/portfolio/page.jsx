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
    img: "/p4.jpeg",
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
    desc: "onyva is web app where algerian youth can search for real activities far from their phones ,these activities includes charity,football,planting... and many other usefull activities",
    img: "/p3.jpeg",
    link: "https://github.com/rafa-houssam/Hackin1",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-end justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-3 text-white mt-5">
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] rounded-lg ">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <h1 className="text-xl font-bold md:text-3xl lg:text-4xl xl:text-4xl text-blue-500">
                    {item.title}
                  </h1>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] font-light">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-center items-center text-center">
                    <button className="p-3 text-sm md:p-2 md:text-md lg:p-3 lg:text-lg bg-white text-gray-600 font-semibold mb-6  rounded">See code </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center mt-60">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
               Front-end and Backend developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;