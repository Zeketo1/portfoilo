import React from "react";

export default function About() {
  return (
    <div>
      <h1
        id="about"
        className="text-center text-[40px] font-heading mb-10 text-white"
      >
        ABOUT ME{" "}
      </h1>
      <div className="font-text2 text-[18px] w-full flex flex-col items-center gap-10 mb-10">
        <div className="w-[70%] text-center opacity-90">
          Hello my name is <span className="text-blue-500">IKORO FRANCIS</span>,
          I’m a developer driven by a commitment to transform ideas into
          powerful, seamless user experiences. With expertise in Next.js and
          React, I build solutions that are efficient, adaptable, and ready to
          perform in real-world applications. My approach emphasizes clean,
          maintainable code and a sharp focus on resolving complex issues while
          ensuring compatibility across environments.
        </div>
        <div className="w-[70%] text-center opacity-90">
          Crafting user interfaces that are both friendly and responsive is at
          the heart of my work. I believe that each interaction, from the
          smallest button to the largest layout, should feel effortless and
          engaging, allowing users to connect with technology in intuitive ways.
          Every detail matters—from smooth animations to lightning-fast load
          times—because I know that thoughtful design makes a meaningful
          difference in how users experience digital products.
        </div>
        <div className="w-[70%] text-center opacity-90">
          Beyond technical skill, I’m dedicated to creating an enjoyable and
          welcoming experience for users of all backgrounds. I strive to
          integrate empathy into design, aiming to make interfaces accessible
          and user-friendly. In each project, I combine creativity and precision
          to deliver products that look as good as they perform, delivering both
          beauty and impact. For me, development is about more than writing
          code; it’s about creating connections through technology.
        </div>
      </div>
    </div>
  );
}
