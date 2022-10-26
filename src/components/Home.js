import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-stocks-bg bg-cover bg-center w-full h-screen"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#dbe1f7]">
          Raymond Tieu
        </h1>
        <h2 className="text-4xl sm:text-4xl my-5 font-bold text-[#9da6c2]">
          Full Stack Developer
        </h2>
        <div>
          <Link to="work" smooth={true} duration={1000}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-white hover:text-black">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
