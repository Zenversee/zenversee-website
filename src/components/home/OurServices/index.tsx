"use client";

import { syne, trapBold } from "@zenversee/fonts";
import Image from "next/image";
import React, { useState } from "react";

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

    const [state, setState] = useState<number>(0);

    return (
        <section className="bg-[#191919] text-[#F0EFF1] px-[7%] py-[20rem] flex">
            <table className={`${syne.className} text-[3.5em] border-solid `}>
                <tbody className="">
                    <tr className="flex">
                        <td
                            className={`border p-16 cursor-pointer flex hover:rounded-tl-[5rem] justify-center transition-all hover:bg-[#F0EFF1] hover:text-[5rem] hover:text-black items-center border-solid border-[#F0EFF1]`}
                            onMouseEnter={() => setState(1)}
                            onMouseLeave={() => setState(0)}
                            style={{
                                width: `${boxSizeData[state][0][0]}rem`,
                                height: `${boxSizeData[state][0][1]}rem`,
                            }}
                        >
                            <div className="text-center">Design</div>
                        </td>
                        <td
                            className={`border p-16 cursor-pointer flex hover:rounded-tr-[5rem] justify-center transition-all hover:text-[5rem] hover:bg-[#F0EFF1] hover:text-black  items-center border-solid border-[#F0EFF1]`}
                            onMouseEnter={() => setState(2)}
                            onMouseLeave={() => setState(0)}
                            style={{
                                width: `${boxSizeData[state][1][0]}rem`,
                                height: `${boxSizeData[state][1][1]}rem`,
                            }}
                        >
                            <div className="text-center">Tech</div>
                        </td>
                    </tr>
                    <tr className="flex">
                        <td
                            className={`cursor-[url(/cursor.cur),_pointer] border p-16 flex hover:rounded-bl-[5rem] justify-center hover:text-[5rem] transition-all hover:bg-[#F0EFF1] hover:text-black  items-center border-solid border-[#F0EFF1]`}
                            onMouseEnter={() => setState(3)}
                            onMouseLeave={() => setState(0)}
                            style={{
                                width: `${boxSizeData[state][2][0]}rem`,
                                height: `${boxSizeData[state][2][1]}rem`,
                            }}
                        >
                            <div className="text-center">Marketing</div>
                        </td>
                        <td
                            className={`border p-16 cursor-pointer flex hover:rounded-br-[5rem] justify-center transition-all hover:text-[5rem] hover:bg-[#F0EFF1] hover:text-black  items-center border-solid border-[#F0EFF1]`}
                            onMouseEnter={() => setState(4)}
                            onMouseLeave={() => setState(0)}
                            style={{
                                width: `${boxSizeData[state][3][0]}rem`,
                                height: `${boxSizeData[state][3][1]}rem`,
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
                <p className="max-w-[69rem] text-3xl mt-20">
                    {serviceData[state].description}
                </p>
                <div>
                    {serviceData[state].tags?.map((tag, id) => (
                        <span
                            key={id}
                            className="text-3xl bg-[#F0EFF1]/10 py-2 px-4 rounded-full border-[#F0EFF1] inline-block mr-5 mt-5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
