import React from "react";
import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <div className="wrapper flex">
      <section className="py-[5%] flex flex-col">
        <div className="">
          <h1 className="title mb-5 text-c-light-high dark:text-c-dark-high">
            Contact.
          </h1>
          <p className="text-[#757575] dark:text-c-dark-medium text-lg">
            Want to create something cool together? Or perhaps just chat? <br />
            Don&apos;t hesitate to contact me.
          </p>
        </div>
        <ContactForm />
      </section>
      <div className="mt-[10%] flex-1 hidden lg:flex items-start justify-end xl:justify-center">
        <img src="/rocket.png" alt="" className="max-w-[150px] h-fit" />
      </div>
    </div>
  );
};

export default contact;
