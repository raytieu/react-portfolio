import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import AWS from "../assets/aws.png";
// import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full lg:h-screen bg-gray-100 text-gray-600 py-20"
    >
      {/* container */}
      <div className="mx-auto text-center p-4 flex flex-col items-center w-full h-full">
        <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-green-600 ">
              Technical Skills
            </p>
          </div>
        </AnimationOnScroll>

        <div className="mt-20 w-[60%] grid grid-cols-2 sm:grid-cols-3 gap-12 text-center">
          <AnimationOnScroll
            animateIn="animate__flipInY"
            delay={100}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={HTML} alt="HTML icon" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__flipInY"
            delay={200}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={CSS} alt="CSS icon" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__flipInY"
            delay={300}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img
                className="w-24 mx-auto"
                src={JavaScript}
                alt="JavaScript icon"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__flipInY"
            delay={400}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img
                className="w-24 mt-8 mx-auto"
                src={ReactImg}
                alt="React icon"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__flipInY"
            delay={500}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              {/* <img
                className="w-24 mt-8 mx-auto"
                src={GitHub}
                alt="GitHub icon"
              /> */}
              <FaGithub size={100} className="mt-8 mx-auto" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__flipInY"
            delay={600}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img
                className="w-24 mt-8 mx-auto"
                src={Node}
                alt="Node.js icon"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__flipInY"
            delay={700}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img className="w-24 mt-8 mx-auto" src={AWS} alt="AWS icon" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__flipInY"
            delay={800}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img
                className="w-24 mt-8 mx-auto"
                src={Mongo}
                alt="MongoDB icon"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__flipInY"
            delay={900}
            animateOnce={true}
          >
            <div className="hover:scale-110 duration-500">
              <img
                className="w-24 mt-8 mx-auto"
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
