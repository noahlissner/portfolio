import React from "react";

export const ButtonCV = () => {
  return (
    <a
      href="/Lissner_Noah_CV.pdf"
      target="_blank"
      rel="noreferrer"
      className="bg-c-primary text-white py-2.5 px-4 rounded-xl text-sm"
    >
      Download CV
    </a>
  );
};

export const ButtonSocial = ({ to, title, color }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      <div
        style={{ background: color }}
        className="text-white font-medium w-[123px] h-[39px] rounded-lg flex items-center justify-center"
      >
        {title}
      </div>
    </a>
  );
};
