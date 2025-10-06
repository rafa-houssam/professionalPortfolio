"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="bg-[#f5f5f5] min-h-screen w-full py-4 lg:py-6 px-4 lg:px-8 overflow-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-2 sm:px-4 md:px-8 lg:px-20 xl:px-48 gap-6 lg:gap-8">
        {/* TEXT CONTAINER */}
        <div className="h-auto lg:h-full lg:w-1/2 flex flex-col items-center justify-center py-4 lg:py-0">
          {/* Say Hello Text */}
          <div className="text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 lg:mb-8">
            {text.split("").map((letter, index) => (
              <motion.span
                className="text-gradient bg-gradient-to-r from-purple-600 via-gray-600 to-blue-600 bg-clip-text text-transparent font-bold"
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          
          <div className="text-center lg:text-left w-full">
            <p className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">
              Available for Freelance 
            </p>
            <div className="flex justify-center lg:justify-start gap-3 lg:gap-4 flex-wrap">
              <a
                href="https://khamsat.com/user/rafa_houssam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-800 to-black text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-900 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm lg:text-base"
              >
                Khamsat
              </a>
              <a
                href="https://mostaql.com/u/rafa_houssam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 px-4 py-2 lg:px-6 lg:py-3 rounded-lg border-2 border-gray-800 font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm lg:text-base"
              >
                Mostaql
              </a>
            </div>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-auto lg:h-full lg:w-1/2 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl text-base lg:text-lg flex flex-col gap-4 lg:gap-6 justify-center p-4 sm:p-6 lg:p-12 xl:p-16 shadow-lg border border-red-100"
        >
          <div>
            <span className="text-gray-800 font-medium">Dear Rafa Houssam,</span>
            <textarea
              name="user_message"
              rows={3}
              placeholder="Write your message here..."
              className="text-black w-full mt-2 placeholder:text-gray-500 bg-white/70 border border-gray-300 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 py-2 px-3 lg:py-3 lg:px-4 font-light resize-none transition-all duration-200 text-sm lg:text-base"
            />
          </div>

          <div>
            <span className="text-gray-800 font-medium">My mail address is:</span>
            <input
              name="user_email"
              type="email"
              placeholder="Write your email here..."
              className="text-black w-full mt-2 placeholder:text-gray-500 bg-white/70 border border-gray-300 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 py-2 px-3 lg:py-3 lg:px-4 font-light transition-all duration-200 text-sm lg:text-base"
            />
          </div>

          <span className="text-gray-800 font-medium">Regards</span>

          <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-600 rounded-lg font-semibold text-white p-3 lg:p-4 hover:cursor-pointer transform hover:scale-105 transition-all duration-200 shadow-lg">
            Send Message
          </button>

          {success && (
            <span className="text-green-600 font-semibold text-sm lg:text-base">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-sm lg:text-base">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;