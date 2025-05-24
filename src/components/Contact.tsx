function Contact() {
    return (
        <div style={{height:"calc(100vh - 100px"}} className=" flex justify-between itmes-center">
            <div className="flex flex-col items-center justify-center w-1/2 text-white font-Lato">
                <p className="text-5xl">Turning Vision Into Reality <br/>With Code And Design.</p>
                <div className="flex justify-evenly w-full mt-15">
                    <a href="https://www.linkedin.com/in/kunal2806-dev/" target="_blank">
                        <div className="flex bg-[#70FFAF] text-black py-2 px-8 rounded-xl text-3xl">
                            <img src="./images/linkedin.svg" alt="linkedin" />
                            <h1 className="p-2">Linkedin</h1>
                        </div>  
                    </a>
                    <a href="https://github.com/Kunal2806" target="_blank">
                        <div className="flex bg-[#000] text-white py-2 px-8 rounded-xl text-3xl">
                            <img src="./images/github-icon.svg" alt="linkedin" />
                            <h1 className="p-2"> Github</h1>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-center w-1/2" >
                <img src="./images/logo1.svg" alt="logo" />
            </div>
        </div>
    )
}

export default Contact;