import React from "react";
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
import SideBar from "../SideBar/SideBar";

function Navbar() {
  return (
    <div className="h-24">
      <SideBar />
      <div className="wrapper w-2/3 m-auto flex h-full justify-between items-center ">
        <span>Aniket Srivastava</span>
        <div className="social flex space-x-4 ">
          <a href="https://www.linkedin.com/in/aniket-srivastava-1b3b5b1b4/">
            <FaLinkedin className="bg-blue-900 scale-150" />
          </a>
          <a href="https://github.com/aniket-dev-ai">
            <FaGithubSquare className="bg-blue-900 scale-150" />
          </a>
          <a href="https://github.com/aniket-dev-ai">
            <FaWhatsappSquare className="bg-green-900 scale-150" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
