import React from 'react';
import developer from 'images/developer.svg';

const HeroSection = () => {
    return (
        <>
            {/* <!-- hero --> */}
            <div className="hero bg-body py-8">
                {/* <!-- container --> */}
                <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                    {/* <!-- hero wrapper --> */}
                    <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                        {/* <!-- hero text --> */}
                        <div className="hero-text col-span-6">
                            <h1 className="text-3xl md:text-5xl max-w-xl text-white leading-tight">
                                Hello, I am <span className="font-bold">Onyedikachi Udeh</span>
                            </h1>
                            <hr className="w-12 h-1 bg-primary rounded-full mt-8" />
                            <p className="text-white text-base leading-relaxed mt-8 font-semibold">Software developer and Machine Learning enthusiast from Enugu, Nigeria</p>
                            <img className="md:hidden" src={developer} alt="Developer illustration" />
                            <div className="get-app flex space-x-5 mt-10 justify-center md:justify-start">
                                <button className="apple bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-2">
                                    <div className="logo">
                                        <svg className="w-6 h-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 60 60">
                                            <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689
	                                                c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01
	                                                c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z"/>
                                        </svg>
                                    </div>
                                    <div className="text">
                                        <p className=" text-xs font-semibold text-gray-900">Reach out to me</p>
                                    </div>
                                </button>
                                <button className="google bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-2">
                                    <div className="image">
                                        <svg className="w-6 h-6" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.79 122.88"><title>download-file</title><path d="M65.59,67.32h38.82a9.41,9.41,0,0,1,9.38,9.38v36.79a9.41,9.41,0,0,1-9.38,9.39H65.59a9.41,9.41,0,0,1-9.38-9.39V76.7a9.41,9.41,0,0,1,9.38-9.38ZM60,11.56,79.73,30.07H60V11.56ZM20.89,70a2.14,2.14,0,0,0-2,2.23,2.1,2.1,0,0,0,2,2.22H45.67V70Zm0,16a2.14,2.14,0,0,0-2,2.23,2.1,2.1,0,0,0,2,2.23H45.67V85.91Zm0-47.89a2.14,2.14,0,0,0-2,2.23,2.11,2.11,0,0,0,2,2.23H43.81a2.14,2.14,0,0,0,2-2.23,2.11,2.11,0,0,0-2-2.23Zm0-16a2.14,2.14,0,0,0-2,2.23,2.1,2.1,0,0,0,2,2.23h12.6a2.14,2.14,0,0,0,2-2.23,2.11,2.11,0,0,0-2-2.23Zm0,31.93a2.14,2.14,0,0,0-2,2.23,2.12,2.12,0,0,0,2,2.23H59.65a2.14,2.14,0,0,0,2-2.23,2.1,2.1,0,0,0-2-2.23ZM90.72,32.72a3.28,3.28,0,0,0-2.39-3.17L59.23,1.21A3.27,3.27,0,0,0,56.69,0H5.91A5.91,5.91,0,0,0,0,5.91V107.12A5.91,5.91,0,0,0,5.91,113H45.76v-6.6H6.61V6.57H53.37V33.36a3.32,3.32,0,0,0,3.32,3.31H84.12V58.29h6.6V32.72Zm6.45,60.62a2.4,2.4,0,0,1,2.06,1c1.08,1.62-.4,3.22-1.42,4.35-2.91,3.19-9.49,9-10.92,10.66a2.37,2.37,0,0,1-3.72,0c-1.49-1.73-8.43-7.86-11.19-11-1-1.08-2.15-2.56-1.15-4a2.42,2.42,0,0,1,2.07-1h5.17V84.07A2.92,2.92,0,0,1,81,81.15H89.1A2.92,2.92,0,0,1,92,84.07v9.27Z" /></svg>
                                    </div>
                                    <div className="text">
                                        <p className="text-xs font-semibold text-gray-900">Resume</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* <!-- hero image --> */}
                        <div className="hero-image hidden col-span-6 md:block">
                            <img src={developer} alt="Developer" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end hero --> */}
        </>
    )
}

export default HeroSection;