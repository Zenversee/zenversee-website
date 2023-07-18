"use client";
// import styles from "./page.module.css";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { syne } from "@zenversee/fonts";

const phrase: String =
    "We, at Zenversee combine design, tech,and marketing to turn your bold ideas into brands. We specialize in providing web development and social media marketing services to startups, businesses, and influencers. With our expertise, we help to bring your project to the next level be it on VR,AR, metaverse or something else.";

export default function FadeinText() {
    let refs = useRef<HTMLSpanElement[]>([]);
    const body = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        createAnimation();
    }, []);

    const createAnimation = () => {
        gsap.to(refs.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: `top`,
                end: `+=${window.innerHeight / 1.7}`, //1.5
            },
            opacity: 1,
            ease: "none",
            stagger: 0.1,
        });
    };

    const splitWords = (phrase: String) => {
        let body: any = [];
        phrase.split(" ").forEach((word, i) => {
            const letters = splitLetters(word);
            body.push(
                <p
                    className="text-[4vw] m-0 ml-[1.5vw] font-bold"
                    key={word + "_" + i}
                >
                    {letters}
                </p>
            );
        });
        return body;
    };

    const splitLetters = (word: String) => {
        let letters: React.ReactNode[] = [];
        word.split("").forEach((letter, i) => {
            letters.push(
                <span
                    key={letter + "_" + i}
                    className="opacity-[0.2] text-[8vw] xl:text-[4vw]"
                    ref={(el) => {
                        if (el) refs.current.push(el);
                    }}
                >
                    {letter}
                </span>
            );
        });
        return letters;
    };

    return (
        <section
            ref={container}
            className={` flex h-[90vh] cursor-default md:h-[100vh] items-end justify-center md:mb-[30rem] text-black `}
        >
            <div ref={body} className={`w-[90%] flex flex-wrap`}>
                {splitWords(phrase)}
            </div>
        </section>
    );
}
