import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Link from "next/link";
import { GridBackgroundDemo } from "../ui/background-grid-lines";
import { IoIosCloudDownload } from "react-icons/io";

export default function Banner() {
  const words = [
    { text: "Creating" },
    { text: "Cutting-edge" },
    { text: "Tech, " },
    { text: "Crafting" },
    { text: "Ideas" },
    { text: "into" },
    { text: "Engaging " },
    { text: "Experiences", className: "text-blue-500" },
  ];

  return (
    <div className="relative bg-background w-full h-[400px] md:h-[500px]">
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center gap-10 w-[80%]">
          <TypewriterEffect words={words} />
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="w-fit block md:hidden bg-gradient-to-r from-blue-500 to-white p-[1px] rounded-full text-sm cursor-pointer"
            >
              <div className="bg-black py-2 px-7 rounded-[50px]">
                Get In Touch
              </div>
            </Link>
            <a className="flex items-center justify-center gap-2 py-2 px-5 rounded-full text-sm border border-white w-[130px]" href="/Zek-Tech-Resume.pdf" download>
              <p>Resume</p> <IoIosCloudDownload className="translate-y-[2px]" />
            </a>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <GridBackgroundDemo />
    </div>
  );
}
