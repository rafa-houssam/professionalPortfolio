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
      className="bg-[#f5f5f5] min-h-screen w-full py-10 px-8 space-y-24 overflow-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div className="lg:mt-60 ">
            {text.split("").map((letter, index) => (
              <motion.span
                className=" "
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
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 "
        >
          <div>
            <span>Dear Rafa Houssam,</span>
            <textarea
              name="user_message"

              placeholder="Write your message here..."
              className="w-full mt-2 placeholder:text-gray-400 bg-transparent  border-black outline-none shadow-inner py-1 px-2 font-light resize-none"
            />
          </div>

          <div>
            <span>My mail address is:</span>
            <input
              name="user_email"
              type="text"
              placeholder="Write your email here..."
              className="w-full mt-2 placeholder:text-gray-400 bg-transparent  border-black outline-none shadow-inner py-1 px-2 font-light"
            />
          </div>

          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:cursor-pointer">
            Send
          </button>

          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>


      </div>
      <div className="text-center mt-0">
        <p className="mt-0 text-lg font-medium">Available for Freelance</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://khamsat.com/user/rafa_houssam"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Khamsat
          </a>
          <a
            href="https://mostaql.com/u/rafa_houssam"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded border border-black"
          >
            Mostaql
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;