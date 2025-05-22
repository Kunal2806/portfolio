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
        <div style={{position:"relative", height: "calc(90vh - 80px)", width: "95vw"}} className="flex justify-center items-center mt-[27px]">
            <div  className="pointer-events-none absolute top-0 left-0 right-0 bottom-0 text-white text-5xl flex flex-col justify-center items-center">
                <h1 className="font-Lato">FULL STACK</h1>
                <hr className="bg-[#3b82f6] border-[#3b82f6] h-[3px] w-64 m-1 rounded-full" />
                <h1 className="font-Jaro">Web Developer</h1>
            </div>
            <div ref={constraintsRefs} className="grid grid-cols-5 h-full w-full place-items-center" >
                {
                    skills.map((_src, i)=> {
                        if(i==7) {
                            return [
                                <div key="empty" className="size-16"/>,
                                <motion.img className="size-16 zindex-9999 cursor-grab" key={i} src={_src} alt="skill" 
                                    drag
                                    dragConstraints={constraintsRefs}
                                />
                            ] ;
                        }
                        return(
                            <motion.img className="size-16 zindex-9999 cursor-grab" key={i} src={_src} alt="skill" 
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