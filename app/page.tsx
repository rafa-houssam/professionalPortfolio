'use client'
import Image from "next/image";
import Brain from "./components/brain";
import { useScroll } from "framer-motion";

export default function Home() {
  const scrollYProgress=useScroll()
  return (
    <>
     {/* <Brain scrollYProgress={scrollYProgress.scrollYProgress} /> */}
    </>
    
  );
}
