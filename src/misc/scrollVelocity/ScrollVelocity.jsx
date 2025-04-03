import React from "react";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import "./ScrollVelocity.css";

function useElementWidth(ref) {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        function updateWidth() {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        }
        updateWidth();
        const resizeObserver = new ResizeObserver(updateWidth);
        if (ref.current) {
            resizeObserver.observe(ref.current);
        }
        return () => resizeObserver.disconnect();
    }, [ref]);

    return width;
}

export const ScrollVelocity = ({
    scrollContainerRef,
    texts = [],
    velocity = 100,
    className = "",
    damping = 50,
    stiffness = 400,
    numCopies = 3, // Reduced for mobile
    velocityMapping = { input: [0, 500], output: [0, 3] }, // Adjusted for mobile
    parallaxClassName = "parallax",
    scrollerClassName = "scroller",
    parallaxStyle,
    scrollerStyle,
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    function VelocityText({
        children,
        baseVelocity = velocity,
        scrollContainerRef,
        className = "",
        damping,
        stiffness,
        numCopies,
        velocityMapping,
        parallaxClassName,
        scrollerClassName,
        parallaxStyle,
        scrollerStyle,
    }) {
        const baseX = useMotionValue(0);
        const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
        const { scrollY } = useScroll(scrollOptions);
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, {
            damping: isMobile ? (damping * 1.5) : damping,
            stiffness: isMobile ? (stiffness * 0.8) : stiffness,
        });
        const velocityFactor = useTransform(
            smoothVelocity,
            velocityMapping?.input || [0, isMobile ? 500 : 1000],
            velocityMapping?.output || [0, isMobile ? 3 : 5],
            { clamp: false }
        );

        const copyRef = useRef(null);
        const copyWidth = useElementWidth(copyRef);

        function wrap(min, max, v) {
            const range = max - min;
            const mod = (((v - min) % range) + range) % range;
            return mod + min;
        }

        const x = useTransform(baseX, (v) => {
            if (copyWidth === 0) return "0px";
            return `${wrap(-copyWidth, 0, v)}px`;
        });

        const directionFactor = useRef(1);
        useAnimationFrame((t, delta) => {
            if (isMobile && !document.hidden) {
                let moveBy = directionFactor.current * baseVelocity * (delta / 1000) * 0.7;

                if (velocityFactor.get() < 0) {
                    directionFactor.current = -1;
                } else if (velocityFactor.get() > 0) {
                    directionFactor.current = 1;
                }

                moveBy += directionFactor.current * moveBy * velocityFactor.get();
                baseX.set(baseX.get() + moveBy);
            } else if (!isMobile) {
                let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

                if (velocityFactor.get() < 0) {
                    directionFactor.current = -1;
                } else if (velocityFactor.get() > 0) {
                    directionFactor.current = 1;
                }

                moveBy += directionFactor.current * moveBy * velocityFactor.get();
                baseX.set(baseX.get() + moveBy);
            }
        });

        const spans = [];
        for (let i = 0; i < (isMobile ? Math.min(numCopies, 3) : numCopies); i++) {
            spans.push(
                <span className={className} key={i} ref={i === 0 ? copyRef : null}>
                    {children}
                </span>
            );
        }

        return (
            <div className={`${parallaxClassName} parallax-container`} style={parallaxStyle}>
                <motion.div
                    className={scrollerClassName}
                    style={{
                        x,
                        ...scrollerStyle,
                        width: 'max-content' // Constrain width to content
                    }}
                >
                    {spans}
                </motion.div>
            </div>
        );
    }

    return (
        <section className="scroll-velocity-container">
            {texts.map((text, index) => (
                <VelocityText
                    key={index}
                    className={className}
                    baseVelocity={index % 2 !== 0 ? -velocity : velocity}
                    scrollContainerRef={scrollContainerRef}
                    damping={damping}
                    stiffness={stiffness}
                    numCopies={numCopies}
                    velocityMapping={velocityMapping}
                    parallaxClassName={parallaxClassName}
                    scrollerClassName={scrollerClassName}
                    parallaxStyle={parallaxStyle}
                    scrollerStyle={scrollerStyle}
                >
                    {text}&nbsp;
                </VelocityText>
            ))}
        </section>
    );
};

export default ScrollVelocity;