import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="z-50 sticky top-0 w-full nav-height bg-white shadow-md shadow-gray-400 flex justify-around items-center text-gray-600">
      <p className="text-lg sm:text-xl font-bold">
        Raymond Tieu &nbsp;&nbsp;| &nbsp;&nbsp;Software Engineer
      </p>

      {/* Menu */}

      <ul className="hidden lg:flex text-lg">
        <li>
          <Link
            className="hover:border-b-4 border-green-600"
            to="home"
            smooth={true}
            duration={1000}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-4 border-green-600"
            to="about"
            smooth={true}
            duration={1000}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-4 border-green-600"
            to="projects"
            smooth={true}
            duration={1000}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-4 border-green-600"
            to="skills"
            smooth={true}
            duration={1000}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            className="hover:border-b-4 border-green-600"
            to="contact"
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="lg:hidden z-10">
        {nav === false ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          nav === false
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={1000}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[70%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/raymond-tieu-b82676184"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/raytieu"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
