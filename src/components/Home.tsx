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
        <div style={{position:"relative", height: "calc(90vh - 80px)", width: "95vw"}} className="flex justify-center items-center mt-[27px] px-4 sm:px-6 md:px-8">
            <div  className="pointer-events-none absolute top-0 left-0 right-0 bottom-0 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-col justify-center items-center px-4">
                <h1 className="font-Lato text-center">Hi, I'm Kunal Goswami</h1>
                <h2 className="font-Lato text-xl sm:text-2xl md:text-2xl lg:text-3xl mt-2">FULL STACK</h2>
                <hr className="bg-[#3b82f6] border-[#3b82f6] h-[2px] sm:h-[3px] w-32 sm:w-48 md:w-56 lg:w-64 m-1 rounded-full" />
                <h2 className="font-Jaro text-center">Web Developer</h2>
                <p className="text-sm sm:text-base md:text-lg font-Lato mt-4 text-center max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                    Passionate about creating innovative web solutions with modern technologies. 
                    Explore my professional background, achievements, and projects.
                </p>
            </div>
            <div ref={constraintsRefs} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 h-full w-full place-items-center gap-2 sm:gap-4" >
                {
                    skills.map((_src, i)=> {
                        if(i==7) {
                            return [
                                <div key="empty" className="size-8 sm:size-10 md:size-12 lg:size-16"/>,
                                <motion.img className="size-8 sm:size-10 md:size-12 lg:size-16 zindex-9999 cursor-grab" key={i} src={_src} alt="skill" 
                                    drag
                                    dragConstraints={constraintsRefs}
                                />
                            ] ;
                        }
                        return(
                            <motion.img className="size-8 sm:size-10 md:size-12 lg:size-16 zindex-9999 cursor-grab" key={i} src={_src} alt="skill" 
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