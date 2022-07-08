import React from "react";

const Tag = ({ title }) => {
  return (
    <div className="bg-[#121212] h-fit w-fit text-white font-medium py-0.5 px-1.5 rounded-md">
      {title}
    </div>
  );
};

export default Tag;
