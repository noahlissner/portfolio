import React from "react";

const about = () => {
  return (
    <div className="wrapper">
      <section className="py-[5%]">
        <h1 className="title">About.</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-5 gap-10">
          <div>
            <p className="max-w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit at
              eius laboriosam incidunt mollitia soluta aspernatur similique
              ratione explicabo sint.
            </p>
          </div>
          <div>
            <img
              src="/me.jpg"
              alt=""
              className="max-h-[400px] 2xl:max-h-[500px] object-contain rounded-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
