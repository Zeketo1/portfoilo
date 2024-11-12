import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";
import { GridBackgroundDemo } from "@/components/ui/background-grid-lines";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import research1 from "../assets/homepage/research1.png";
import research2 from "../assets/homepage/research2.png";
import research3 from "../assets/homepage/research3.png";
import research4 from "../assets/homepage/research4.png";
import research5 from "../assets/homepage/research5.png";
import research6 from "../assets/homepage/research6.png";
import research7 from "../assets/homepage/research7.png";
import research8 from "../assets/homepage/research8.png";
import project1 from "../assets/projects/project2.png";
import project2 from "../assets/projects/project3.png";
import project3 from "../assets/projects/project5.png";
import project4 from "../assets/projects/project6.png";
import project5 from "../assets/projects/project7.png";
import project6 from "../assets/projects/project8.png";
import stack1 from "../assets/stack/html.png";
import stack2 from "../assets/stack/css.png";
import stack3 from "../assets/stack/javascript.png";
import stack4 from "../assets/stack/mysql.png";
import stack5 from "../assets/stack/firebase.png";
import stack6 from "../assets/stack/git.png";
import stack7 from "../assets/stack/next.png";
import stack8 from "../assets/stack/reactjs.png";
import stack9 from "../assets/stack/tailwind.png";
import stack10 from "../assets/stack/redux.png";
import stack11 from "../assets/stack/typescript.png";
import { Timeline } from "@/components/ui/timeline";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";

export default function Home() {
  const words = [
    { text: "Creating" },
    { text: "Cutting-edge" },
    { text: "Tech, " },
    { text: "Crafting" },
    { text: "Ideas" },
    { text: "into" },
    { text: "Engaging " },
    { text: "Experiences", className: "text-blue-500 dark:text-blue-500" },
  ];

  const approachData = [
    {
      title: "Research & Learning",
      content: (
        <div>
          <p className="text-neutral-800 opacity-90 dark:text-neutral-200 text-xs md:text-[16px] font-text leading-relaxed font-normal mb-8">
            I believe in starting every project with a strong foundation. I
            invest time in thorough research and learning, often exploring
            multiple resources to understand the client&apos;s goals, target
            audience, and industry trends. This allows me to make informed
            design decisions that align with both the business objectives and
            user needs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={research3}
              alt="Dribble research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={research4}
              alt="Figma research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "User-Centric & Responsive Design",
      content: (
        <div>
          <p className="text-neutral-800 opacity-90 dark:text-neutral-200 text-xs md:text-[16px] font-text leading-relaxed font-normal mb-8">
            The user is at the heart of my design process. I focus on creating
            intuitive, easy-to-navigate interfaces that deliver a seamless
            experience across all devices. By understanding user behavior and
            preferences, I ensure the design not only serves its purpose but
            also adapts flawlessly to varying screen sizes, from desktops to
            tablets and smartphones. This approach ensures that the design is
            both functional and visually appealing, regardless of the device
            used.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={research1}
              alt="Dribble research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={research2}
              alt="Figma research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Collaboration & Feedback",
      content: (
        <div>
          <p className="text-neutral-800 opacity-90 dark:text-neutral-200 text-xs md:text-[16px] font-text leading-relaxed font-normal mb-8">
            I believe in the power of collaboration. Throughout the design
            process, I maintain open communication with clients, stakeholders,
            and development teams. This ensures that all perspectives are
            considered and the final product meets everyone&apos;s expectations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={research5}
              alt="Dribble research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={research6}
              alt="Figma research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Performance & Accessibility",
      content: (
        <div>
          <p className="text-neutral-800 opacity-90 dark:text-neutral-200 text-xs md:text-[16px] font-text leading-relaxed font-normal mb-8">
            A beautiful design is only effective if it performs well. I focus on
            optimizing websites for fast loading speeds and ensuring they are
            accessible to all users, including those with disabilities. This
            ensures that every user has a positive experience, no matter how
            they access the site.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={research8}
              alt="Dribble research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={research7}
              alt="Figma research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

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

  const technologies = [
    { name: "HTML 5", icon: stack1 },
    { name: "CSS 3", icon: stack2 },
    { name: "Javascript", icon: stack3 },
    { name: "MySql", icon: stack4 },
    { name: "NextJs", icon: stack7 },
    { name: "ReactJs", icon: stack8 },
    { name: "Tailwind", icon: stack9 },
    { name: "Redux", icon: stack10 },
    { name: "Typescript", icon: stack11 },
    { name: "Firebase", icon: stack5 },
    { name: "Git", icon: stack6 },
  ];

  return (
    <div className="relative">
      <div className="relative bg-background w-full h-[400px] md:h-[500px]">
        <BackgroundBeamsWithCollision>
          <div className="flex flex-col items-center gap-10 w-[80%]">
            <TypewriterEffect words={words} />
            <div className="w-fit block md:hidden bg-gradient-to-r from-blue-500 to-white p-[1px] rounded-[50px] cursor-pointer">
              <div className="bg-black py-4 px-10 rounded-[50px]">
                Get In Touch
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
        <GridBackgroundDemo />
      </div>
      <div className="py-4 md:py-10 w-full">
        <StarsBackground />
        <ShootingStars />
        <h1 className="text-center text-[40px] font-heading mb-10 bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
          ABOUT ME{" "}
        </h1>
        <div className="font-text text-[18px] w-full flex flex-col items-center gap-10 mb-10">
          <div className="w-[70%] text-center opacity-90">
            Hello my name is{" "}
            <span className="text-blue-500 dark:text-blue-500">
              IKORO FRANCIS
            </span>
            , I’m a developer driven by a commitment to transform ideas into
            powerful, seamless user experiences. With expertise in Next.js and
            React, I build solutions that are efficient, adaptable, and ready to
            perform in real-world applications. My approach emphasizes clean,
            maintainable code and a sharp focus on resolving complex issues
            while ensuring compatibility across environments.
          </div>
          <div className="w-[70%] text-center opacity-90">
            Crafting user interfaces that are both friendly and responsive is at
            the heart of my work. I believe that each interaction, from the
            smallest button to the largest layout, should feel effortless and
            engaging, allowing users to connect with technology in intuitive
            ways. Every detail matters—from smooth animations to lightning-fast
            load times—because I know that thoughtful design makes a meaningful
            difference in how users experience digital products.
          </div>
          <div className="w-[70%] text-center opacity-90">
            Beyond technical skill, I’m dedicated to creating an enjoyable and
            welcoming experience for users of all backgrounds. I strive to
            integrate empathy into design, aiming to make interfaces accessible
            and user-friendly. In each project, I combine creativity and
            precision to deliver products that look as good as they perform,
            delivering both beauty and impact. For me, development is about more
            than writing code; it’s about creating connections through
            technology.
          </div>
        </div>
        <section id="techstack" className="w-full py-10 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-center text-[40px] font-heading mb-10 bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
              My Tech Stack
            </h2>
            <div className="flex items-center flex-wrap justify-center gap-10">
              {technologies.map(({ name, icon }, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden">
                    <div className="relative h-20 z-20 w-20 rounded-full bg-black-100 flex items-center justify-center">
                      <Image src={icon} alt={name} width={60} height={60} />
                    </div>
                  </div>
                  <p className="text-[10px]">{name}</p>
                </div>
              ))}
            </div>
          </div>
            
        </section>
        <Timeline data={approachData} />
        <h1 className="text-center text-[40px] font-heading mb-10 bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
          MY RECENT PROJECTS
        </h1>
        <div className="w-full flex justify-center mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 :w-[80%] gap-[100px]">
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
    </div>
  );
}
