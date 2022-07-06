import React from "react";

export const ButtonCV = () => {
  return (
    <button className="bg-c-primary text-white py-2.5 px-4 rounded-xl text-sm">
      Download CV
    </button>
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
