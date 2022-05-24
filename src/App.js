import React, { useState } from "react";
import HeroSection from "compenents/HeroSection";
import AboutSection from "compenents/AboutSection";
import MobileMenu from "compenents/MobileMenu";
import NavSection from "compenents/NavSection";
import SocialIcons from "compenents/SocialIcons";
import PortfolioSection from "compenents/PortfolioSection";
import ContactSection from "compenents/ContactSection";

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
      <ContactSection />
      {/* Footer section */}
      <div className="bg-[#151d3f] border-b-2 border-primary md:px-24">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-center">
            <p className="text-xs text-white">@ 2022 - Petec0x0</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
