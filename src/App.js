import React, { useState } from "react";
import HeroSection from "compenents/HeroSection";
import AboutSection from "compenents/AboutSection";
import MobileMenu from "compenents/MobileMenu";
import NavSection from "compenents/NavSection";
import SocialIcons from "compenents/SocialIcons";
import PortfolioSection from "compenents/PortfolioSection";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <header className="bg-body shadow border-t-2 border-primary">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div>
              <a className="flex items-center hover:text-primary" href="/">
                <span className="text-primary font-bold text-xl">Petec0x0</span>
                {/* <svg className="h-6 w-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg> */}

                {/* <span className="mx-3 font-medium text-sm md:text-base">Onyedikachi Peter</span> */}
              </a>
            </div>
            <NavSection />
            <SocialIcons />
            {/* <!-- Hamburger Icon --> */}
            <button
              id="menu-btn"
              className={`${isClicked ? "open" : ""
                } block hamburger md:hidden focus:outline-none mt-2`}
              onClick={() => setIsClicked(!isClicked)}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </div>
      </header>
      {/* <!-- Mobile Menu --> */}
      <MobileMenu isClicked={isClicked} />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
    </>
  );
}

export default App;
