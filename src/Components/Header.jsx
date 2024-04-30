import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import "./Hamburger.css";

export default function Header() {
  const [top, setTop] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // navbar shadow after scrolling
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    // show hamburger menu
    const resizeHandler = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, [top]);

  return (
    <>
      {screenWidth > 565 ? (
        <ul
          className={`z-1000 header fixed flex w-full p-4 gap-16 pr-24 justify-end ${
            !top && `shadow-lg`
          }`}
        >
          <li>
            <Link
              to="about"
              offset={-70}
              spy={true}
              smooth={true}
              duration={500}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
            >
              contact
            </Link>
          </li>
        </ul>
      ) : (
        <div
          className={`fixed header hamburger-menu w-screen z-100 pb-4 ${
            isOpen ? "open opacity-95 h-1/2 " : ""
          } ${!top && `shadow-lg`}`}
        >
          <div
            className={`hamburger mt-5 ml-5 ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {isOpen && (
            <div className="h-full mt-[10vw]">
              <ul className="flex flex-col items-center gap-y-12">
                <li>
                  <Link
                    onClick={toggleMenu}
                    to="about"
                    offset={-70}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    about
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleMenu}
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleMenu}
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
