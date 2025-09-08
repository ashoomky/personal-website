const Navbar = () => {
    return (
        <div className ="w-full h-18 bg-transparent flex items-center justify-center sticky top-0 z-50">
            {/* logo lhs */}
            <div className="p-6 absolute left-0">
                <a href="#" className="text-2xl font-bold">ashleeshum</a>
            </div>
            {/* nav links rhs */}
             <div className="flex flex-row space-x-4 right-0 absolute p-6">
                <a href="#home" className="relative group">
                    home
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#about" className="relative group" onClick={(e) => {
                    const section = document.getElementById('about');
                    section.scrollIntoView({behavior: 'smooth', block: 'start' }); 
                }}>
                    about
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="relative group">
                    experience
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className=" relative group">
                    projects
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            
        </div>
    )
}
export default Navbar