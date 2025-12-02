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
  "Stanford(via Coursera)": [
    
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

      {Object.entries(certifications).map(([category, images]) => (
        <section key={category} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 capitalize">
            {category.replace(/([A-Z])/g, " $1")} Certifications
          </h2>

          <div className="relative w-full overflow-hidden">
            {category === "linkedin" ? (
              <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {images.map((url, index) => (
                  <div
                    key={index}
                    className="min-w-[300px] h-[200px] bg-white rounded-lg flex items-center justify-center"
                  >
                    <Image
                      src={url}
                      alt={`LinkedIn Certification ${index + 1}`}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                className="flex space-x-4 w-max"
                variants={scrollVariants}
                animate="animate"
              >
                {[...images, ...images].map((url, index) => (
                  <div
                    key={index}
                    className="min-w-[300px] h-[200px] bg-[#f2efdc11] rounded-lg flex items-center justify-center"
                  >
                    <Image
                      src={url}
                      alt={`${category} Certification ${index + 1}`}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CertificationsPage;
