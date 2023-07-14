import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { trapBold } from "@zenversee/fonts";

const navContent = [
  {
    title: "Design",
    link: "/design",
  },
  {
    title: "Strategy",
    link: "/strategy",
  },
  {
    title: "Cases",
    link: "/cases",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Why work with us?",
    link: "/why",
  },
];

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className=" flex h-[156px] justify-center px-10 md:px-[108px] text-dark"
    >
      <div className=" flex w-full items-center justify-between md:text-2xl 2xl:text-3xl">
        <Link href="/">
          <div
            className={`${trapBold.className} text-4xl font-bold md:text-6xl`}
          >
            Zenversee
          </div>
        </Link>

        <nav className="hidden list-none items-center justify-center gap-x-[3vw] xl:flex">
          {navContent.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className="whitespace-nowrap font-semibold text-dark"
                  href={item.link}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </nav>
        <div className="flex items-center gap-10">
          <div className="xl:flex-1">
            <a
              className="ml-5 whitespace-nowrap border-b-2 border-none border-dark pb-[12px] font-semibold text-dark md:border-solid"
              href="https://knccspfxa0x.typeform.com/to/U4F628eG"
            >
              Let&apos;s work together
            </a>
          </div>
          <div
            style={{
              transition: "0.2s cubic-bezier(0.215, 0.61, 0.355, 1)",
            }}
            className="hover:bg-[#E0E0E0] flex h-[56px] w-[56px] cursor-pointer flex-col items-center justify-center rounded-full xl:hidden"
          >
            <span className="m-[2px] block h-[3px] w-[20px] bg-dark" />
            <span className="m-[2px] block h-[3px] w-[20px] bg-dark" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
