import React from 'react';
import regtech from 'images/regtech.png';
import cbt from 'images/cbt-app.png';
import bootstrap from 'images/bootstrap.svg';
import javascript from 'images/javascript.svg';
import mongodb from 'images/mongodb.svg';
import mysql from 'images/mysql.svg';
import nodejs from 'images/nodejs.svg';
import php from 'images/php.svg';
// import python from 'images/python.svg';
import reactjs from 'images/reactjs.svg';
import GithubIcon from 'images/GithubIcon';
import PopupLinkIcon from 'images/PopupLinkIcon';
// import tailwindcss from 'images/tailwindcss.svg';
import html from 'images/html.svg';
import css from 'images/css.svg';

const PortfolioSection = () => {
    return (
        <div id="portfolio" className="bg-body py-8 px-12">
            <h1 className="text-white text-center text-3xl font-bold p-2">Portfolio</h1>
            <p className="text-white text-center md:mb-2">These are some of my personal projects, some are mobile apps, others are web apps.</p>
            <div className="flex flex-col md:flex-row justify-center">
                <div className="p-4 md:w-1/2 lg:w-1/3">
                    <img src={regtech} alt="Regtech" />
                </div>
                <div className="md:p-4 md:w-1/2">
                    <h2 className="text-white font-bold text-xl md:px-4 md:py-6">Regtech Web App</h2>
                    <p className="text-gray-300 py-2 md:px-4 md:py-0">
                        The Regtech app assists organizations in onboarding and building
                        confidence within their user base, preventing fraudsters from
                        accessing services, and meeting 'KYC' and regulatory requirements.
                    </p>
                    <div className="flex flex-row py-2 md:px-4">
                        <span className="text-white font-bold self-center">Built With: </span>
                        <img className="mx-1" src={nodejs} height={20} width={20} alt="Node Js" />
                        <img className="mx-1" src={reactjs} height={20} width={20} alt="React Js" />
                        <img className="mx-1" src={bootstrap} height={20} width={20} alt="Bootstrap" />
                        <img className="mx-1" src={mongodb} height={20} width={20} alt="MongoDB" />
                    </div>
                    <div className="flex flex-row md:px-4">
                        <a title="Github Link" className="flex items-center mx-2 text-white hover:text-primary" target="_blank" rel="noopener noreferrer" href="https://github.com/Petec0x0/Regtech-app">
                            <GithubIcon />
                        </a>
                        <a title="Demo Link" className="flex items-center mx-2 text-white hover:text-primary" target="_blank" rel="noopener noreferrer" href="https://regtech-hard.herokuapp.com/">
                            <PopupLinkIcon />
                        </a>
                    </div>
                </div>
            </div>
            <span className="p-10"></span>
            <div className="flex flex-col md:flex-row-reverse justify-center">
                <div className="p-4 md:w-1/2 lg:w-1/3">
                    <img src={cbt} alt="CBT App" />
                </div>
                <div className="md:p-4 md:w-1/2">
                    <h2 className="text-white font-bold text-xl md:px-4 md:py-6">CBT App</h2>
                    <p className="text-gray-300 py-2 md:px-4 md:py-0">
                        The CBT App is a web-based computer-based test program meant to help students 
                        prepare for JAMB, POST-UTME, and other similar tests.
                        Students can practice and enhance their speed and knowledge using this web application, 
                        which simulates a real test environment.
                    </p>
                    <div className="flex flex-row py-2 md:px-4">
                        <span className="text-white font-bold self-center">Built With: </span>
                        <img className="mx-1" src={html} height={20} width={20} alt="HTML" />
                        <img className="mx-1" src={css} height={20} width={20} alt="CSS" />
                        <img className="mx-1" src={javascript} height={20} width={20} alt="JavaScript" />
                        <img className="mx-1" src={php} height={20} width={20} alt="PHP" />
                        <img className="mx-1" src={mysql} height={20} width={20} alt="MySQL" />
                    </div>
                    <div className="flex flex-row md:px-4">
                        <a title="Github Link" className="flex items-center mx-2 text-white hover:text-primary" target="_blank" rel="noopener noreferrer" href="https://github.com/Petec0x0/cbt">
                            <GithubIcon />
                        </a>
                        <a title="Demo Link" className="flex items-center mx-2 text-white hover:text-primary" target="_blank" rel="noopener noreferrer" href="https://cbt-web-0x0.000webhostapp.com/">
                            <PopupLinkIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection;