import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { trapBold } from "@zenversee/fonts";

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
            className="header"
        >
            <div className="header-inner">
                <Link href="/">
                    <div className={`${trapBold.className} logo`}>
                        Zenversee
                    </div>
                </Link>

                <nav className="nav">
                    <li>
                        <a href="/design">Design</a>
                    </li>
                    <li>
                        <a href="/strategy">Strategy</a>
                    </li>
                    <li>
                        <a href="/cases">Cases</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/why">Why work with us?</a>
                    </li>
                </nav>
                <div className="contact">
                    <a href="https://knccspfxa0x.typeform.com/to/U4F628eG">
                        Let&apos;s work together
                    </a>
                </div>
                <div className="hamburger-menu h-[56px] w-[56px] rounded-full flex items-center justify-center flex-col cursor-pointer">
                    <span className="w-[20px] h-[3px] bg-black block m-[2px]" />
                    <span className="w-[20px] h-[3px] bg-black block m-[2px]" />
                </div>
            </div>
        </motion.div>
    );
};

export default Header;
