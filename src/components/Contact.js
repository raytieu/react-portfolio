import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4"
    >
      <div className="pb-8 text-center">
        <p className="text-4xl font-bold inline border-b-4 border-green-300 text-gray-300">
          Contact
        </p>
        <p className="text-gray-300 py-4">Find my contact information below:</p>
      </div>

      <div
        style={{ backgroundColor: `rgb(220,220,220)` }}
        className="lg:w-[50%] container rounded-md flex flex-col justify-center items-center mx-auto py-16"
      >
        <div className="flex justify-center items-center">
          <ImLocation2 />
          <p className="my-4 ml-8 text-2xl">Irvine, CA</p>
        </div>
        <div className="flex justify-center items-center">
          <MdEmail />
          <p className="my-4 ml-8 text-2xl">ray.tieu@gmail.com</p>
        </div>
        <div className="flex justify-center items-center">
          <BsFillPhoneFill />
          <p className="my-4 ml-8 text-2xl">626-487-7380</p>
        </div>
      </div>
      {/* <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-green-300 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Find my contact information below:
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-green-300 hover:border-green-300 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form> */}
    </div>
  );
};

export default Contact;
