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

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-gray-100 text-gray-600">
      {/* container */}
      <div className="pt-24 max-w-[75%] mx-auto text-center p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-green-600 ">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-12 text-center py-16">
          <div className="hover:scale-110 duration-500 ">
            <img className="w-32 mx-auto mt-4" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-32 mx-auto mt-4" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              className="w-32 mx-auto mt-4"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              className="w-32 mx-auto mt-4"
              src={ReactImg}
              alt="React icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-32 mx-auto mt-4" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-32 mx-auto mt-4" src={Node} alt="Node.js icon" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-32 mx-auto mt-4" src={AWS} alt="AWS icon" />
            <p className="my-4">AWS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-32 mx-auto mt-4" src={Mongo} alt="MongoDB icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              className="w-32 mx-auto mt-4"
              src={Tailwind}
              alt="TailwindCSS icon"
            />
            <p className="my-4">TailwindCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
