import React from "react";
import AboutPic from "../assets/about_photo.jpg";

const About = () => {
  return (
    <div name="about" className="w-full md:h-screen bg-gray-100 text-gray-600">
      <div className=" pt-[5%] pl-4 text-center">
        <p className="text-4xl font-bold inline border-b-4 border-green-600">
          About
        </p>
      </div>
      <div className="mt-8 flex flex-col justify-center items-center w-full h-[75%]">
        <div className="max-w-[75%] w-full grid sm:grid-cols-2 gap-16 px-4">
          <div className="items-center justify-center flex align-middle">
            <img
              className="w-[60%] rounded-md"
              src={AboutPic}
              alt="about pic"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">
              <p>
                Hi. I'm Raymond, nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
              <br />
              <p>
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all
                the way to large enterprise corporations. What would you do if
                you had a software expert available at your fingertips?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
