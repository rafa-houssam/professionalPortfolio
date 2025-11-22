"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "black",
            mixBlendMode: "difference" as any,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "white",
            mixBlendMode: "difference" as any,
        },
    };

    // Add event listeners for hover effects on mount
    useEffect(() => {
        const textElements = document.querySelectorAll("p, h1, h2, h3, span, a, button");

        const textEnter = () => setCursorVariant("text");
        const textLeave = () => setCursorVariant("default");

        textElements.forEach((el) => {
            el.addEventListener("mouseenter", textEnter);
            el.addEventListener("mouseleave", textLeave);
        });

        return () => {
            textElements.forEach((el) => {
                el.removeEventListener("mouseenter", textEnter);
                el.removeEventListener("mouseleave", textLeave);
            });
        }
    }, []);


    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
            variants={variants}
            animate={cursorVariant}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
        />
    );
};

export default Cursor;
