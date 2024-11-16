import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Link from "next/link";
import { GridBackgroundDemo } from "../ui/background-grid-lines";

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
          <Link
            href="/contact"
            className="w-fit block md:hidden bg-gradient-to-r from-blue-500 to-white p-[1px] rounded-[50px] cursor-pointer"
          >
            <div className="bg-black py-4 px-10 rounded-[50px]">
              Get In Touch
            </div>
          </Link>
        </div>
      </BackgroundBeamsWithCollision>
      <GridBackgroundDemo />
    </div>
  );
}
