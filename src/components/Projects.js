import React from "react";
import Recipe from "../assets/recipe-photo.jpg";
import StatTracker from "../assets/bball-court.jpg";
import Weather from "../assets/weather-photo.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Projects = () => {
  return (
    <div name="projects" className="w-full bg-gray-200 text-gray-600 py-40">
      <div className="max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <AnimationOnScroll animateIn="animate__bounceIn">
          <div className="pb-8 text-center">
            <p className="text-5xl font-bold inline border-b-4 text-gray-600 border-green-600">
              Portfolio
            </p>
          </div>
        </AnimationOnScroll>

        {/* Container */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
          {/* Grid Item */}
          <AnimationOnScroll
            initiallyVisible={false}
            animateIn="animate__fadeInLeft"
          >
            <div className="flex flex-col w-[80%] lg:w-auto shadow-lg shadow-gray-300 group bg-gray-100 rounded-2xl justify-center items-center mx-auto px-6 py-12">
              <img
                className="content-div"
                src={StatTracker}
                alt="StatTracker"
              />

              <p className="text-3xl font-bold mt-8 text-center">
                Hooligans Stat Tracker{" "}
              </p>
              <p className="mt-8 text-lg">
                Whether you are watching your favorite recreational basketball
                game live, or reviewing gametape, this basketball stat-keeping
                application is here to enhance your experience! Enter the
                players you wish to keep track of and simply click on the stat
                buttons to add values to each stat. Additional features include:
                right-click to subtract, calculated FPs value, and last stat
                change.{" "}
              </p>
              <div className="text-center mt-4">
                <a
                  href="https://raytieu.github.io/hooligans-stats/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-6 py-3 m-2 bg-green-600 text-white text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/raytieu/hooligans-stats"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-6 py-3 m-2 bg-blue-500 text-white text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </AnimationOnScroll>

          {/* Grid Item */}
          <AnimationOnScroll
            initiallyVisible={false}
            animateIn="animate__fadeIn"
            delay={500}
            duration={1}
          >
            <div className="flex flex-col shadow-lg w-[80%] lg:w-auto shadow-gray-300 group bg-gray-100 rounded-2xl items-center mx-auto px-6 py-12">
              <img className="content-div" src={Weather} alt="StatTracker" />

              <p className="text-3xl font-bold mt-8 text-center">
                Weather Dashboard
              </p>
              <p className="mt-8 text-lg">
                This app is your new best friend when it comes to checking the
                weather. Type in your city of choice to view the five-day
                forecast, complete with humidity level, wind speed, and
                color-coded UV index. Any searched city is then entered into
                your browser's local storage for easy access in the search
                history. The clear history button will also delete the existing
                history in the local storage.{" "}
              </p>
              <div className="text-center mt-4">
                <a
                  href="https://raytieu.github.io/weather-dashboard/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-6 py-3 m-2 bg-green-600 text-white text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/raytieu/weather-dashboard"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-6 py-3 m-2 bg-blue-500 text-white text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </AnimationOnScroll>

          {/* Grid Item */}
          <AnimationOnScroll
            initiallyVisible={false}
            animateIn="animate__fadeInRight"
          >
            <div className="flex flex-col shadow-lg w-[80%] lg:w-auto shadow-gray-300 group bg-gray-100 rounded-2xl justify-center items-center mx-auto px-6 py-12">
              <img className="content-div" src={Recipe} alt="Recipe" />

              <p className="text-3xl font-bold mt-8 text-center">
                Rapid Recipes{" "}
              </p>
              <p className="mt-8 text-lg">
                Not sure what to cook up for dinner? This application makes it
                quick and simple for you to get meal ideas. Made with the Tasty
                API, users can quickly generate a random assortment of dishes
                through either the search bar, or the pre-selected cuisine
                types. Each image card is selectable, complete with the
                ingredients needed to create the dish and the instructions on
                how to prepare it.{" "}
              </p>
              <div className="text-center mt-4">
                <a
                  href="https://raytieu.github.io/react-recipe/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-6 py-3 m-2 bg-green-600 text-white text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/raytieu/react-recipe"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-6 py-3 m-2 bg-blue-500 text-white text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Projects;
