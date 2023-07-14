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
    <motion.div className="relative z-[100]" variants={banner}>
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
    className="mx-[4px] whitespace-nowrap px-[10vw]"
    variants={disabled ? {} : banner}
    initial="initial"
    animate="animate"
  >
    {Array.from(title).map((letter, id) => (
      <motion.span
        key={id}
        className="relative inline-block whitespace-nowrap text-[10rem] font-medium tracking-[-0.8rem] md:text-[20rem] 2xl:text-[28rem]"
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
    <div className={" flex items-center overflow-hidden"}>
      <div className=" flex items-center justify-center md:w-[70%] 2xl:w-1/2">
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
        className="hidden items-center justify-center md:w-[70%] xl:flex 2xl:w-1/2"
      >
        <span className="w-[320px] xl:text-2xl 2xl:text-3xl font-medium leading-10">
          Ignite the essence of Your Brand and let&apos;s embark on an
          extraordinary journey to elevate your narrative to new heights.
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
    <div className={" justify-center text-center"}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
          delay: 1,
        }}
        className="absolute mt-[5rem] hidden 2xl:h-[160px] h-[100px] w-[100px] 2xl:w-[160px] flex-col items-center justify-center rounded-full bg-white md:left-[60px] xl:flex 2xl:left-[160px]"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
          className="mx-[2px] md:text-[15px] font-semibold md:mx-[4px] 2xl:text-[18px]"
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
          className="mx-[2px] md:text-[15px] font-semibold md:mx-[4px] 2xl:text-[18px]"
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
    <div className={` marquee  ${playMarquee && "animate"}`}>
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
