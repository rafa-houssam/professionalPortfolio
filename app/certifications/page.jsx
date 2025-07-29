"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const certifications = {
  datacamp: [
    "/d1.jpeg",
    "/d2.jpeg",
    "/d3.jpeg",
    "/d4.jpeg",
    "/d5.jpeg",
    "/d6.jpeg",
    "/d7.jpeg",
    "/d8.jpeg",
  ],
  linkedin: [
    "/c1.jpeg",
    "/c2.jpeg",
    "/c3.jpeg",
    "/c4.jpeg",
    "/c5.jpeg",
    "/c6.jpeg",
    "/c7.jpeg",
    "/c8.jpeg",
  ],
  frontendMasters: [
    "/f1.jpeg",
    "/f2.jpeg",
    "/f3.jpeg",
    "/f4.jpeg",
    "/f5.jpeg",
    "/f6.jpeg",
    "/f7.jpeg",
  ],
};

const scrollVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 60,
        ease: "linear",
      },
    },
  },
};

const CertificationsPage = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen w-full py-16 px-8 space-y-24 overflow-hidden">
      <h1 className="text-4xl font-bold text-center text-gray-800">My Certifications</h1>

      {/* Section Generator */}
      {Object.entries(certifications).map(([category, images]) => (
        <section key={category} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 capitalize">
            {category.replace(/([A-Z])/g, " $1")} Certifications
          </h2>
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex space-x-4 w-max"
              variants={scrollVariants}
              animate="animate"
            >
              {[...images, ...images].map((url, index) => (
                <div
                  key={index}
                  className={`min-w-[300px] h-[200px] ${url=="/c1.jpegs" ||url=="/c2.jpegs" ||url=="/c3.jpegs" ||url=="/c4.jpegs" ||url=="/c5.jpegs" ||url=="/c6.jpegs" ||url=="/c7.jpegs" ||url=="/c8.jpegs"? "bg-red":"bg-blue"}  rounded-lg shadow-md flex items-center justify-center`}
                >
                  <Image
                    src={url}
                    alt={`cert-${index}`}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CertificationsPage;
