const AboutMe = () => {
    return (
        <div className="w-full h-[800px] pt-30 justify-center border">
            <div className="text-4xl">
                about me: 
            </div>
            {/* pictures and description section */}
            <div className="flex flex-row pt-5 justify-center items-center">
                {/* photo cards */}
                <div className="w-[300px] h-[300px] bg-gray-300 m-10">
                    picture
                </div>
                {/* description */}
                <div className="w-1/2 h-1/2 m-10 text-left">
                    <p className="pb-4">
                        hiya! I am currently a student at the University of Auckland in my penultimate year, studying a Bachelor of Science majoring in Computer Science. I have a passion for creating beautiful and functional web applications that solve real-world problems. 
                    </p>
                    <p className="pb-4">
                        in my free time I enjoy editing videos, travelling, hitting the gym and listening to music. I'm always eager to learn and take on new challenges, and making genuine connections with people.
                    </p>
                    <p className="pb-4">
                        thank you for visiting my website :)
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AboutMe