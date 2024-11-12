import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Logo from "@/common/Logo";
import { HoverBorderGradient } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-text`}
      >
        <div className="flex items-center justify-between py-4 px-14 sticky top-0 right-0 glass font-text z-[100]">
          <div className="flex gap-8 items-center">
            <Logo style="h-12 w-16 mr-5" />
            {routes.map((item, i) => (
              <div className="cursor-pointer" key={i}>{item.name}</div>
            ))}
          </div>
          <Link className="hidden md:block" href="/about">
            <HoverBorderGradient>Get In Touch</HoverBorderGradient>
          </Link>
        </div>
        {children}
        <div>
          <div className="flex flex-col py-10 items-center text-center">
            <h1 className="text-center text-[40px] font-heading mb-10 bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
              Looking to elevate your digital presence?
            </h1>
            <p className="opacity-90 mb-7">
              Let&apos;s connect and explore how I can help bring your goals to
              life. Reach out today, <br /> and let’s get started on creating
              something exceptional together!
            </p>
            <div className="bg-gradient-to-r from-blue-500 to-white p-[1px] rounded-[50px] cursor-pointer">
              <div className="bg-black py-4 px-10 rounded-[50px]">
                Get In Touch
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full py-7">
            <div className="w-full md:w-[80%] flex justify-between">
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
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
