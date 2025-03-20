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
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/layers/Banner";
import About from "@/components/layers/About";
import TechStack from "@/components/layers/TechStack";
import Projects from "@/components/layers/Projects";

export default function Home() {
  const approachData = [
    {
      title: "Research & Learning",
      content: (
        <div>
          <p className="opacity-90 text-neutral-200 text-xs md:text-[16px] leading-relaxed font-normal mb-8">
            I believe in starting every project with a strong foundation. I
            invest time in thorough research and learning, often exploring
            multiple resources to understand the client&apos;s goals, target
            audience, and industry trends. This allows me to make informed
            design decisions that align with both the business objectives and
            user needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={research3}
              alt="Dribble research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-48 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={research4}
              alt="Figma research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-48 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "User-Centric & Responsive Design",
      content: (
        <div>
          <p className="opacity-90 text-neutral-200 text-xs md:text-[16px] leading-relaxed font-normal mb-8">
            The user is at the heart of my design process. I focus on creating
            intuitive, easy-to-navigate interfaces that deliver a seamless
            experience across all devices. By understanding user behavior and
            preferences, I ensure the design not only serves its purpose but
            also adapts flawlessly to varying screen sizes, from desktops to
            tablets and smartphones. This approach ensures that the design is
            both functional and visually appealing, regardless of the device
            used.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={research1}
              alt="Dribble research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-48 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={research2}
              alt="Figma research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-48 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Collaboration & Feedback",
      content: (
        <div>
          <p className="opacity-90 text-neutral-200 text-xs md:text-[16px] leading-relaxed font-normal mb-8">
            I believe in the power of collaboration. Throughout the design
            process, I maintain open communication with clients, stakeholders,
            and development teams. This ensures that all perspectives are
            considered and the final product meets everyone&apos;s expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={research5}
              alt="Dribble research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-48 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={research6}
              alt="Figma research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-48 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Performance & Accessibility",
      content: (
        <div>
          <p className="opacity-90 text-neutral-200 text-xs md:text-[16px] leading-relaxed font-normal mb-8">
            A beautiful design is only effective if it performs well. I focus on
            optimizing websites for fast loading speeds and ensuring they are
            accessible to all users, including those with disabilities. This
            ensures that every user has a positive experience, no matter how
            they access the site.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={research8}
              alt="Dribble research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-48 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={research7}
              alt="Figma research"
              width={500}
              height={500}
              className="rounded-lg object-cover h-48 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative">
      <Banner />
      <div className="py-4 md:py-10 w-full">
        <StarsBackground />
        <ShootingStars />
        <About />
        <TechStack />
        <Timeline data={approachData} />
        <Projects />
        <div className="flex flex-col py-10 items-center text-center">
          <h1 className="text-center text-[40px] font-heading mb-10 text-white">
            Looking to elevate your digital presence?
          </h1>
          <p className="opacity-90 mb-7 px-10">
            Let&apos;s connect and explore how I can help bring your goals to
            life. Reach out today, <br /> and let’s get started on creating
            something exceptional together!
          </p>
          <Link
            href="/contact"
            className="z-[200] w-fit bg-gradient-to-r from-blue-500 to-white p-[1px] rounded-[50px] cursor-pointer"
          >
            <div className="bg-black py-4 px-10 rounded-[50px]">
              Get In Touch
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
