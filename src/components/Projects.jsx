const Projects = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1 className="py-4 text-gray-700">Projects</h1>
                    <p className="py-4 text-gray-600">Here are some of my recent projects. More coming soon!</p>
                    {/* Project 1 */}
                    <div className="bg-white p-4 border text-left m-6">
                        <h3 className="text-xl font-semibold mb-2">Project Title 1</h3>
                        <p className="text-gray-700">Description of project 1. This project involves...</p>    
                        <a href="#" className="text-blue-500 hover:underline">View Project</a>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-white p-4 border text-left m-6">
                        <h3 className="text-xl font-semibold mb-2">Project Title 2</h3>
                        <p className="text-gray-700">Description of project 2. This project involves...</p>    
                        <a href="#" className="text-blue-500 hover:underline">View Project</a>
                    </div>
                    {/* Project 3 */}
                    <div className="bg-white p-4 border text-left m-6">
                        <h3 className="text-xl font-semibold mb-2">Project Title 3</h3>
                        <p className="text-gray-700">Description of project 3. This project involves...</p>    
                        <a href="#" className="text-blue-500 hover:underline">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects