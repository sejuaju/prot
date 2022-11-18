import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <>
      <nav className="w-full p-2 md:p-5 lg:px-12 flex items-center justify-between text-white fixed top-0 backdrop-blur-sm z-[999]">
        
        <div
          onClick={() => navigate("/")}
          className="flex items-center md:space-x-3 cursor-pointer"
        >
          <img className="w-[10rem] h-[4rem]" src={Logo} alt="" />
          
        </div>
        <div className="flex items-center space-x-5 hidden lg:flex">
          <a className="cursor-pointer" onClick={() => navigate("/")}>
          QBbett Apps
          </a>
          <a className="cursor-pointer" href="#Tokenomics">
            Tokenomics
          </a>
          <a
            className="py-5 cursor-pointer"
            href="https://www.daomerge.net/"
            target="_blank"
            rel="noreferrer"
          >
            Whitepaper                        
          </a>
          <a className="cursor-pointer" onClick={() => navigate("/About QBbett")}>
            About QBett
          </a>
        </div>
        
        
        
       
        <svg
          onClick={() => setActiveMenu(!activeMenu)}
          className="text-white text-[2rem] lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
          />
        </svg>
      </nav>
      <div
        className={`${
          activeMenu ? "translate-y-0" : "translate-y-[100%]"
        } w-full p-5 transition-all h-screen bg-black fixed z-[9999] text-white flex flex-col justify-center`}
      >
        <div className="w-full flex justify-between items-center">
          <div
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img src={Logo} className="w-auto h-[2.5rem]" alt="" />
            <div className="font-medium">Daomerge</div>
          </div>
          <svg
            onClick={() => setActiveMenu(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="m563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
            />
          </svg>
        </div>
        <a className="py-5 cursor-pointer" onClick={() => navigate("/")}>
          Home
        </a>
        <a className="py-5 cursor-pointer" href="#about">
          About
        </a>
        <a
          className="py-5 cursor-pointer"
          href="https://www.daomerge.net/"
          target="_blank"
          rel="noreferrer"
        >
          DAPPS
        </a>
        <a
          className="py-5 cursor-pointer"
          onClick={() => navigate("/developers")}
        >
          Products
        </a>
        <a
          className="py-5 cursor-pointer"
          onClick={() => navigate("/developers")}
        >
          Partners
        </a>
        <a className="py-5 cursor-pointer" onClick={() => navigate("/roadmap")}>
          Roadmap
        </a>

 
      </div>
    </>
  );
}

export default Nav;
