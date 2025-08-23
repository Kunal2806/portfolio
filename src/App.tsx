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
                <h2 className="font-Lato text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">FULL STACK</h2>
                <hr className="bg-[#3b82f6] border-[#3b82f6] h-[2px] sm:h-[3px] w-32 sm:w-48 md:w-64 m-1 rounded-full" />
                <h2 className="font-Jaro text-xl sm:text-2xl md:text-3xl lg:text-4xl">Web Developer</h2>
                <p className="text-sm sm:text-base md:text-lg font-Lato mt-4 text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl px-4">
                <h2 className="font-Lato text-3xl mt-2">FULL STACK</h2>
                <hr className="bg-[#3b82f6] border-[#3b82f6] h-[3px] w-64 m-1 rounded-full" />
                <h2 className="font-Jaro">Web Developer</h2>
                <p className="text-lg font-Lato mt-4 text-center max-w-2xl">
                    Passionate about creating innovative web solutions with modern technologies. 
                    Explore my professional background, achievements, and projects.
                </p>
            </div>
            <div ref={constraintsRefs} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 h-full w-full place-items-center gap-2 sm:gap-4 p-4">
                {
                    skills.map((_src, i)=> {
                        if(i==7) {
                            return [
                                <div key="empty" className="size-8 sm:size-12 md:size-16"/>,
                                <motion.img className="size-8 sm:size-12 md:size-16 z-50 cursor-grab" key={i} src={_src} alt="skill" 
                                    drag
                                    dragConstraints={constraintsRefs}
                                />
                            ] ;
                        }
                        return(
                            <motion.img className="size-8 sm:size-12 md:size-16 z-50 cursor-grab" key={i} src={_src} alt="skill" 
                                drag
                                dragConstraints={constraintsRefs}
                            /> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;