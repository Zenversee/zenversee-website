import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import GlobalLog from "./globalLog";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenversee",
  description:
    "Unlock the power of innovation with Zenversee, a leading software development agency. Discover our cutting-edge SaaS products and tailored marketing solutions to elevate your business. Stay tuned as we prepare to launch our website, bringing you groundbreaking technology and results-driven strategies for business success.",
  keywords: [
    "Software development agency",
    "SaaS products",
    "Tailored marketing solutions",
    "Groundbreaking technology",
    "Results-driven strategies",
    "Innovation",
    "Leading software agency",
    "Business success",
    "Cutting-edge solutions",
    "Website launch",
  ],
  metadataBase: new URL("https://www.zenversee.com/"),
  openGraph: {
    type: "website",
    url: "https://www.zenversee.com/",
    title: "Zenversee",
    images: "/thumbnail.png",
    description:
      "Unlock the power of innovation with Zenversee, a leading software development agency. Discover our cutting-edge SaaS products and tailored marketing solutions to elevate your business. Stay tuned as we prepare to launch our website, bringing you groundbreaking technology and results-driven strategies for business success.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenversee",
    description:
      "Unlock the power of innovation with Zenversee, a leading software development agency. Discover our cutting-edge SaaS products and tailored marketing solutions to elevate your business. Stay tuned as we prepare to launch our website, bringing you groundbreaking technology and results-driven strategies for business success.",
    creator: "@zenversee_",
    creatorId: "1644060363770724352",
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: "#191919",
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-[62.5%] leading-[1.25]">
      <GlobalLog />
      <body className={`${inter.className} bg-primary leading-[1]`}>
        {children}
      </body>
    </html>
  );
}
