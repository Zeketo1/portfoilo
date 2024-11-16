import React from "react";
import { PinContainer } from "../ui/3d-pin";
import project1 from "../../assets/projects/project2.png";
import project2 from "../../assets/projects/project3.png";
import project3 from "../../assets/projects/project5.png";
import project4 from "../../assets/projects/project6.png";
import project5 from "../../assets/projects/project7.png";
import project6 from "../../assets/projects/project8.png";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "/meta-blog",
      link: "https://meta-blog-lemon.vercel.app/",
      header: "MetaBlog",
      image: project1,
      description:
        "Metablog is a platform designed for sharing insightful and informative content across various topics.",
    },
    {
      title: "/luzto",
      link: "https://luzto.vercel.app/",
      header: "Luzto",
      image: project2,
      description:
        "Luzto is a stylish, user-centered e-commerce platform focused on selling high-quality clothing.",
    },
    {
      title: "/decor-vista",
      link: "https://decor-vista-three.vercel.app/",
      header: "Decor-vista",
      image: project3,
      description:
        "Decor-vita is a curated e-commerce destination for stylish furniture and home interiors, offering a range of items to enhance any living space.",
    },
    {
      title: "/papyrus",
      link: "https://papyrus-ten.vercel.app/",
      header: "Papyrus",
      image: project6,
      description:
        "Papyrus is a thoughtfully designed e-commerce store specializing in unique gift cards, present bags, and boxes.",
    },
    {
      title: "/not-active",
      link: "/",
      header: "Z-vibes",
      image: project4,
      description:
        "This music player app is designed for seamless listening, offering a sleek interface and personalized experience.",
    },
    {
      title: "/zek-tech",
      link: "",
      header: "Zek-tech",
      image: project5,
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
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {item.header}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{item.description}</span>
                </div>
                <Image
                  src={item.image}
                  alt={item.header}
                  className="w-full object-cover"
                />
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
