import { useState } from "react";
import { Link, useLocation} from "react-router-dom";

const Nav = () => { 
    const [hoverLogo, setHoverLogo] = useState({url: "/images/logo.svg", text: "Kunal Goswami"});
    const {pathname} = useLocation();
    return (
        <div className="w-full h-[100px] sm:h-[80px] md:h-[90px] lg:h-[100px]">
            <div className={ pathname == "/home"?`px-30 w-full h-[80px] flex justify-between items-center border-b-4 border-[#3b82f6] transition duration-800 ease-in-out` :
                pathname == "/project"? `px-30 w-full h-[80px] flex justify-between items-center border-b-4 border-[#d1d3d4a9] transition duration-800 ease-in-out` :
                "px-4 sm:px-8 md:px-16 lg:px-30 w-full h-[60px] sm:h-[70px] md:h-[75px] lg:h-[80px] flex justify-between items-center border-b-4 border-[#70FFAF] transition duration-800 ease-in-out"
            }>
                <div className="flex items-center cursor-pointer">
                    <img
                        src={hoverLogo.url}
                        alt="Kunal Goswami logo"
                        className="size-[28px] sm:size-[32px] md:size-[38px] lg:size-[42px]"
                        onMouseEnter={() => setHoverLogo({ url: "/images/logo1.svg", text: "KG 2806" })}
                        onMouseLeave={() => setHoverLogo({ url: "/images/logo.svg", text: "Kunal Goswami" })}
                    />
                    <h1 className="text-white font-Jaro text-lg sm:text-2xl md:text-3xl lg:text-4xl ml-1 sm:ml-2">{hoverLogo.text}</h1>
                </div>
                <a
                    href="https://drive.google.com/file/d/1tTz8dA1DSoSbfQQIOo0Q_dLRz_9VhzWt/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Kunal Goswami's Resume"
                >
                    <div className={ pathname == '/home' ? `font-Lato text-black pr-6 py-2 pl-7 border-2 transition duration-800 ease-in-out  rounded-xl text-xl flex items-center justify-center bg-[#3b82f6] hover:bg-[#3b83f6e1]` :
                        pathname == '/project' ? `font-Lato text-black pr-6 py-2 pl-7 border-2 transition duration-800 ease-in-out  rounded-xl text-xl flex items-center justify-center bg-[#d1d3d4a9] hover:bg-[#ffffff]` :
                        `font-Lato text-black pr-2 sm:pr-4 md:pr-5 lg:pr-6 py-1 sm:py-1.5 md:py-2 pl-3 sm:pl-5 md:pl-6 lg:pl-7 border-2 transition duration-800 ease-in-out rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg lg:text-xl flex items-center justify-center bg-[#70FFAF] hover:bg-[#70ffaed2]`
                    }>
                        Resume {'>'}
                    </div>
                </a>
            </div>
            <div className="pl-4 sm:pl-20 md:pl-40 lg:pl-60 w-full flex justify-between items-center text-xs sm:text-sm -translate-2">
                <div className="flex text-white gap-2 sm:gap-3 md:gap-4 text-center">
                    <div className="flex flex-col items-center">
                        <svg className={pathname == "/home" ? "transition duration-800 ease-in-out w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" : "invisible"} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#3b82f6"><path d="M480-360 280-560h400L480-360Z"/></svg>                    
                        <Link to="/home" 
                            className= {pathname =="/home" ?" border px-2 sm:px-3 md:px-4 lg:px-5 py-1 pt-2 font-Lato rounded-md flex flex-col items-center justify-center transition duration-800 ease-in-out  border-[#3b82f6] hover:border-[#3b83f6e1]":
                                "border px-2 sm:px-3 md:px-4 lg:px-5 py-1 pt-2 font-Lato rounded-md flex flex-col items-center justify-center transition duration-800 ease-in-out"}  >
                            HOME
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg className={pathname == "/project" ? "transition duration-800 ease-in-out w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" : "invisible"}  xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#D1D3D4"><path d="M480-360 280-560h400L480-360Z"/></svg>
                        <Link to="/project" 
                            className= {pathname =="/project" ?"border px-2 sm:px-3 md:px-4 lg:px-5 py-1 pt-2 font-Lato rounded-md flex flex-col items-center justify-center transition duration-800 ease-in-out  border-[#d1d3d4a9] hover:border-[#ffffff]":
                                "border px-2 sm:px-3 md:px-4 lg:px-5 py-1 pt-2 font-Lato rounded-md flex flex-col items-center justify-center transition duration-800 ease-in-out"}  >
                            PROJECTS
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg className={pathname == "/contact" ? "transition duration-800 ease-in-out w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" : "invisible"}  xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#70FFAF"><path d="M480-360 280-560h400L480-360Z"/></svg>
                        <Link to="/contact"
                            className= {pathname =="/contact" ?"border px-2 sm:px-3 md:px-4 lg:px-5 py-1 pt-2 font-Lato rounded-md flex flex-col items-center justify-center transition duration-800 ease-in-out  border-[#70FFAF] hover:border-[#70ffaed2]":
                                "border px-2 sm:px-3 md:px-4 lg:px-5 py-1 pt-2 font-Lato rounded-md flex flex-col items-center justify-center transition duration-800 ease-in-out"}  >
                                CONTACT
                        </Link>
                    </div>
                </div>
                <div className="mr-4 sm:mr-20 md:mr-40 lg:mr-80 flex flex-col items-center">
                    <div className={pathname == '/home' ? `border px-2 sm:px-3 md:px-4 lg:px-5 py-1 pt-2 font-Lato rounded-md flex flex-col items-center justify-center transition duration-800 ease-in-out  bg-[#3b82f6] hover:bg-[#3b83f6e1]` :
                        pathname == '/project' ? `border px-2 sm:px-3 md:px-4 lg:px-5 py-1 pt-2 font-Lato rounded-md flex flex-col items-center justify-center transition duration-800 ease-in-out  bg-[#d1d3d4a9] hover:bg-[#ffffff]` :
                        `border px-2 sm:px-3 md:px-4 lg:px-5 py-1 pt-2 font-Lato rounded-md flex flex-col items-center justify-center transition duration-800 ease-in-out  bg-[#70FFAF] hover:bg-[#70ffaed2]`}>
                        PORTFOLIO
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;