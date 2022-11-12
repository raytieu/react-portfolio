import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-stocks-bg bg-cover bg-center w-full h-screen welcome-page"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-end h-full">
        <AnimationOnScroll
          // animatePreScroll={true}
          initiallyVisible={true}
          // animateIn="animate__bounceIn"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-[#dbe1f7]">
            Raymond Tieu
          </h1>
        </AnimationOnScroll>
        <AnimationOnScroll initiallyVisible={true}>
          <h2 className="text-2xl sm:text-3xl my-5 font-bold text-[#9da6c2]">
            Software Engineer
          </h2>
        </AnimationOnScroll>
        <div>
          <AnimationOnScroll initiallyVisible={true}>
            <Link to="about" smooth={true} duration={1000}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-white hover:text-black">
                Welcome
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Home;
