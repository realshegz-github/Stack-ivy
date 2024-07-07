import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.svg";
import world from "../../assets/world.png";
import { Link, NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "../common/CustomBtn";

const Navbar: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const navItems = [
    { id: 1, text: "Product", path: "/interest" },
    { id: 2, text: "Business", path: "/interest" },
    { id: 3, text: "Company", path: "/interest" },
    { id: 4, text: "Learn", path: "/interest" },
  ];

  return (
    <nav
      className={`${
        scrolled ? "fixed bg-primary" : "absolute bg-transparent"
      } top-0 left-0 w-full z-50 shadow-md transition-colors duration-300`}
    >
      <div className="md:flex items-center justify-between maxContainer px-[5%] py-5 text-white">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <div
          onClick={handleNav}
          className="absolute right-[5%] top-6 cursor-pointer md:hidden"
        >
          {openNav ? (
            <AiOutlineClose size={20} color="#fff" />
          ) : (
            <AiOutlineMenu size={20} color="#fff" />
          )}
        </div>

        <ul
          className={`md:flex md:pb-0 md:pt-0 pt-12 pb-12 gap-5 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:px-0 px-[5%] transition-all duration-500 ease-in ${
            openNav ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0 bg-primary md:bg-transparent`}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className="font-medium md:flex-center gap-5 hover:text-gray-400 px-2 md:px-4 py-1 rounded-md cursor-pointer duration-500"
            >
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
          <div className="md:hidden mt-1">
            <Link
              to="#"
              className="font-medium md:flex-center gap-5 hover:text-gray-400 px-2 md:px-4 py-1  rounded-md cursor-pointer duration-500"
            >
              Signin
            </Link>
            <div className="mt-8">
              <Button>Create Account</Button>
            </div>
          </div>
        </ul>
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="#"
            className="font-medium md:flex-center gap-5 hover:text-gray-400 px-2 md:px-4 py-1 rounded-md cursor-pointer duration-500"
          >
            Signin
          </Link>
          <div>
            <Button
              background="bg-secondary"
              hoverBackground="hover:bg-[#6005AE]"
              color="white"
              font="font-bold"
              width="w-[169px]"
            >
              Create Account
            </Button>
          </div>
          <div
            className="flex items-center gap-1 ml-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-white p-2 rounded-full">
              <img src={world} alt="language" />
            </div>
            <div className="text-[#ccc]">
              <MdKeyboardArrowDown />
            </div>
            {isHovered && (
              <div className="absolute top-16 right-5 z-50 bg-secondary shadow-lg min-w-[100px] rounded-md">
                <ul className="">
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">
                    Option 1
                  </li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">
                    Option 2
                  </li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">
                    Option 3
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
