import React from 'react';

const NavSection = () => {
    return (
        <nav className="hidden py-2 px-4 font-bold text-gray-300 uppercase text-xs md:block">
            <ul className="flex space-x-5">
                <li className="hover:text-primary">
                    <a href="/#">About</a>
                </li>
                <li className="hover:text-primary">
                    <a href="/">Technical Skills</a>
                </li>
                <li className="hover:text-primary">
                    <a href="/#">Portfolio</a>
                </li>
                <li className="hover:text-primary">
                    <a href="/#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavSection;