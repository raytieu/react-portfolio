import React from "react";
import AboutPic from "../assets/about_photo.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gray-100 text-gray-600 py-20 flex flex-col justify-center items-center 2xl:h-screen"
    >
      <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            About My Passion
          </p>
        </div>
      </AnimationOnScroll>

      {/* <div className="flex flex-col justify-center items-center mt-20"> */}
      <div className="w-[90%] flex flex-col 2xl:flex-row mt-12 ">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          delay={250}
          animateOnce={true}
        >
          <div className="items-center justify-center flex align-middle">
            <img
              className="w-[60%] rounded-md "
              src={AboutPic}
              alt="about pic"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          delay={250}
          animateOnce={true}
        >
          <div className="flex flex-col gap-12 items-center justify-center mt-12 2xl:mt-0">
            <div className="text-2xl font-bold">
              <p>
                {/* "The most damaging phrase in the language is.. 'it's always been
                done this way.'" grace hopper*/}
                “There are only two ways to live your life. One is as though
                nothing is a miracle. The other is as though everything is a
                miracle.”
              </p>
              <br />
              <p>
                <em>-Albert Einstein</em>
              </p>
            </div>
            <div className="text-md">
              <p>
                {/* When I was younger.... discover passion at young age... now
                pursuing my passion... story about video games...what event at
                an older age grow that passion In my early development as a
                person, I was always afraid of change. Just be comfortable with
                what already works and don't take risks. Eventually tiring from
                this mundane cycle, I wanted to venture into unknown territory
                and indulge in the vast world of technology and innovation... */}
                I vividly remember the day when my Uncle John brought me to our
                local Blockbuster and rented the JRPG (Japanese Role-Playing
                Game), Lufia: The Fortress of Doom, for my Super Nintendo. At
                the age of 6, this game introduced into my life so many new
                concepts: numbers, language, and strategy, but what fascinated
                me the most was how the game would respond to every button I
                pressed. Any action I executed, every level-up, and every new
                moment in the game had to be intricately programmed into the
                code that brought my imagination to reality; this is the miracle
                of software.
              </p>
              <br />
              <p>
                I'm a software engineer well-versed in HTML, CSS, JavaScript,
                and React who is experienced in developing scalable web
                applications. Though primarily a front-end developer at the
                moment, I am also knowledgeable in building out full-stack
                applications using the MERN stack. I take great pride and joy in
                converting a concept or idea into reality, and will always
                continue to challenge myself and enhance my skillset. I look
                forward to interacting with everyone I will meet on this journey
                and strive to be an invaluable addition to any team and company.
              </p>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
    // </div>
  );
};

export default About;
