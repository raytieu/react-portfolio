import React from "react";
import AboutPic from "../assets/about_photo.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <div name="about" className="w-full bg-gray-100 text-gray-600 py-40">
      <AnimationOnScroll animateIn="animate__bounceIn">
        <div className="text-center">
          <p className="text-5xl font-bold inline border-b-4 border-green-600">
            My Passion
          </p>
        </div>
      </AnimationOnScroll>

      <div className="flex flex-col justify-center items-center mt-20">
        <div className="max-w-[75%] w-full grid 2xl:grid-cols-2 gap-16 px-4">
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className="items-center justify-center flex align-middle">
              <img
                className="w-[60%] rounded-md"
                src={AboutPic}
                alt="about pic"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className="flex flex-col gap-12 items-center justify-center">
              <div className="text-3xl font-bold">
                <p>
                  "The most damaging phrase in the language is.. 'it's always
                  been done this way.'"
                </p>
                <br />
                <p>
                  <em>-Grace Hopper</em>
                </p>
              </div>
              <div className="text-lg">
                <p>
                  When I was younger.... discover passion at young age... now
                  pursuing my passion... story about video games...what event at
                  an older age grow that passion In my early development as a
                  person, I was always afraid of change. Just be comfortable
                  with what already works and don't take risks. Eventually
                  tiring from this mundane cycle, I wanted to venture into
                  unknown territory and indulge in the vast world of technology
                  and innovation...
                </p>
                <br />
                <p>
                  I'm a software engineer well-versed in HTML, CSS, JavaScript,
                  and React who is experienced in developing scalable web
                  applications. Though primarily a front-end developer at the
                  moment, I am also knowledgeable in building out full-stack
                  applications using the MERN stack. I take great pride and joy
                  in converting a concept or idea into reality, and will always
                  continue to challenge myself and enhance my skillset. I look
                  forward to interacting with everyone I will meet on this
                  journey and strive to be an invaluable addition to any team
                  and company.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default About;
