import React, { useState } from "react";
import { IoLocation, IoCall, IoMail, IoPerson } from "react-icons/io5";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const { name, email, phone, msg } = contactForm;

  const handleChange = (e) => {
    setContactForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(contactForm),
    });
  };

  return (
    <form
      className="mt-10 flex flex-col gap-10 w-full md:w-fit"
      onSubmit={handleOnSubmit}
    >
      {/* wrapper for info */}
      <div className="flex flex-col md:flex-row gap-5">
        <span className="contact-info">
          <IoLocation color="currentColor" size={20} />
          Stockholm, Sweden
        </span>
        <span className="contact-info">
          <IoCall color="currentColor" size={20} />
          +11223344
        </span>
        <span className="contact-info">
          <IoMail color="currentColor" size={20} />
          hello@lissner.dev
        </span>
      </div>
      {/* Wrapper for contact */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side */}
        <div className="flex flex-col gap-5 md:gap-0 justify-between">
          {/* Name input */}
          <div className="form-element">
            <label htmlFor="name">Name</label>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={name}
              />
              <IoPerson color="#757575" />
            </div>
          </div>
          <div className="form-element">
            <label htmlFor="email">Email</label>
            <div>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                value={email}
              />
              <IoMail color="#757575" />
            </div>
          </div>
          <div className="form-element">
            <label htmlFor="phone">Phone</label>
            <div>
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={handleChange}
                value={phone}
              />
              <IoCall color="#757575" />
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="form-element">
          <label htmlFor="msg">Message</label>
          <textarea
            name="msg"
            id="msg"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={msg}
          ></textarea>
        </div>
      </div>
      <button className="bg-c-primary w-fit text-white px-4 py-3 self-center rounded-xl">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
