import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import AWS from "../assets/aws.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full lg:h-screen bg-gray-100 text-gray-600 py-40"
    >
      {/* container */}
      <div className="max-w-[75%] mx-auto text-center p-4 flex flex-col items-center w-full h-full">
        <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
          <div>
            <p className="text-5xl font-bold inline border-b-4 border-green-600 ">
              Technical Expertise
            </p>
          </div>
        </AnimationOnScroll>

        <div className="mt-20 w-[75%] grid grid-cols-2 sm:grid-cols-3 gap-20 text-center">
          <AnimationOnScroll
            animateIn="animate__fadeInTopLeft"
            delay={250}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img className="w-28 mx-auto mt-4" src={HTML} alt="HTML icon" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            delay={250}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img className="w-28 mx-auto mt-4" src={CSS} alt="CSS icon" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInTopRight"
            delay={250}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img
                className="w-28 mx-auto mt-4"
                src={JavaScript}
                alt="JavaScript icon"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            delay={250}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img
                className="w-28 mx-auto mt-4"
                src={ReactImg}
                alt="React icon"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            delay={250}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img
                className="w-28 mx-auto mt-4"
                src={GitHub}
                alt="GitHub icon"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            delay={250}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img
                className="w-28 mx-auto mt-4"
                src={Node}
                alt="Node.js icon"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInBottomLeft"
            delay={250}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img className="w-28 mx-auto mt-4" src={AWS} alt="AWS icon" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            delay={250}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img
                className="w-28 mx-auto mt-4"
                src={Mongo}
                alt="MongoDB icon"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInBottomRight"
            delay={250}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img
                className="w-28 mx-auto mt-4"
                src={Tailwind}
                alt="TailwindCSS icon"
              />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Skills;
