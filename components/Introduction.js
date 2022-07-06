import Image from "next/image";
import React from "react";
import { ButtonSocial } from "../components/Buttons";

const Introduction = () => {
  return (
    <section className="h-[70vh] flex items-center">
      <div>
        <h1 className="title max-w-[485px]">
          Hi, i&apos;m Noah.
          <br /> A Front-End Developer Based in Sweden.
        </h1>
        <div className="flex justify-start gap-5 mt-9">
          <ButtonSocial
            title={"Linkedin"}
            to={"https://www.linkedin.com/in/noahlissner/"}
            color="#0079FF"
          />
          <ButtonSocial
            title={"Github"}
            to={"https://github.com/noahlissner"}
            color="#333333"
          />
        </div>
      </div>
      <div className=" flex-1 hidden lg:flex justify-center ">
        <img src="/laptop.png" className="max-w-[350px] 2xl:max-w-[500px]" />
      </div>
    </section>
  );
};

export default Introduction;
