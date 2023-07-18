import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { scale, slide } from "./anim";

type LinkAnimateProps = {
  title: string;
  link: string;
  index: number;
  isActive: boolean;
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
};

const LinkAnimate = ({
  title,
  link,
  isActive,
  index,
  setSelectedIndicator,
}: LinkAnimateProps) => {
  return (
    <motion.div
      className={"relative flex items-center"}
      onMouseEnter={() => {
        setSelectedIndicator(link);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={
          "absolute left-[-30px] h-[10px] w-[10px] rounded-[50%] bg-primary"
        }
      ></motion.div>
      <Link href={link}>{title}</Link>
    </motion.div>
  );
};

export default LinkAnimate;
