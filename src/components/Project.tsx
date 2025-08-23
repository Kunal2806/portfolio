import {motion} from "motion/react";
import { useRef } from "react";

function Home() {

    const constraintsRefs = useRef(null);
    const skills =[
        "./images/react.svg",
        "./images/nodejs.svg",
        "./images/honojs.svg",
        "./images/expressjs.svg",
        "./images/figma.svg",
        "./images/css.svg",
        "./images/html.svg",
        "./images/typescript.svg",
        "./images/tailwind.svg",
        "./images/javascript.svg",
        "./images/github.svg",
        "./images/git.svg",
        "./images/mongo.svg",
        "./images/sql.svg",
    ]
    return (
        <div className="w-full flex flex-col justify-center px-4 py-8">
            <div
                className="w-full flex flex-col justify-center items-center text-white font-Lato text-center mb-8"
            >
                <h1 className="text-lg sm:text-xl md:text-2xl mb-2">
                    Welcome to Kunal Goswami's
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-Jaro border-2 px-4 sm:px-6 md:px-10 rounded-full bg-[#d1d3d4a9] text-[#000] py-1">
                    PROJECT REPOSITORY    
                </h1>
                <p className="text-xs sm:text-sm md:text-base m-2 text-[#d1d3d4a9] max-w-2xl">
                    Explore Kunal Goswami's projects and achievements. Each project reflects my professional journey, 
                    <br className="hidden md:block"/> experiments, and learning experiences in web development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
                {
                    projectList.map((_prop,i)=>(
                        <div key={i}
                            className="border-2 w-full max-w-[360px] h-auto border-[#d1d3d4a9] hover:border-white transition-colors duration-300"
                        >
                            <div className="p-2 h-[200px] sm:h-[240px] flex items-center">
                                <img className="rounded-2xl w-full h-full object-cover" src={_prop.src} alt={`Kunal Goswami project screenshot ${i + 1}`} />
                            </div>
                            <div className="bg-[#15161A] min-h-[200px] sm:h-[240px] text-center p-4 sm:p-6 md:p-8 lg:p-10 m-2 flex flex-col justify-between">
                                <p className="text-white font-Lato text-sm sm:text-base md:text-lg lg:text-xl mb-4">{_prop.disc}</p>
                                <div className="flex justify-between items-center mt-auto">
                                    {
                                        _prop.live?
                                        <a href={_prop.live} target="_blank">
                                            <p className="text-[#d1d3d4a9] hover:text-blue-500 text-sm sm:text-base">Live Link {"->"}</p>
                                        </a>
                                        : <div/>
                                    }
                                    {
                                        _prop.link?
                                        <a href={_prop.link} target="_blank">
                                            <img className="w-6 h-6 sm:w-8 h-8" src="./images/github-icon.svg" alt="GitHub repository link" />
                                        </a>
                                        : <div/>
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;