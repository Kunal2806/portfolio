function Project() {

    const projectList = [
        
    ]
    return (
        <div 
            className="w-full not-first:flex justify-center"    
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
                className="grid grid-cols-3"
            >

            </div>
        </div>
    )
}

export default Project;
