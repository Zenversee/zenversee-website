import { Syne } from "next/font/google";
import localFont from "next/font/local";

export const trapBold = localFont({
    src: "./Trap-Bold.otf",
    display: "swap",
});

export const syne = Syne({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["system-ui", "sans-serif"],
});
