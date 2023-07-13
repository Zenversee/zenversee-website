import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
};

const letterAni = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        },
    },
};

const Banner = () => {
    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPlayMarquee(true);
        }, 2000);
    }, []);
    return (
        <motion.div className="banner" variants={banner}>
            <BannerRowTop title={"brand"} />
            <BannerRowCenter title={"experience"} playMarquee={playMarquee} />
            <BannerRowBottom title={"studio"} />
        </motion.div>
    );
};

interface AnimatedLettersProps {
    title: string;
    disabled?: boolean;
}

const AnimatedLetters = ({ title, disabled }: AnimatedLettersProps) => (
    <motion.span
        className="row-title"
        variants={disabled ? {} : banner}
        initial="initial"
        animate="animate"
    >
        {Array.from(title).map((letter, id) => (
            <motion.span
                key={id}
                className="row-letter"
                variants={disabled ? {} : letterAni}
            >
                {letter}
            </motion.span>
        ))}
    </motion.span>
);

interface BannerRowProps {
    title: string;
}
const BannerRowTop = ({ title }: BannerRowProps) => {
    return (
        <div className={"banner-row"}>
            <div className="row-col">
                <AnimatedLetters title={title} />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.4,
                }}
                className="row-col"
            >
                <span className="row-message">
                    Ignite the essence of Your Brand and let&apos;s embark on an
                    extraordinary journey to elevate your narrative to new
                    heights.
                </span>
            </motion.div>
        </div>
    );
};

interface BannerRowBottomProps {
    title: string;
}
const BannerRowBottom = ({ title }: BannerRowBottomProps) => {
    return (
        <div className={"banner-row center"}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1,
                    delay: 1,
                }}
                className="scroll"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 1.8,
                    }}
                >
                    scroll
                </motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 1.8,
                    }}
                >
                    down
                </motion.span>
            </motion.div>
            <AnimatedLetters title={title} />
        </div>
    );
};

interface BannerRowCenterProps {
    title: string;
    playMarquee: boolean;
}
const BannerRowCenter = ({ title, playMarquee }: BannerRowCenterProps) => {
    return (
        <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
            <motion.div
                initial={{ y: 310 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
                className="marquee__inner"
            >
                <AnimatedLetters title={title} disabled />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} disabled />
                <AnimatedLetters title={title} disabled />
            </motion.div>
        </div>
    );
};

export default Banner;
