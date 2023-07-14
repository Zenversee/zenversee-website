"use client";

import { motion, AnimateSharedLayout } from "framer-motion";
import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

import "./sass/main.scss";

const Hero = () => {
    return (
        <AnimateSharedLayout type="crossfade">
            {/* <AnimatePresence> */}

            <>
                <Header />
                <Banner />
            </>
            {/* </AnimatePresence> */}
        </AnimateSharedLayout>
    );
};

export default Hero;
