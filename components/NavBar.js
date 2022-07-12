import React from "react";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navbar">
        <div className="logoContainer">
          <Link href="/">
            <a
              className="logo"
              href="/"
              rel="noopener noreferrer"
            >
              ExiT
            </a>
          </Link>
          <p className="pLogo"> {"</h2>"}Your Developer Forum{"</h2>"}</p>
        </div>

        <ul
          className={isOpen === false ? "navmenu" : "navmenu" + " " + "active"}
        >
          <button className="buttonsnavitem">
            <li className="navitem">
              <Link href="/javascript">
                <a
                  className={
                    isOpen === false ? "navlink" : "navlink" + " " + "active"
                  }
                  onClick={openMenu}
                >
                  <span>Javascript</span>
                  <svg className="svgButton">
                    <rect x="0" y="0" fill="none"></rect>
                  </svg>
                </a>
              </Link>
            </li>
          </button>
          <button className="buttonsnavitem">
            <li className="navitem">
              <Link href="/cobol">
                <a
                  className={
                    isOpen === false ? "navlink" : "navlink" + " " + "active"
                  }
                  onClick={openMenu}
                >
                  <span>Cobol</span>
                  <svg className="svgButton">
                    <rect x="0" y="0" fill="none"></rect>
                  </svg>
                </a>
              </Link>
            </li>
          </button>
          <button className="buttonsnavitem">
            <li className="navitem">
              <Link href="/java">
                <a
                  className={
                    isOpen === false ? "navlink" : "navlink" + " " + "active"
                  }
                  onClick={openMenu}
                >
                  <span>Java</span>
                  <svg className="svgButton">
                    <rect x="0" y="0" fill="none"></rect>
                  </svg>
                </a>
              </Link>
            </li>
          </button>
          <button className="buttonsnavitem">
            <li className="navitem">
              <Link href="/frameworks">
                <a
                  className={
                    isOpen === false ? "navlink" : "navlink" + " " + "active"
                  }
                  onClick={openMenu}
                >
                  <span>Frameworks</span>
                  <svg className="svgButton">
                    <rect x="0" y="0" fill="none"></rect>
                  </svg>
                </a>
              </Link>
            </li>
          </button>
        </ul>

        <button
          className={`${
            isOpen === false ? "hamburger" : "hamburger" + " " + "active"
          } + button1`}
          onClick={openMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </>
  );
};

export default NavBar;
