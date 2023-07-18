"use client";

import { syne, trapBold } from "@zenversee/fonts";
import React, { useEffect, useState } from "react";

const greetingList = [
  "Hello",
  "নমস্কার",
  "नमस्कार",
  "Bonjour",
  "Здравствуйте",
  "こんにちは",
  "Hola",
  "مرحبًا",
  "Ciao",
  "வணக்கம்",
  "నమస్కారం",
];

const socialsList = [
  {
    name: "twitter",
    link: "https://twitter.com/zenversee_",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/zenversee/",
  },
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/company/zenversee/",
  },
];

const Footer = () => {
  const [currentGreeting, setCurrentGreeting] = useState(greetingList[0]);
  const [ISTTime, setISTTime] = useState('');
  const [currentTime,  setCurrentTime] = useState<number>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = greetingList.indexOf(currentGreeting);
      const nextIndex = (currentIndex + 1) % greetingList.length;
      setCurrentGreeting(greetingList[nextIndex]);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  });



  useEffect(() => {
    const calculateISTTime = () => {
      const currentTime = new Date();
      setCurrentTime(currentTime.getUTCFullYear());
      const currentOffset = currentTime.getTimezoneOffset();
      const ISTOffset = 330; // IST offset UTC +5:30

      const ISTTime = new Date(
        currentTime.getTime() + (ISTOffset + currentOffset) * 60000
      );

      return ISTTime.toLocaleTimeString();
    };

    const interval = setInterval(() => {
      const timeString = calculateISTTime();
      setISTTime(timeString);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative h-[130vh] bg-secondary px-[4rem] py-[10rem] text-primary fold:h-[108vh] md:h-[80vh] md:px-[10rem] lg:h-[100vh] xl:h-[80vh]">
      {/* top part */}
      <div className="grid justify-between gap-y-[10vh] md:flex">
        <div>
          <div className="grid gap-10">
            <div className="flex items-center gap-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="26.5" stroke="#F0EFF1" />
                <path
                  d="M43.845 27C43.845 34.3745 41.9239 41.0276 38.8443 45.8216C35.7612 50.6211 31.5622 53.5 27.0006 53.5C22.4391 53.5 18.24 50.6211 15.157 45.8216C12.0774 41.0276 10.1562 34.3745 10.1562 27C10.1562 19.6255 12.0774 12.9724 15.157 8.17836C18.24 3.37895 22.4391 0.5 27.0006 0.5C31.5622 0.5 35.7612 3.37895 38.8443 8.17836C41.9239 12.9724 43.845 19.6255 43.845 27Z"
                  stroke="#F0EFF1"
                />
                <path
                  d="M32.4009 27C32.4009 34.431 31.7423 41.1435 30.6842 45.9851C30.1543 48.41 29.5298 50.3385 28.8529 51.6487C28.5141 52.3044 28.1746 52.7804 27.8477 53.0865C27.5232 53.3903 27.2418 53.5 27.0003 53.5C26.7588 53.5 26.4773 53.3903 26.1528 53.0865C25.8259 52.7804 25.4865 52.3044 25.1477 51.6487C24.4707 50.3385 23.8463 48.41 23.3163 45.9851C22.2582 41.1435 21.5996 34.431 21.5996 27C21.5996 19.569 22.2582 12.8565 23.3163 8.01487C23.8463 5.59 24.4707 3.66146 25.1477 2.35131C25.4865 1.69561 25.8259 1.21964 26.1528 0.913525C26.4773 0.60971 26.7588 0.5 27.0003 0.5C27.2418 0.5 27.5232 0.60971 27.8477 0.913525C28.1746 1.21964 28.5141 1.69561 28.8529 2.35131C29.5298 3.66146 30.1543 5.59 30.6842 8.01487C31.7423 12.8565 32.4009 19.569 32.4009 27Z"
                  stroke="#F0EFF1"
                />
                <path
                  d="M27 10.156C34.3745 10.156 41.0276 12.0771 45.8216 15.1567C50.6211 18.2398 53.5 22.4388 53.5 27.0004C53.5 31.5619 50.6211 35.7609 45.8216 38.844C41.0276 41.9236 34.3745 43.8447 27 43.8447C19.6255 43.8447 12.9724 41.9236 8.17835 38.844C3.37895 35.7609 0.499999 31.5619 0.499999 27.0004C0.499999 22.4388 3.37895 18.2398 8.17835 15.1567C12.9724 12.0771 19.6255 10.156 27 10.156Z"
                  stroke="#F0EFF1"
                />
                <path
                  d="M27 21.5991C34.431 21.5991 41.1435 22.2577 45.9851 23.3158C48.41 23.8457 50.3385 24.4702 51.6487 25.1471C52.3044 25.4859 52.7804 25.8254 53.0865 26.1523C53.3903 26.4768 53.5 26.7582 53.5 26.9997C53.5 27.2412 53.3903 27.5227 53.0865 27.8472C52.7804 28.1741 52.3044 28.5135 51.6487 28.8523C50.3385 29.5293 48.41 30.1537 45.9851 30.6837C41.1435 31.7418 34.431 32.4004 27 32.4004C19.569 32.4004 12.8565 31.7418 8.01487 30.6837C5.59 30.1537 3.66146 29.5293 2.35131 28.8523C1.69561 28.5135 1.21964 28.1741 0.913524 27.8472C0.60971 27.5227 0.5 27.2412 0.5 26.9997C0.5 26.7582 0.60971 26.4768 0.913524 26.1523C1.21964 25.8254 1.69561 25.4859 2.35131 25.1471C3.66146 24.4702 5.58999 23.8457 8.01487 23.3158C12.8565 22.2577 19.569 21.5991 27 21.5991Z"
                  stroke="#F0EFF1"
                />
              </svg>
              <p
                className={`text-[2rem] font-bold md:w-[385px] md:text-[3rem]`}
              >
                {currentGreeting === "مرحبًا" && "!"} {currentGreeting}{" "}
                {currentGreeting != "مرحبًا" && "!"}
              </p>
            </div>
            <h3 className={`${syne.className} text-[4rem]  md:text-[6rem]`}>
              Have an idea? Take a seat.
            </h3>
          </div>

          <div className="mt-20 grid gap-[3rem] md:flex">
            <a
              href="https://knccspfxa0x.typeform.com/to/U4F628eG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`${syne.className} flex items-center gap-x-5 rounded-full border px-[1.5rem] py-[1rem] text-xl transition-colors hover:bg-[#6D6D6D]/30 md:text-3xl`}
              >
                Submit Idea
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                >
                  <path
                    d="M1.13086 9.30922L9.74836 0.692383M9.74836 0.692383L2.02676 0.692384M9.74836 0.692383V8.41399"
                    stroke="#f0eff1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </a>

            <a href="mailto:contact@zenversee.com">
              <button
                className={`${syne.className} flex items-center gap-x-5 rounded-full border px-[1.5rem] py-[1rem] text-xl transition-colors hover:bg-[#6D6D6D]/30 md:text-3xl`}
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                >
                  <path
                    d="M1.13086 9.30922L9.74836 0.692383M9.74836 0.692383L2.02676 0.692384M9.74836 0.692383V8.41399"
                    stroke="#f0eff1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-10 xl:pr-[20vw]">
          {socialsList.map((social, index) => {
            return (
              <a
                target="_blank"
                rel="noreferrer"
                className={`textContainer relative flex items-center  gap-4 uppercase transition-all`}
                key={index}
                href={social.link}
              >
                <p className="primary hover:translate-y-[-100%] hover:opacity-0">
                  {social.name}
                </p>
                <p className="secondary absolute top-0 text-[#6D6D6D] hover:opacity-[1]">
                  {social.name}
                </p>

                <svg
                  className={`secondary absolute ${
                    social.name === "Instagram" ? "right-0" : "right-10"
                  } hover:opacity-[1]`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <path
                    d="M0.923828 8.05917L7.96303 1.02051M7.96303 1.02051L1.65564 1.02051M7.96303 1.02051V7.3279"
                    stroke="#6D6D6D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className="primary hover:translate-y-[-100%] hover:opacity-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <path
                    d="M0.923828 8.05917L7.96303 1.02051M7.96303 1.02051L1.65564 1.02051M7.96303 1.02051V7.3279"
                    stroke="#FFFCF1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            );
          })}
        </div>
      </div>

      {/* bottom part */}
      <div className="absolute bottom-0  w-[80vw] xl:w-[83vw] 2xl:w-[90vw]">
        <div className="h-[2px] w-full bg-primary" />
        <div className="flex items-center justify-between py-[5rem] md:text-4xl">
          <p className={`${syne.className}`}>
            © {currentTime}
          </p>
          <div className="flex gap-6">
            <div className="relative hidden items-center sm:flex">
              <div className="aspect-square w-4 animate-ping rounded-full bg-green-500/25" />
              <div className="absolute aspect-square h-2 w-2 translate-x-[2.5px] translate-y-[-0.4px] rounded-full bg-green-500" />
            </div>
            <p className={`${syne.className} px-2 md:text-2xl`}>
              Local Time - {ISTTime} (IST)
            </p>
          </div>
          <p className={`${trapBold.className}`}>Zenversee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
