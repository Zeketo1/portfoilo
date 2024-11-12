import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Logo from "@/common/Logo";
import { HoverBorderGradient } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zek Tech Portfoilo",
  description: "I'm a frontend web developer",
};

type Location = {
  name: string;
  position: string;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routes: Location[] = [
    { name: "About", position: "/" },
    { name: "Stack", position: "/about" },
    { name: "Projects", position: "/projects" },
  ];

  // const position = (pos: number): void => {
  //   window.scrollTo({ top: pos, behavior: "smooth" });
  // };

  // console.log(window.scrollY)

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../assets/logo2.png" />
        <meta property="og:title" content="Zek Tech" />
        <meta
          property="og:description"
          content="My portfolio is a showcase of my work as a developer, featuring projects across web development, e-commerce, and interactive applications."
        />
        <meta property="og:image" content="../assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-text`}
      >
        <div className="flex items-center justify-between py-4 px-14 sticky top-0 right-0 glass font-text z-[100]">
          <div className="flex gap-8 items-center">
            <Logo style="h-12 w-16 mr-5" />
            {routes.map((item, i) => (
              <div className="cursor-pointer" key={i}>
                {item.name}
              </div>
            ))}
          </div>
          <Link className="hidden md:block" href="/contact">
            <HoverBorderGradient>Get In Touch</HoverBorderGradient>
          </Link>
        </div>
        {children}
        <div>
          <div className="flex justify-center w-full py-7">
            <div className="w-full md:w-[80%] flex justify-between px-10">
              <div>
                Copyright &copy; 2024{" "}
                <span className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
                  IKORO FRANCIS
                </span>{" "}
              </div>
              <div className="flex gap-7">
                <Link href="https://github.com/Zeketo1">
                  <FaGithub className="text-[25px]" />
                </Link>
                <Link href="https://wa.me/qr/YB2OLDP33P3UF1">
                  <FaWhatsapp className="text-[25px]" />
                </Link>
                <Link href="https://x.com/ikorofrancis1?t=e60u2J_EbEekrphWLDmCuA&s=08">
                  <FaXTwitter className="text-[25px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
