import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-cover bg-center w-full h-screen bg-comp-bg flex flex-col justify-center items-center"
    >
      <div className="pb-8 text-center">
        <p className="text-4xl font-bold inline border-b-4 border-green-300 text-gray-600">
          Contact
        </p>
        <p className="text-gray-600 text-3xl py-4">Raymond Tieu</p>
      </div>

      <div
        // style={{ backgroundColor: `rgb(220,220,220)` }}
        className="lg:w-[50%] container rounded-md flex flex-col justify-center items-center mx-auto"
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
    </div>
  );
};

export default Contact;
