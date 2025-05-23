function Project() {

    const projectList = [
        {
            src:"./projectImg/chat.png",
            disc:"A chat website that does not store any type of user data.All data is deleted when the user disconnects from the server."
        },
        {
            src:"./projectImg/todo.png",
            disc:"A full-stack To-Do application that allows users to manage tasks with secure authentication"
        },
        {
            src:"./projectImg/portfolio.png",
            disc:"A responsive portfolio showcasing my projects and skills with a focus on clean design and smooth user experience."
        },
    ]
    return (
        <div 
            className="w-full flex flex-col justify-center"    
        >
            <div
                style={{height: "calc(100vh - 280px"}}
                className="w-full flex flex-col justify-center items-center text-white font-Lato text-center"
            >
                <h1 
                    className="text-2xl"
                > Welcome to
                </h1>
                <h1 
                    className="text-4xl font-Jaro border-2 px-10 rounded-full bg-[#d1d3d4a9] text-[#000] py-1"
                > REPOSITORY    
                </h1>
                <p className="text-xs m-2 text-[#d1d3d4a9]">Each project reflects my journey, experiments,<br/> and learning experiences.</p>
            </div>

            <div
                className="grid grid-cols-3 place-items-center gap-10 mx-30 m-2"
            >
                {
                    projectList.map((_prop,i)=>(
                        <div key={i}
                            className="border-2 w-[400px] h-[500px] border-[#d1d3d4a9] hover:border-white"
                        >
                            <div className="p-2 h-[250px] flex items-center ">
                                <img className="rounded-2xl" src={_prop.src} alt="project_ss" />
                            </div>
                            <div className="bg-[#15161A] h-[240px] text-center p-10 m-2">
                                <p className="text-white font-Lato text-xl">{_prop.disc}</p>
                            </div>                           
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Project;
