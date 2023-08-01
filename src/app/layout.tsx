import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import GlobalLog from "./globalLog";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenversee",
  description:
    "Unlock the power of innovation with Zenversee, a leading software development agency. Discover our cutting-edge SaaS products and tailored marketing solutions to elevate your business. Stay tuned as we prepare to launch our website, bringing you groundbreaking technology and results-driven strategies for business success.",
  keywords: [
    "Web Development Agency",
    "Website Design Services",
    "Digital Marketing Solutions",
    "SEO Services",
    "E-commerce Development",
    "Responsive Web Design",
    "Graphic Design Services",
    "Social Media Marketing",
    "Content Marketing Strategy",
    "Mobile App Development",
    "Branding and Identity",
    "User Experience (UX) Design",
    "Search Engine Optimization (SEO)",
    "Website Maintenance Services",
    "Online Marketing Agency",
    "Creative Web Solutions",
    "Conversion Rate Optimization",
    "Web Analytics",
    "Video Marketing",
    "Custom Website Development",
    "UI/UX Design Services",
    "Content Management Systems (CMS)",
    "Website Redesign Services",
    "Responsive Mobile Design",
    "Email Marketing Campaigns",
    "Landing Page Optimization",
    "Website Speed Optimization",
    "Webflow Development",
    "Logo Design Services",
    "Social Media Advertising",
    "Copywriting and Content Creation",
    "Website Security Services",
    "UI/UX Testing and Optimization",
    "App Store Optimization (ASO)",
    "Website Accessibility Services",
    "Lead Generation Strategies",
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
        <Analytics />
      </body>
    </html>
  );
}
