import React from "react";
import { PinContainer } from "../ui/3d-pin";
import project1 from "../../assets/projects/project2.png";
import project2 from "../../assets/projects/project3.png";
import project3 from "../../assets/projects/project5.png";
// import project4 from "../../assets/projects/project6.png";
import project5 from "../../assets/projects/project7.png";
import project6 from "../../assets/projects/project8.png";
import project7 from "../../assets/projects/project9.png";
import project8 from "../../assets/projects/project10.png";
import project9 from "../../assets/projects/project11.png";
import project10 from "../../assets/projects/project12.png";
import nextjs from "../../assets/tech/next.png";
import react from "../../assets/tech/reactjs.png";
import typescript from "../../assets/tech/typescript.png";
import javascript from "../../assets/tech/javascript.png";
import html from "../../assets/tech/html.png";
import firebase from "../../assets/tech/firebase.png";
import tailwind from "../../assets/tech/tailwind.png";
import css from "../../assets/tech/css.png";
import python from "../../assets/tech/python.png";
import convex from "../../assets/tech/convex_logo.svg";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "/meta-blog",
      link: "https://meta-blog-lemon.vercel.app/",
      header: "MetaBlog",
      image: project1,
      tech: [react, firebase, tailwind, javascript],
      description:
        "Metablog is a platform designed for sharing insightful and informative content across various topics.",
    },
    {
      title: "/moonlit",
      link: "https://moonlit-tau.vercel.app/",
      header: "Moonlit",
      image: project7,
      tech: [html, css, javascript, python],
      description:
        "A full-stack platform for seamless hotel reservations, user management, and administrative oversight with secure authentication and real-time updates.",
    },
    {
      title: "/teeceehub",
      link: "https://www.teeceehub.com/",
      header: "TeeCee Hub",
      image: project9,
      tech: [nextjs, tailwind, convex],
      description:
        "At TC Hub, Experience endless digital creativity as we empower you with innovative solutions tailored to your needs.",
    },
    {
      title: "/kingsprecisecleaning",
      link: "https://www.kingsprecisecleaning.com/",
      header: "Kings-precise cleaning",
      image: project10,
      tech: [react, tailwind],
      description:
        "Kings-precise cleaning, We offer a wide range of professional cleaning services to suit every space, ensuring a clean, hygienic, and welcoming environment.",
    },
    {
      title: "/rheem",
      link: "https://rheem.vercel.app/",
      header: "Rheem",
      image: project8,
      tech: [react, tailwind],
      description:
        "A website designed to provide users with a seamless and efficient experience in delivering high-quality, energy-efficient air conditioners at competitive prices.",
    },
    {
      title: "/luzto",
      link: "https://luzto.vercel.app/",
      header: "Luzto",
      image: project2,
      tech: [react, tailwind, firebase, javascript],
      description:
        "Luzto is a stylish, user-centered e-commerce platform focused on selling high-quality clothing.",
    },
    {
      title: "/decor-vista",
      link: "https://decor-vista-three.vercel.app/",
      header: "Decor-vista",
      image: project3,
      tech: [react, css, javascript],
      description:
        "Decor-vita is a curated e-commerce destination for stylish furniture and home interiors, offering a range of items to enhance any living space.",
    },
    {
      title: "/papyrus",
      link: "https://papyrus-ten.vercel.app/",
      header: "Papyrus",
      image: project6,
      tech: [react, tailwind],
      description:
        "Papyrus is a thoughtfully designed e-commerce store specializing in unique gift cards, present bags, and boxes.",
    },
    // {
    //   title: "/not-active",
    //   link: "/",
    //   header: "Z-vibes",
    //   image: project4,
    //   description:
    //     "This music player app is designed for seamless listening, offering a sleek interface and personalized experience.",
    // },
    {
      title: "/zek-tech",
      link: "",
      header: "Zek-tech",
      image: project5,
      tech: [nextjs, typescript, tailwind],
      description:
        "My portfolio is a showcase of my work as a developer, featuring projects across web development, e-commerce, and interactive applications.",
    },
  ];

  return (
    <div>
      <h1
        id="projects"
        className="text-center text-[40px] font-heading mb-10 text-white"
      >
        MY RECENT PROJECTS
      </h1>
      <div className="w-full flex justify-center mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 md:w-[80%] gap-[100px]">
          {projects.map((item, i) => (
            <PinContainer key={i} title={item.title} href={item.link}>
              <div className="flex gap-3 basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[21rem] ">
                <div className="flex items-center justify-between">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {item.header}
                  </h3>
                  <div className="flex items-center gap-1 !pb-2 !m-0">
                    {item.tech.map((tech, j) => (
                      <Image
                        key={j}
                        src={tech}
                        alt="tech"
                        className="w-[20px] h-[20px] object-cover"
                        priority={true}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{item.description}</span>
                </div>
                <Image
                  src={item.image}
                  alt={item.header}
                  className="w-full object-cover"
                  priority={true}
                />
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
