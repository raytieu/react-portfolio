import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-phone-bg bg-cover md:bg-gray-200 bg-center w-full h-screen md:h-auto py-20"
    >
      <AnimationOnScroll animateIn="animate__fadeIn" delay={250} duration={2}>
        <div className="text-center">
          <p className="text-5xl font-bold inline border-b-4 border-green-600 text-gray-500">
            Contact
          </p>
          <p className="text-gray-600 text-6xl mt-12">Raymond Tieu</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 mt-20">
          <div className="flex justify-center gap-4 items-center">
            <ImLocation2 />
            <p className="my-4 text-2xl">Irvine, CA</p>
          </div>
          <div className="flex justify-center gap-4 items-center">
            <MdEmail />
            <p className="my-4 text-2xl">ray.tieu@gmail.com</p>
          </div>
          <div className="flex justify-center gap-4 items-center">
            <BsFillPhoneFill />
            <p className="my-4 text-2xl">626-487-7380</p>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Contact;
