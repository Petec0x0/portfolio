import React from 'react';
import profile from 'images/profile-1.jpg';
import bootstrap from 'images/bootstrap.svg';
import javascript from 'images/javascript.svg';
import mongodb from 'images/mongodb.svg';
import mysql from 'images/mysql.svg';
import nodejs from 'images/nodejs.svg';
import php from 'images/php.svg';
import python from 'images/python.svg';
import reactjs from 'images/reactjs.svg';
import tailwindcss from 'images/tailwindcss.svg';


const AboutSection = () => {
    return (
        <div className="bg-[#151d3f] md:px-24">
            <div className="flex flex-col justify-center px-6 py-8 md:flex-row">
                <div className="flex md:w-1/3">
                    <img
                        className="self-center mx-auto rounded-lg border-x-8 w-1/2 border-primary"
                        alt="Profile"
                        src={profile}
                    />
                </div>
                <div className="text-center md:w-8/12 md:text-left">
                    <h1 className="font-bold text-white text-2xl text-center mt-4 md:text-left">
                        About me
                    </h1>
                    <p className="my-8 text-gray-300">
                        Software developer and Machine Learning enthusiast passionate about
                        technology and constant learning, with experience in developing web
                        and mobile applications.
                        Proficient with object-oriented programming languages as well
                        as algorithms and data structures.
                    </p>
                </div>
            </div>

            <section>
                <h2 className="text-white text-center text-2xl font-bold p-6">Technical skills</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="p-4">
                        <img src={python} height={65} width={65} alt="Python" /> 
                    </div>
                    <div className="p-4">
                        <img src={php} height={65} width={65} alt="PHP" /> 
                    </div>
                    <div className="p-4">
                        <img src={javascript} height={65} width={65} alt="Javascript" /> 
                    </div>
                    <div className="p-4">
                        <img src={nodejs} height={65} width={65} alt="Node Js" /> 
                    </div>
                    <div className="p-4">
                        <img src={reactjs} height={65} width={65} alt="React Js" /> 
                    </div>
                    <div className="p-4">
                        <img src={tailwindcss} height={65} width={65} alt="Tailwind CSS" /> 
                    </div>
                    <div className="p-4">
                        <img src={bootstrap} height={65} width={65} alt="Bootstrap" /> 
                    </div>
                    <div className="p-4">
                        <img src={mongodb} height={65} width={65} alt="MongoDB" /> 
                    </div>
                    <div className="p-4">
                        <img src={mysql} height={65} width={65} alt="MySQL" /> 
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutSection;