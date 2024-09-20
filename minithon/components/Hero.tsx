// components/Hero.tsx
import React from "react";
import WordPullUp from "./magicui/word-pull-up";
import LetterPullup from "./magicui/letter-pullup";
import { IconTech } from "./Icons";


const Hero = async () => {
  return (
    <section
      className="bg-cover bg-center h-screen  text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: "url(/bg1.png)" }}
    >
      <div className="absolute left-10">
      <IconTech />
      </div>
      <WordPullUp
        className="text-4xl font-bold tracking-[-0.02em] text-white md:text-7xl md:leading-[5rem]"
        words="India's Top University for Science and Technology"
      />
      {/* <h1 className="text-4xl font-bold">India's Top University for Science and Technology</h1> */}
      {/* <p className="mt-4 text-xl">Explore our campus and opportunities</p> */}
      <LetterPullup
        className="text-white font-light"
        words={"Explore our campus and opportunities"}
        delay={0.04}
      />
    </section>
  );
};

export default Hero;
