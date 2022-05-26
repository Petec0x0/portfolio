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
import html from 'images/html.svg';
import css from 'images/css.svg';
import git from 'images/git.svg';
import laravel from 'images/laravel.svg';
import django from 'images/django.svg';
import react_native from 'images/react-native.svg';


const AboutSection = () => {
    return (
        <div id="about" className="bg-[#151d3f] md:px-24">
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

            <section id="technical-skills">
                <h2 className="text-white text-center text-2xl font-bold p-6">Technical skills</h2>
                <div className="flex flex-wrap justify-center lg:px-24">
                    <div className="p-4">
                        <img src={python} height={50} width={50} alt="Python" /> 
                    </div>
                    <div className="p-4">
                        <img src={php} height={50} width={50} alt="PHP" /> 
                    </div>
                    <div className="p-4">
                        <img src={javascript} height={50} width={50} alt="Javascript" /> 
                    </div>
                    <div className="p-4">
                        <img src={nodejs} height={50} width={50} alt="Node Js" /> 
                    </div>
                    <div className="p-4">
                        <img src={reactjs} height={50} width={50} alt="React Js" /> 
                    </div>
                    <div className="p-4">
                        <img src={git} height={50} width={50} alt="Git" /> 
                    </div>
                    <div className="p-4">
                        <img src={html} height={50} width={50} alt="HTML" /> 
                    </div>
                    <div className="p-4">
                        <img src={css} height={50} width={50} alt="CSS" /> 
                    </div>
                    <div className="p-4">
                        <img src={tailwindcss} height={50} width={50} alt="Tailwind CSS" /> 
                    </div>
                    <div className="p-4">
                        <img src={bootstrap} height={50} width={50} alt="Bootstrap" /> 
                    </div>
                    <div className="p-4">
                        <img src={laravel} height={50} width={50} alt="Laravel" /> 
                    </div>
                    <div className="p-4">
                        <img src={django} height={50} width={50} alt="Django" /> 
                    </div>
                    <div className="p-4">
                        <img src={mongodb} height={50} width={50} alt="MongoDB" /> 
                    </div>
                    <div className="p-4">
                        <img src={mysql} height={50} width={50} alt="MySQL" /> 
                    </div>
                    <div className="p-4">
                        <img src={react_native} height={50} width={50} alt="React Native" /> 
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutSection;