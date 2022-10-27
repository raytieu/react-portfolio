import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-comp-bg bg-cover bg-center w-full h-screen flex flex-col justify-center items-center"
    >
      <div className="pb-8 mt-[10%] text-center">
        <p className="text-4xl font-bold inline border-b-4 border-green-600 text-gray-600">
          Contact
        </p>
        <p className="text-gray-600 text-3xl py-4">Raymond Tieu</p>
      </div>

      <div className="w-full container rounded-md flex flex-col justify-center items-center">
        <div className="flex justify-center w-full items-center">
          <ImLocation2 size="20%" />
          <p className="my-4 text-2xl">Irvine, CA</p>
        </div>
        <div className="flex justify-center w-full items-center">
          <MdEmail size="20%" />
          <p className="my-4 text-2xl">ray.tieu@gmail.com</p>
        </div>
        <div className="flex justify-center w-full items-center">
          <BsFillPhoneFill size="20%" />
          <p className="my-4 text-2xl">626-487-7380</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
