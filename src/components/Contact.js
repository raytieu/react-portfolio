import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-phone-bg bg-cover md:bg-gray-200 bg-center w-full h-screen py-40 md:py-20"
    >
      <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-green-600 text-gray-500">
            Contact
          </p>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateIn="animate__fadeIn"
        delay={500}
        duration={2}
        animateOnce={true}
      >
        <div className="flex flex-col justify-center items-center mt-20">
          <p className="text-gray-600 text-4xl md:text-5xl mt-12">
            Raymond Tieu
          </p>
          <div className="flex flex-col justify-center items-center gap-4 mt-20">
            <div className="flex justify-center gap-4 items-center mt-12">
              <ImLocation2 />
              <p className="my-4 text-xl md:text-2xl">Irvine, CA</p>
            </div>
            <div className="flex justify-center gap-4 items-center">
              <MdEmail />
              <p className="my-4 text-xl md:text-2xl">ray.tieu@gmail.com</p>
            </div>
            <div className="flex justify-center gap-4 items-center">
              <BsFillPhoneFill />
              <p className="my-4 text-xl md:text-2xl">626-487-7380</p>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Contact;
