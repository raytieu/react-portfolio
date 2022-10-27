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
          <div className="flex flex-col gap-12 items-center justify-center">
            <div className="text-4xl font-bold">
              <p>
                "The most damaging phrase in the language is.. 'it's always been
                done this way.'"
              </p>
              <br />
              <p>
                <em>-Grace Hopper</em>
              </p>
            </div>
            <div className="text-lg">
              <p>
                This quote summarizes my early development as a person because I
                had been afraid of change. Just be comfortable with what already
                works and don't take risks. Eventually tiring from this mundane
                cycle, I wanted to allow my mind to venture into unknown
                territory and indulge in the world of technology.
              </p>
              <br />
              <p>
                I'm a software engineer who is well-versed in HTML, CSS,
                JavaScript, and React, among other technologies. Primarily a
                front-end developer at the moment, I also have experience
                building out full-stack applications using the MERN stack. I
                take great pride and joy in every development task that I
                encounter and will always continue adding to my knowledge. I
                look forward to interacting with all the people I will meet on
                this journey and strive to be an invaluable part of any team or
                company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
