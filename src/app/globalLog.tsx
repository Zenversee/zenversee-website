"use client";
import React from "react";

const GlobalLog = () => {
  return (
    <>
      {console.log(
        "%cMade with ❤️ by https://zenversee.com",
        "color: #D9D9D9; font-size: 16px; background: #101010; padding: 10px;"
      )}
    </>
  );
};

export default GlobalLog;
