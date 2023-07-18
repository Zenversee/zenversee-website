"use client";

import { syne, trapBold } from "@zenversee/fonts";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "./modal";

const OurServices = () => {
  const boxSizeData = [
    // default
    [
      [40, 40],
      [40, 40],
      [40, 40],
      [40, 40],
    ],
    // state 1
    [
      [60, 60],
      [20, 60],
      [60, 20],
      [20, 20],
    ],
    // state 2
    [
      [20, 60],
      [60, 60],
      [20, 20],
      [60, 20],
    ],
    // state 3
    [
      [60, 20],
      [20, 20],
      [60, 60],
      [20, 60],
    ],
    // state 4
    [
      [20, 20],
      [60, 20],
      [20, 60],
      [60, 60],
    ],
  ];

  const serviceData = [
    // default
    {
      title: "Shape your Brand and It's Future With Zenversee.",
      description:
        "We are a team of passionate working professionals, helping brands reshaping their idenity. We provide tech, design, marketing, management and other quality services to brands for them to be ever shining. Check all our services, stacks and tools by hovering over your desired field on the left side.",
    },
    {
      title: "Design Services",
      description:
        "We are a team of passionate designers, developers and marketers who are committed to helping your business grow.",
      tags: [
        "UI/UX Design",
        "Graphic Design",
        "2d/3d",
        "Logo Design",
        "Illustration",
        "Animation",
        "Branding & Packaging",
      ],
    },
    {
      title: "Tech Services",
      description:
        "We are a team of passionate designers, developers and marketers who are committed to helping your business grow.",
      tags: [
        "Web Development",
        "iOS/Android Development",
        "Desktop Development",
        "Next.js",
        "Node.js",
        "GSAP",
        "Three.js",
        "Perfomance Optimization",
        "SEO",
        "E-commerce",
        "CMS",
        "API",
        "Ar/VR",
      ],
    },
    {
      title: "Marketing Services",
      description:
        "We are a team of passionate designers, developers and marketers who are committed to helping your business grow.",
      tags: [
        "Digital marketing",
        "Social media management",
        "Content marketing",
        "Blogs",
        "Video Editing",
        "Advertising",
        "Growth Hacking",
      ],
    },
    {
      title: "Other Services",
      description:
        "We are a team of passionate designers, developers and marketers who are committed to helping your business grow.",
      tags: ["Video Editing", "Management", "Consultancy"],
    },
  ];

  // set state for box size
  const [state, setState] = useState<number>(0);

  const [isMousein, setIsMousein] = useState<boolean>(false);

  return (
    <>
      <section
        onMouseEnter={() => setIsMousein(true)}
        onMouseLeave={() => setIsMousein(false)}
        className="hidden lg:flex bg-[#191919] px-[7%] py-[20rem] text-[#F0EFF1] hover:cursor-none"
      >
        <table className={`${syne.className} border-solid text-[3.5em] `}>
          <tbody className="">
            <tr className="flex">
              <td
                className={`flex cursor-none items-center justify-center border border-solid border-[#F0EFF1] p-16 transition-all hover:rounded-tl-[5rem] hover:bg-[#F0EFF1] hover:text-[5rem] hover:text-black`}
                onMouseEnter={() => setState(1)}
                onMouseLeave={() => setState(0)}
                style={{
                  width: `${boxSizeData[state][0][0]}vh`,
                  height: `${boxSizeData[state][0][1]}vh`,
                }}
              >
                <div className="text-center">Design</div>
              </td>
              <td
                className={`flex cursor-none items-center justify-center border border-solid border-[#F0EFF1] p-16 transition-all hover:rounded-tr-[5rem]  hover:bg-[#F0EFF1] hover:text-[5rem] hover:text-black`}
                onMouseEnter={() => setState(2)}
                onMouseLeave={() => setState(0)}
                style={{
                  width: `${boxSizeData[state][1][0]}vh`,
                  height: `${boxSizeData[state][1][1]}vh`,
                }}
              >
                <div className="text-center">Tech</div>
              </td>
            </tr>
            <tr className="flex">
              <td
                className={`flex cursor-none items-center justify-center border border-solid border-[#F0EFF1] p-16 transition-all hover:rounded-bl-[5rem]  hover:bg-[#F0EFF1] hover:text-[5rem] hover:text-black`}
                onMouseEnter={() => setState(3)}
                onMouseLeave={() => setState(0)}
                style={{
                  width: `${boxSizeData[state][2][0]}vh`,
                  height: `${boxSizeData[state][2][1]}vh`,
                }}
              >
                <div className="text-center">Marketing</div>
              </td>
              <td
                className={`flex cursor-none items-center justify-center border border-solid border-[#F0EFF1] p-16 transition-all hover:rounded-br-[5rem]  hover:bg-[#F0EFF1] hover:text-[5rem] hover:text-black`}
                onMouseEnter={() => setState(4)}
                onMouseLeave={() => setState(0)}
                style={{
                  width: `${boxSizeData[state][3][0]}vh`,
                  height: `${boxSizeData[state][3][1]}vh`,
                }}
              >
                <div className="text-center">Others</div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="ml-10">
          <h2 className={`${trapBold.className}  text-[5em]`}>
            {serviceData[state].title}
          </h2>
          <p className="mt-20 max-w-[69rem] text-3xl">
            {serviceData[state].description}
          </p>
          <div>
            {serviceData[state].tags?.map((tag, id) => (
              <span
                key={id}
                className="mr-5 mt-5 inline-block rounded-full border-[#F0EFF1] bg-[#F0EFF1]/10 px-4 py-2 text-3xl"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:flex">
          <Modal active={isMousein} currentBox={state} />
        </div>
      </section>
    </>
  );
};

export default OurServices;
