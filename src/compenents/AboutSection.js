import React from 'react';
import profile from 'images/profile-1.jpg';

const AboutSection = () => {
    return (
        <div className="bg-[#151d3f] md:px-24">
            <div className="flex flex-col justify-center px-6 py-8 md:flex-row">
                <div className="flex md:w-1/3">
                    <img
                        className="self-center mx-auto rounded-lg border-x-8 w-1/2 border-primary"
                        alt="mentor1"
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
        </div>
    )
}

export default AboutSection;