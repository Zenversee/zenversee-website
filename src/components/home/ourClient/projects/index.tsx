"use client";
import React, { SetStateAction } from "react";
import { syne } from "@zenversee/fonts";
import Link from "next/link";

type ProjectProps = {
    index: number;
    title: string;
    setModal: React.Dispatch<
        SetStateAction<{ active: boolean; index: number }>
    >;
    link: string;
};

export default function Project({ index, title, link, setModal }: ProjectProps) {
    return (
        <a
            href={link}
            // target="_blank"
            // rel="noopener noreferrer"
            onMouseEnter={() => {
                setModal({ active: true, index });
            }}
            onMouseLeave={() => {
                setModal({ active: false, index });
            }}
            style={{ transition: "all 0.2s" }}
            className={`flex flex-col md:flex-row w-full justify-between items-center px-[50px] py-[100px] border-solid border-t border-[#191919] cursor-pointer last-of-type:border-b last-of-type:border-[#191919] hover:opacity-50`}
        >
            <h2
                className={`${syne.className} hover:translate-x-[-10px] text-[60px] m-0 font-normal`}
                style={{ transition: "all 0.4s" }}
            >
                {title}
            </h2>
            <p className="font-light text-2xl" style={{ transition: "all 0.4s" }}>
                Design & Development
            </p>
        </a>
    );
}
