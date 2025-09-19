import Image from "next/image";
import React from "react";
import stack1 from "../../assets/stack/html.png";
import stack2 from "../../assets/stack/css.png";
import stack3 from "../../assets/stack/javascript.png";
// import stack4 from "../../assets/stack/mysql.png";
import stack5 from "../../assets/stack/firebase.png";
import stack6 from "../../assets/stack/git.png";
import stack7 from "../../assets/stack/next.png";
import stack8 from "../../assets/stack/reactjs.png";
import stack9 from "../../assets/stack/tailwind.png";
import stack10 from "../../assets/stack/redux.png";
import stack11 from "../../assets/stack/typescript.png";
import stack12 from "../../assets/stack/eoion.png";
import stack13 from "../../assets/tech/convex_logo.svg";
import stack14 from "../../assets/stack/tanstack.svg";

export default function TechStack() {
  const technologies = [
    { name: "NextJs", icon: stack7 },
    { name: "Typescript", icon: stack11 },
    { name: "Javascript", icon: stack3 },
    { name: "Firebase", icon: stack5 },
    { name: "Convex", icon: stack13 },
    { name: "TanStack", icon: stack14 },
    // { name: "MySql", icon: stack4 },
    { name: "Eoion", icon: stack12 },
    { name: "ReactJs", icon: stack8 },
    { name: "Tailwind", icon: stack9 },
    { name: "Redux", icon: stack10 },
    { name: "Git", icon: stack6 },
    { name: "CSS 3", icon: stack2 },
    { name: "HTML 5", icon: stack1 },
  ];
  return (
    <section id="stack" className="w-full py-10 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-center text-[40px] font-heading mb-10 text-white">
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
  );
}
