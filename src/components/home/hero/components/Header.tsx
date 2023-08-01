"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { trapBold } from "@zenversee/fonts";
import { usePathname } from "next/navigation";
import { menuSlide } from "./nav/anim";
import LinkAnimate from "./nav/LinkAnimate";
import Curve from "./nav/Curve";

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
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.6,
        }}
        className="hidden h-[156px] justify-center px-10 text-dark md:flex md:px-[108px]"
      >
        <div className=" flex w-full items-center justify-between md:text-2xl 2xl:text-3xl">
          <Link href="/">
            <div
              className={`${trapBold.className} text-4xl font-bold md:text-6xl`}
            >
              Zenversee
            </div>
          </Link>

          <ul className="hidden list-none items-center justify-center gap-x-[3vw] xl:flex">
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
          </ul>

          <div className="">
            <a
              className="ml-5 whitespace-nowrap border-b-2 border-none border-dark pb-[12px] font-semibold text-dark md:border-solid"
              href="https://knccspfxa0x.typeform.com/to/U4F628eG"
            >
              Let&apos;s work together
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile navbar */}
      <nav className="relative  z-50">
        <div className="mt-5 flex items-center justify-between px-10 md:hidden">
          <Link href="/">
            <div
              className={`${trapBold.className} text-4xl font-bold md:text-6xl`}
            >
              Zenversee
            </div>
          </Link>
          <div className="flex items-center gap-10">
            <div className="hidden sm:flex">
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
              onClick={() => setIsActive((prev) => !prev)}
              className="relative z-50 flex h-[56px] w-[56px] cursor-pointer flex-col items-center justify-center rounded-full bg-[#E0E0E0] xl:hidden"
            >
              <span
                className={`m-[2px] block h-[3px] w-[20px] bg-dark ${
                  isActive && "translate-y-[2px] rotate-[45deg]"
                } transition-all delay-200 ease-in-out`}
              />
              <span
                className={`m-[2px] block h-[3px] w-[20px] bg-dark ${
                  isActive && "translate-y-[-5px] rotate-[-45deg]"
                } transition-all delay-200 ease-in-out`}
              />
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className={
                "fixed right-0 top-0 flex h-screen bg-secondary text-primary xl:hidden"
              }
            >
              <div
                className={
                  "box-border flex h-full flex-col justify-between p-[100px]"
                }
              >
                <div
                  onMouseLeave={() => {
                    setSelectedIndicator(pathname);
                  }}
                  className={"mt-[50px] flex flex-col gap-9 text-5xl"}
                >
                  <div
                    className={
                      "mb-[40px] border-b border-[#9999] pb-5 text-[15px] uppercase text-[#9999]"
                    }
                  >
                    <p>Navigation</p>
                  </div>
                  {navContent.map((data, index) => {
                    return (
                      <LinkAnimate
                        key={index}
                        index={index}
                        title={data.title}
                        link={data.link}
                        isActive={selectedIndicator == data.link}
                        setSelectedIndicator={setSelectedIndicator}
                      />
                    );
                  })}
                </div>
              </div>
              <Curve />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Header;
