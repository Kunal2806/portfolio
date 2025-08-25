function Contact() {
    return (
        <div style={{height:"calc(100vh - 100px"}} className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2 text-white font-Lato mb-8 lg:mb-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-center">Connect with Kunal Goswami</h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-center">Turning Vision Into Reality <br className="hidden sm:block"/>With Code And Design.</p>
                <p className="text-sm sm:text-base md:text-lg mt-4 text-center text-gray-300 max-w-xs sm:max-w-lg">
                    Ready to collaborate? Let's discuss your next project and bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly w-full max-w-md sm:max-w-lg mt-8 sm:mt-12 md:mt-15 gap-4 sm:gap-0">
                    <a href="https://www.linkedin.com/in/kunal2806-dev/" target="_blank">
                        <div className="flex bg-[#70FFAF] text-black py-2 px-4 sm:px-6 md:px-8 rounded-xl text-lg sm:text-xl md:text-2xl lg:text-3xl items-center justify-center">
                            <img src="./images/linkedin.svg" alt="linkedin" className="w-6 h-6 sm:w-8 sm:h-8" />
                            <h1 className="p-2 sm:p-2">Linkedin</h1>
                        </div>  
                    </a>
                    <a href="https://github.com/Kunal2806" target="_blank">
                        <div className="flex bg-[#000] text-white py-2 px-4 sm:px-6 md:px-8 rounded-xl text-lg sm:text-xl md:text-2xl lg:text-3xl items-center justify-center">
                            <img src="./images/github-icon.svg" alt="github" className="w-6 h-6 sm:w-8 sm:h-8" />
                            <h1 className="p-2 sm:p-2"> Github</h1>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2 mt-8 lg:mt-0" >
                <img src="./images/logo1.svg" alt="logo" className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-auto lg:h-auto" />
            </div>
        </div>
    )
}

export default Contact;