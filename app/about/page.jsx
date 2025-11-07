"use client";
import Brain from "@/app/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-x-hidden lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/hero1.png"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl text-black">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg text-black ">
              I'm a dedicated and ambitious Computer Science student at ESI Algiers, passionate about building innovative solutions through code. My journey in technology is driven by curiosity and a desire to make meaningful impact.

              I consider myself a determined learner, always working hard to build strong, real-world skills in web development and AI. I'm actively involved in projects, clubs, and continuous learning to make the most of my journey.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic font-light ">
              "I'm passionate about full-stack development, curious about AI, and always eager to learn and grow"
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100" viewBox="1.9700000286102295 5.349999904632568 102.5999984741211 35.40999984741211"><path d="M35.37 36.07L35.37 36.07Q34.82 37.25 33.87 37.25L33.87 37.25Q33.14 37.25 30.31 36.52L30.31 36.52L22.73 34.67Q19.28 33.93 16.13 33.16L16.13 33.16Q14.63 32.93 13.11 32.71L13.11 32.71Q10.33 32.21 9.41 31.56L9.41 31.56Q7.13 29.92 7.13 29.20L7.13 29.20Q7.13 27.71 8.69 27.01L8.69 27.01Q8.77 26.99 12.13 26.15L12.13 26.15Q15.27 25.41 16.41 24.75L16.41 24.75Q18.91 23.30 22.46 19.59L22.46 19.59Q26.33 15.55 26.33 13.03L26.33 13.03Q26.33 9.30 23.46 8.22L23.46 8.22Q21.89 7.64 17.44 7.64L17.44 7.64Q15.64 7.64 14.24 7.99L14.24 7.99Q13.40 8.24 11.66 8.73L11.66 8.73Q9.84 9.20 6.68 11.62L6.68 11.62Q6.04 12.50 4.63 14.14L4.63 14.14Q3.98 13.63 3.98 12.89L3.98 12.89Q3.98 10.78 7.25 8.98L7.25 8.98Q9.14 7.93 12.44 6.78L12.44 6.78Q16.58 5.35 18.95 5.35L18.95 5.35Q23.71 5.35 26.02 6.99L26.02 6.99Q26.58 7.38 27.71 9.54Q28.85 11.70 28.85 12.38L28.85 12.38Q28.85 15.80 25 20.08L25 20.08Q22.07 23.32 18.22 25.90L18.22 25.90Q17.73 26.25 15.47 27.52L15.47 27.52Q14.30 27.75 13.14 28.01L13.14 28.01Q10.84 28.48 10.37 28.87L10.37 28.87Q10.59 29.43 13.16 29.96L13.16 29.96Q15 30.31 16.82 30.68L16.82 30.68Q17.83 30.92 20.45 31.58L20.45 31.58Q24.00 32.52 35.37 36.07ZM8.24 13.18L8.24 14.32Q8.24 14.65 7.38 17.52L7.38 17.52Q6.43 20.70 6.31 21.35L6.31 21.35Q5.14 28.03 4.92 36.11L4.92 36.11Q4.69 37.29 4.41 39.67L4.41 39.67Q4.34 39.73 2.54 40.76L2.54 40.76Q1.97 36.72 1.97 35.49L1.97 35.49Q1.97 35.04 2.71 30.31L2.71 30.31Q3.73 23.75 4.55 20.02L4.55 20.02Q4.98 18.07 6.05 14.59L6.05 14.59Q6.54 14.04 7.03 12.95L7.03 12.95L8.24 13.18ZM54.47 39.06L54.47 39.94Q54.06 40.51 53.57 40.51L53.57 40.51Q53.26 40.51 51.46 38.63L51.46 38.63Q49.67 36.74 49.06 36.74L49.06 36.74Q49.06 36.74 49.06 36.74L49.06 36.74Q49.06 36.78 44.80 38.38L44.80 38.38Q40.45 40 39.26 40L39.26 40Q38.28 40 37.09 39.04Q35.90 38.09 35.90 37.25L35.90 37.25Q35.90 35.08 40.64 32.19L40.64 32.19Q45.10 29.45 47.44 29.45L47.44 29.45Q48.42 29.45 49.20 30.57L49.20 30.57L49.20 31.41Q48.81 31.97 48.30 31.97L48.30 31.97Q48.20 31.97 47.63 31.72Q47.05 31.46 46.93 31.46L46.93 31.46Q46.15 31.46 43.36 33.07L43.36 33.07Q40.70 34.57 39.80 35.31L39.80 35.31Q38.91 36.09 38.65 37.09L38.65 37.09Q39.34 37.73 40.27 37.73L40.27 37.73Q40.76 37.73 44.98 36.11L44.98 36.11Q49.18 34.47 50.06 34.47L50.06 34.47Q51.35 34.47 51.91 35.12L51.91 35.12Q52.05 35.27 52.91 36.88L52.91 36.88Q53.55 38.09 54.47 39.06L54.47 39.06ZM90.47 12.99L90.47 12.99Q90.47 12.97 90.47 12.97L90.47 12.97Q90.43 12.97 90.16 14.00L90.16 14.00Q86.74 9.24 80.33 9.24L80.33 9.24Q78.18 9.24 75.74 10.27L75.74 10.27Q73.13 11.35 71.95 12.95L71.95 12.95Q70.63 14.77 69.32 18.44L69.32 18.44Q67.91 22.29 67.91 24.28L67.91 24.28Q67.91 24.90 68.16 26.86L68.16 26.86Q68.42 28.98 68.46 29.38L68.46 29.38Q69.32 30.06 69.77 30.06L69.77 30.06Q69.96 30.06 70.70 29.86L70.70 29.86Q71.46 29.67 71.50 29.67L71.50 29.67Q73.01 29.51 78.11 29.51L78.11 29.51Q81.45 29.51 84.45 29.71L84.45 29.71Q84.28 29.71 83.61 30.23L83.61 30.23L83.67 30.78L76.43 31.21Q72.01 31.46 69.63 33.01L69.63 33.01Q70.21 35.08 72.15 38.46L72.15 38.46L72.15 39.53Q71.95 39.88 71.41 39.88L71.41 39.88Q70.88 39.88 68.71 36.35L68.71 36.35Q66.50 32.83 66.02 32.83L66.02 32.83Q64.88 32.83 62.77 33.26L62.77 33.26Q62.13 33.42 60.20 34.12L60.20 34.12Q58.28 34.84 57.97 34.84L57.97 34.84Q56.89 34.84 55.61 33.52L55.61 33.52Q55.61 33.48 55.61 33.44L55.61 33.44Q55.61 32.56 56.43 32.19L56.43 32.19Q58.69 31.13 65.45 30.51L65.45 30.51Q65.84 30.23 66.04 29.92L66.04 29.92Q65.76 27.62 65.76 25.41L65.76 25.41Q65.76 17.79 69.10 12.77L69.10 12.77Q72.91 6.99 80.18 6.99L80.18 6.99Q83.48 6.99 86.58 8.40L86.58 8.40Q90.47 10.18 90.47 12.99ZM104.57 39.06L104.57 39.94Q104.16 40.51 103.67 40.51L103.67 40.51Q103.36 40.51 101.56 38.63L101.56 38.63Q99.77 36.74 99.16 36.74L99.16 36.74Q99.16 36.74 99.16 36.74L99.16 36.74Q99.16 36.78 94.90 38.38L94.90 38.38Q90.55 40 89.36 40L89.36 40Q88.38 40 87.19 39.04Q86.00 38.09 86.00 37.25L86.00 37.25Q86.00 35.08 90.74 32.19L90.74 32.19Q95.20 29.45 97.54 29.45L97.54 29.45Q98.52 29.45 99.30 30.57L99.30 30.57L99.30 31.41Q98.91 31.97 98.40 31.97L98.40 31.97Q98.30 31.97 97.72 31.72Q97.15 31.46 97.03 31.46L97.03 31.46Q96.25 31.46 93.46 33.07L93.46 33.07Q90.80 34.57 89.90 35.31L89.90 35.31Q89.00 36.09 88.75 37.09L88.75 37.09Q89.43 37.73 90.37 37.73L90.37 37.73Q90.86 37.73 95.08 36.11L95.08 36.11Q99.28 34.47 100.16 34.47L100.16 34.47Q101.45 34.47 102.01 35.12L102.01 35.12Q102.15 35.27 103.01 36.88L103.01 36.88Q103.65 38.09 104.57 39.06L104.57 39.06Z" fill="black" /></svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Pandas
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Numpy
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Django
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postman
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Matplotlib
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Github
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Ninja API
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Prisma
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQL
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded   p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-1 mb-0 text-black"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-center lg:text-left"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="flex flex-col items-center lg:block"
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex flex-col lg:flex-row justify-center lg:justify-between h-auto lg:h-48 w-full max-w-4xl">
                {/* LEFT */}
                <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-bold rounded-b-lg rounded-s-lg text-black text-center lg:text-left">
                    Front-end developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-black text-center lg:text-left">
                    I started with html/css/js and then i moved to
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold text-center lg:text-left">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="flex flex-row gap-2 justify-center lg:justify-start flex-wrap">
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit text-black">
                      next.js
                    </div>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit text-black">
                      html/css/js
                    </div>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit text-black">
                      Tailwind
                    </div>
                  </div>
                </div>
                {/* CENTER */}
                <div className="hidden lg:flex w-1/6 justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="hidden lg:block w-1/3"></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex flex-col lg:flex-row justify-center lg:justify-between h-auto lg:h-48 w-full max-w-4xl">
                {/* LEFT */}
                <div className="hidden lg:block w-1/3"></div>
                {/* CENTER */}
                <div className="hidden lg:flex w-1/6 justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-bold rounded-b-lg rounded-s-lg text-black text-center lg:text-left">
                    Backend developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-black text-center lg:text-left">
                    I moved  full stack apps with django and next.js.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold text-center lg:text-left">
                    2025-present{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="flex flex-row gap-2 justify-center lg:justify-start flex-wrap">
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit text-black">
                      python
                    </div>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit text-black">
                      Django
                    </div>
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex flex-col lg:flex-row justify-center lg:justify-between h-auto lg:h-48 w-full max-w-4xl">
                {/* LEFT */}
                <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-bold rounded-b-lg rounded-s-lg text-black text-center lg:text-left">
                    Data science and AI {" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-black text-center lg:text-left">
                    "I began exploring Data Science and AI by applying a variety of tools to solve problems, gradually deepening my understanding through hands-on projects and continuous learning{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold text-center lg:text-left">
                    2025-present{" "}
                  </div>
                  <div className="flex flex-row gap-2 justify-center lg:justify-start flex-wrap">
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit text-black">
                      python
                    </div>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit text-black">
                      Numpy
                    </div>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit text-black">
                      Pandas
                    </div>
                  </div>
                </div>
                {/* CENTER */}
                <div className="hidden lg:flex w-1/6 justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="hidden lg:block w-1/3"></div>
              </div>
            </motion.div>

          </div>



        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>


      </div>

    </motion.div>
  );
};

export default AboutPage;
