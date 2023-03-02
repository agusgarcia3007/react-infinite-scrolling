import clsx from "clsx";
import { useState } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";
import logo from "../assets/portal.png";
import { navLink } from "../types";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navLinks: navLink[] = [
    { text: "characters", path: "/" },
    { text: "episodes", path: "/episodes" },
    { text: "locations", path: "/locations" },
  ];

  return (
    <nav className=" px-2 sm:px-4 py-2.5 bg-[#1f1f1f] shadow sm:bg-darkBackground ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            draggable={false}
            className="h-6 mx-3 sm:h-9 animate-spin-slow"
            alt="portal Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            RMIS
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={clsx(["w-full md:block md:w-auto", { hidden: !isOpen }])}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {navLinks.map(({ text, path }) => {
              const isActive = useMatch(path);
              return (
                <li key={text}>
                  <NavLink
                    to={path}
                    className={clsx([
                      "block px-4 py-2 text-light dark:hover:text-gray-400",
                      { "text-green-400 md:text-light md:border-b": isActive },
                    ])}
                  >
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
