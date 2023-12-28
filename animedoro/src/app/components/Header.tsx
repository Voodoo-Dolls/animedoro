"use client";
import { useState, useEffect, useRef } from "react";
import { IoSchool, IoCloseOutline } from "react-icons/io5";
import { GiStopwatch } from "react-icons/gi";
import { IconContext } from "react-icons";
import { BiSolidDonateHeart } from "react-icons/bi";

import Link from "next/link";
const Header = () => {
  // Toggle Nav
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenu = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };
  const navElement: any = useRef();

  useEffect(() => {
    const handler = (event: any) => {
      if (toggleMenu && !navElement.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, [toggleMenu]);
  return (
    <header>
      <nav ref={navElement}>
        <button className="hamburger" onClick={handleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        <ul className={`${toggleMenu ? "open" : ""} bg-neutral-800`}>
          <li>
            <Link href="./">
              <IconContext.Provider value={{ size: "36px" }}>
                <IoSchool />
              </IconContext.Provider>
              <h1 className="text-4xl leading-none">Animedoro</h1>
            </Link>
          </li>
          <li>
            <Link href="./timer" className="text-3xl leading-none">
              <IconContext.Provider value={{ size: "26px" }}>
                <GiStopwatch />
              </IconContext.Provider>
              Timer
            </Link>
          </li>
          <li>
            <Link href="./donate" className="text-3xl leading-none">
              <IconContext.Provider value={{ size: "26px" }}>
                <BiSolidDonateHeart />
              </IconContext.Provider>
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
