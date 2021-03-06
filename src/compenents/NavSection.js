import React from 'react';

const NavSection = () => {
    return (
        <nav className="hidden py-2 px-4 font-bold text-gray-300 uppercase text-xs md:block">
            <ul className="flex space-x-5">
                <li className="hover:text-primary">
                    <a href="/#about">About</a>
                </li>
                <li className="hover:text-primary">
                    <a href="/#technical-skills">Technical Skills</a>
                </li>
                <li className="hover:text-primary">
                    <a href="/#portfolio">Portfolio</a>
                </li>
                <li className="hover:text-primary">
                    <a href="/#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavSection;