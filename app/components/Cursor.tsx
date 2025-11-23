"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

type TrailDot = {
    id: number;
    x: number;
    y: number;
    hue: number;
};

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState<"default" | "text">(
        "default"
    );
    const [mounted, setMounted] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [trail, setTrail] = useState<TrailDot[]>([]);
    const rafRef = useRef<number | null>(null);
    const lastPosRef = useRef({ x: 0, y: 0, time: 0 });

    useEffect(() => {
        setMounted(true);
        // Check if device is desktop (screen width > 768px)
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth > 768);
        };
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;
            setMousePosition({ x, y });

            // push new dot at front with a hue based on time for color-shift trail
            setTrail((prev) => {
                const next = [
                    { id: Date.now(), x, y, hue: (Date.now() / 10) % 360 },
                    ...prev,
                ];
                return next.slice(0, 10); // limit length
            });
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    // gradually fade out trail: remove oldest dots periodically for smooth decay
    useEffect(() => {
        const tick = () => {
            setTrail((prev) => {
                if (prev.length <= 0) return prev;
                // remove last dot occasionally to create trailing fade
                const next =
                    prev.length > 0
                        ? prev.map((d, i) => d).filter((_, i) => i < 10)
                        : prev;
                // keep trimming if too long
                return next;
            });
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    useEffect(() => {
        const textElements = document.querySelectorAll(
            "p, h1, h2, h3, span, a, button, li"
        );

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
        };
    }, []);

    if (!mounted || !isDesktop) return null;

    const trailNodes = trail.map((dot, idx) => {
        // newer dots at front -> larger + more opaque
        const size = 6 + 1.2 * (trail.length - idx);
        const opacity = ((0.7 * (trail.length - idx)) / trail.length) * 0.85;
        const hue = dot.hue + idx * 8;
        return (
            <motion.div
                key={dot.id}
                className="fixed pointer-events-none rounded-full md:block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    x: dot.x - size / 2,
                    y: dot.y - size / 2,
                    opacity,
                    scale: 1,
                }}
                transition={{ ease: "linear", duration: 0.18 }}
                style={{
                    width: size,
                    height: size,
                    background: `linear-gradient(135deg, hsl(${hue} 90% 55%), hsl(${(hue + 60) % 360} 90% 55%))`,
                    filter: "blur(0.2px)",
                    zIndex: 9998,
                    mixBlendMode: "screen",
                    willChange: "transform, opacity",
                }}
            />
        );
    });

    // main cursor: small circle in default mode (kept subtle) and large rounded "text" blob on hover
    const mainCursor =
        cursorVariant === "text" ? (
            <motion.div
                className="fixed top-0 left-0 pointer-events-none rounded-full md:block"
                initial={{ opacity: 0 }}
                animate={{
                    x: mousePosition.x - 75,
                    y: mousePosition.y - 75,
                    width: 150,
                    height: 150,
                    opacity: 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                style={{
                    background: "rgba(255,255,255,0.95)",
                    mixBlendMode: "difference" as any,
                    zIndex: 9999,
                    willChange: "transform, width, height",
                }}
            />
        ) : (
            <motion.div
                className="fixed top-0 left-0 pointer-events-none rounded-full md:block"
                initial={{ opacity: 0 }}
                animate={{
                    x: mousePosition.x - 10,
                    y: mousePosition.y - 10,
                    width: 20,
                    height: 20,
                    opacity: 1,
                }}
                transition={{ type: "spring", stiffness: 600, damping: 30 }}
                style={{
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.3)), linear-gradient(90deg, rgba(0,0,0,0.85), rgba(90,90,90,0.6))",
                    mixBlendMode: "difference" as any,
                    zIndex: 9999,
                    willChange: "transform, width, height",
                }}
            />
        );

    const node = (
        <>
            {/* trail dots shown only when not hovering text */}
            {cursorVariant === "default" && trailNodes}
            {mainCursor}
        </>
    );

    return createPortal(node, document.body);
};

export default Cursor;
