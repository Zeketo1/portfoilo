import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import React from "react";
import Me from "../../assets/me.png";
import { FaGithub, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { CiLinkedin, CiLocationOn } from "react-icons/ci";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "You can reach out to me through these.",
  openGraph: {
    url: "https://zek-tech.vercel.app/contact",
  },
};

export default function Contact() {
  return (
    <div className="relative h-screen w-full flex justify-center mb-10">
      <StarsBackground />
      <ShootingStars />
      <div className="relative flex flex-col items-center w-[90%] md:w-[80%] xl:w-[60%]">
        <div className="h-[10%] md:h-[18%]"></div>
        <Image
          width={500}
          height={500}
          priority={true}
          quality={100}
          src={Me}
          alt="Me"
          className="h-[150px] w-[150px] xl:h-[200px] xl:w-[200px] object-cover rounded-full absolute"
        />
        <div className="flex flex-col gap-10 h-[70%] md:h-[72%] w-[90%] md:w-[80%] xl:w-[60%] border border-white rounded-[100px_0_100px_0] py-20 px-10">
          <div className="flex items-center gap-5 mt-5">
            <FaPhone className="text-[18px] rotate-90 text-blue-500" />
            <div>
              <p className="opacity-80 text-xs bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
                Phone
              </p>
              <a
                href="tel:+2348134240564"
                className="text-[14px] font-heading underline"
              >{`+2348134240564`}</a>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <MdOutlineEmail className="text-[19px] text-blue-500" />
            <div>
              <p className="opacity-80 text-xs bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
                Gmail
              </p>
              <a
                href="mailto:ikorofrancis24@gmail.com"
                className="text-[14px] font-heading underline"
              >{`ikorofrancis24@gmail.com`}</a>
            </div>
          </div>
          <div className="flex items-center gap-5 mb-7">
            <CiLocationOn className="text-[18px] text-blue-500" />
            <div>
              <p className="opacity-80 text-xs bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
                Location
              </p>
              <p className="text-[14px]">{`Enugu, Nigeria`}</p>
            </div>
          </div>
          <div className="flex justify-center gap-10">
            <Link href="https://github.com/Zeketo1" target="_blank">
              <FaGithub className="text-[25px]" />
            </Link>
            <Link href="https://wa.me/2348134240564" target="_blank">
              <FaWhatsapp className="text-[25px]" />
            </Link>
            <Link
              href="https://x.com/ikorofrancis1?t=e60u2J_EbEekrphWLDmCuA&s=08"
              target="_blank"
            >
              <FaXTwitter className="text-[25px]" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ikoro-francis-3341a9338/"
              target="_blank"
            >
              <CiLinkedin className="text-[25px]" />
            </Link>
          </div>
        </div>
        <div className="h-[20%] md:h-[10%]"></div>
      </div>
    </div>
  );
}
