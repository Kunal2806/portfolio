function Project() {

    const projectList = [
        {
            src:"./projectImg/chat.png",
            disc:"A chat website that does not store any type of user data.All data is deleted when the user disconnects from the server.",
            link:"https://github.com/Kunal2806/Chat",
            live:"",
        },
        {
            src:"./projectImg/todo.png",
            disc:"A full-stack To-Do application that allows users to manage tasks with secure authentication",
            link:"https://github.com/Kunal2806/ToDo",
            live:" https://to-do-virid-xi.vercel.app/",
        },
        {
            src:"./projectImg/portfolio.png",
            disc:"A responsive portfolio showcasing my projects and skills with a focus on clean design and smooth user experience.",
            link:"https://github.com/Kunal2806/portfolio",
            live:"https://portfolio-pycy.vercel.app/",
        },
    ]
    return (
        <div 
            className="w-full flex flex-col justify-center px-4 sm:px-6 md:px-8"    
        >
            <div
                style={{height: "calc(100vh - 200px)"}}
                className="w-full flex flex-col justify-center items-center text-white font-Lato text-center"
            >
                <h1 
                    className="text-lg sm:text-xl md:text-2xl"
                > Welcome to Kunal Goswami's
                </h1>
                <h1 
                    className="text-2xl sm:text-3xl md:text-4xl font-Jaro border-2 px-4 sm:px-6 md:px-8 lg:px-10 rounded-full bg-[#d1d3d4a9] text-[#000] py-1 mt-2"
                > PROJECT REPOSITORY    
                </h1>
                <p className="text-xs sm:text-sm m-2 text-[#d1d3d4a9] max-w-xs sm:max-w-lg md:max-w-2xl">Explore Kunal Goswami's projects and achievements. Each project reflects my professional journey, experiments, and learning experiences in web development.</p>
            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mx-2 sm:mx-8 md:mx-16 lg:mx-30 m-2"
            >
                {
                    projectList.map((_prop,i)=>(
                        <div key={i}
                            className="border-2 w-full max-w-[300px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] h-[400px] sm:h-[450px] md:h-[480px] lg:h-[500px] border-[#d1d3d4a9] hover:border-white"
                        >
                            <div className="p-2 h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] flex items-center ">
                                <img className="rounded-2xl" src={_prop.src} alt="project_ss" />
                            </div>
                            <div className="bg-[#15161A] h-[200px] sm:h-[230px] md:h-[240px] text-center p-4 sm:p-6 md:p-8 lg:p-10 m-2 flex flex-col justify-between">
                                <p className="text-white font-Lato text-sm sm:text-base md:text-lg lg:text-xl">{_prop.disc}</p>
                                <div className="flex justify-between items-center">
                                    {
                                        _prop.live?
                                        <a href={_prop.live} target="_blank">
                                            <p className="text-[#d1d3d4a9] hover:text-blue-500 text-xs sm:text-sm">Live Link {"->"}</p>
                                        </a>
                                        : <div/>
                                    }
                                    {
                                        _prop.link?
                                        <a href={_prop.link} target="_blank">
                                            <img className="size-6 sm:size-7 md:size-8" src="./images/github-icon.svg" alt="githublink" />
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

export default Project;
