"use client";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
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
