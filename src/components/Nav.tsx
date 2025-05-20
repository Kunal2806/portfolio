import { useState } from "react";

const Nav = () => { 
    const [hoverLogo, setHoverLogo] = useState({url: "/images/logo.svg", text: "Kunal Goswami"});
    return (
        <div className="w-full h-[100px]  ">
            <div className="px-30 w-full h-[80px] flex justify-between items-center border-b-2 border-blue-500">
                <div className="flex items-center cursor-pointer }">
                    <img src={hoverLogo.url} alt="logo" className="size-[42px] " 
                        onMouseEnter={()=>{setHoverLogo({url: "/images/logo1.svg", text: "KG 2806"})}}
                        onMouseLeave={()=>{setHoverLogo({url:"/images/logo.svg", text: "Kunal Goswami"})}}
                    />
                    <h1 className="text-white font-Jaro text-4xl">{hoverLogo.text}</h1>
                </div>
                <a href="https://drive.google.com/file/d/1tTz8dA1DSoSbfQQIOo0Q_dLRz_9VhzWt/view?usp=sharing" target="_black">
                    <div className="font-Lato text-black pr-6 py-2 pl-7 border-2  hover:bg-blue-300 transition duration-400 ease-in-out bg-blue-500 rounded-xl text-xl flex items-center justify-center">Resume {'>'}</div>
                </a>
            </div>
            <div className="pl-60 w-full flex justify-between items-center text-sm -translate-2">
                <div className="flex text-white gap-4 text-center">
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-360 280-560h400L480-360Z"/></svg>
                        <span className="border-1 py-1 px-6 font-Lato rounded-md flex flex-col items-center justify-center">
                        HOME</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-360 280-560h400L480-360Z"/></svg>
                        <span className="border-1 px-6 py-1 font-Lato rounded-md flex flex-col items-center justify-center">
                        PROJECTS</span>
                    </div >
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-360 280-560h400L480-360Z"/></svg>
                        <span className="border-1 px-6 py-1 font-Lato rounded-md flex flex-col items-center justify-center">
                        CONTACT</span>
                    </div>
                </div>
                <div className="mr-80 flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-360 280-560h400L480-360Z"/></svg>
                    <div className="text-white border-1 px-6 py-1 font-Lato rounded-md flex flex-col items-center justify-center">
                    PORTFOLIO
                </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;