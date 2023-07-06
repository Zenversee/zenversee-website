// "use client";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import React, { useEffect } from "react";
// import { motion } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);
// const RightLeftScroll = () => {
//     useEffect(() => {
//         const sections = gsap.utils.toArray(".panel");
//         const container = document.querySelector(".container") as HTMLElement;

//         gsap.to(sections, {
//             xPercent: -100 * (sections.length - 1),
//             ease: "none",
//             scrollTrigger: {
//                 trigger: container,
//                 pin: true,
//                 invalidateOnRefresh: true,
//                 anticipatePin: 1,
//                 scrub: 1.23,
//                 end: () => `+=${container.offsetWidth}`,
//             },
//         });
//     }, []);

//     return (
//         // <motion.div className="carousel">
//         //     <motion.div
//         //         drag="x"
//         //         dragConstraints={{ right: 0, left: -1100 }}
//         //         dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
//         //     >
// 		<div className="relative overflow-x-hidden overflow-y-visible">
// 			<div className="container flex flex-wrap  nowrap w-screen h-screen">
//                     <section className="panel flex items-center justify-center bg-gray-900 text-black w-screen h-full">
//                         <h1>SCROLL DOWN</h1>
//                     </section>
//                     <section className="panel flex items-center justify-center bg-gray-900 text-black w-screen h-full">
//                         <h2>ONE</h2>
//                     </section>
//                     <section className="panel flex items-center justify-center bg-gray-900 text-black w-screen h-full">
//                         <h2>TWO</h2>
//                     </section>
//                     <section className="panel flex items-center justify-center bg-gray-900 text-black w-screen h-full">
//                         <h2>THREE</h2>
//                     </section>
//                 </div>
// 		</div>

//         //     </motion.div>
//         // </motion.div>
//     );
// };

// export default RightLeftScroll;

"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = (): JSX.Element => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        const sections = gsap.utils.toArray(sectionsRef.current);

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: true,
                snap: {
                    snapTo: 1 / (sections.length - 1),
                },
            },
        });
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            <div ref={containerRef} className="w-full h-full flex">
                <section
                    ref={(el) => (sectionsRef.current[0] = el!)}
                    className="flex-shrink-0 w-screen h-full bg-blue-500 flex items-center justify-center"
                >
                    <h1 className="text-white text-4xl font-bold">Section 1</h1>
                </section>
                <section
                    ref={(el) => (sectionsRef.current[1] = el!)}
                    className="flex-shrink-0 w-screen h-full bg-red-500 flex items-center justify-center"
                >
                    <h1 className="text-white text-4xl font-bold">Section 2</h1>
                </section>
                <section
                    ref={(el) => (sectionsRef.current[2] = el!)}
                    className="flex-shrink-0 w-screen h-full bg-green-500 flex items-center justify-center"
                >
                    <h1 className="text-white text-4xl font-bold">Section 3</h1>
                </section>
                <section
                    ref={(el) => (sectionsRef.current[3] = el!)}
                    className="flex-shrink-0 w-screen h-full bg-yellow-500 flex items-center justify-center"
                >
                    <h1 className="text-white text-4xl font-bold">Section 4</h1>
                </section>
            </div>
        </div>
    );
};

export default HorizontalScroll;
