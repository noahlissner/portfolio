import React from "react";

const about = () => {
  return (
    <div className="wrapper">
      <section className="py-[5%]">
        <h1 className="title">About.</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-5 gap-10">
          <div>
            <p className="max-w-[450px]">
              Hi, my name is Noah Lissner and I’m 23 years old based in
              Stockholm, Sweden. After gaining hands on experience in HTML, CSS,
              and Javascript through high school and university, I’ve realized
              that my career path should move towards front-end development. Not
              only was I smitten by the creative process that goes into it, but
              I was also intrigued and challenged by the problem solving
              required to make something work. I can say that my love for design
              and new technologies made Front-end the obvious choice.
              <br />
              <br />
              In my freetime, I enjoy playing video games, watching movies, and
              listening to music. I also enjoy learning new technologies and
              could easily spend the entire day coding my own projects.
              <br />
              <br />
              I’m currently in my last year studying Frontend Development at
              Medieinstitutet and looking for an internship this fall to further
              my skills.
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
