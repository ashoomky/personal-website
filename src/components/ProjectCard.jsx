import { X, ArrowLeft, File } from 'lucide-react';
import GitHubIcon from '@mui/icons-material/GitHub';
const ProjectCard = ({title, description, GitHubLink, TechStack, photo, isExpanded, isHidden, onToggle}) => {
    if (isHidden) return null;

    return (
        
        
        <div className={` transition-all duration-500 ease-out ${isExpanded ? 'w-[800px] h-[600px]' : 'w-100% h-[300px]'} bg-white p-4 text-left m-6`}>
            {!isExpanded ? (
                // folder card / collapsed state 
                <div className="relative flex flex-col border-2 justify-end items-start w-70 h-58 bg-amber-100 p-4 text-left border border-amber-300 rounded-b-lg cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg group" 
                    onClick={onToggle}>   
                    {/* folder tab */}
                    <div className="absolute -top-5 -left-0.5 w-35 h-5 bg-amber-100 border-t-2 border-l-2 border-r-2 border-amber-300 rounded-t-lg bg-amber-200">
                    </div>
                    {/* top edge highlight for 3D effect */}
                    <div className="absolute top-0 left-0 right-0 h-4 bg-amber-200"></div>
                    
                    {/* folder contents */}
                    <span className="text-xl font-bold"> {title}</span>
                    <p className="italic text-gray-800"> {TechStack} </p>

                </div>
            ) : (
                // file paper (expanded state)
                <div className="w-full h-full bg-white border-2 border-amber-400 rounded-lg shadow-2xl relative transition-all duration-500 ease-out">
                    {/* file header with yellow border */}
                    <div className="bg-amber-100 border-b-2 border-amber-400 p-7 rounded-t-lg relative">
                        {/* folder tab that stays visible - click to close as well */}
                        <div 
                            className="absolute -top-6 left-4 w-30 h-6 bg-amber-100 border-t-2 border-l-2 border-r-2 border-amber-400 rounded-t-lg cursor-pointer hover:bg-amber-200 transition-colors duration-200 flex items-center justify-center"
                            onClick={onToggle}
                            
                        >
                            {/* close button */}
                            <button 
                                className="absolute text-amber-600 hover:text-amber-800 transition-colors duration-200 cursor-pointer" 
                                onClick={onToggle}
                            >
                                <ArrowLeft className="w-6 h-6 cursor-pointer" />
                            </button>
                        </div>
                        
                        
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-bold text-gray-800 ">{title}</h2>
                            {GitHubLink && (
                                <div className="mt-auto">
                                    <a 
                                        href={GitHubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 hover:text-gray-600 text-black px-4 py-2 rounded-lg transition-colors duration-200"
                                    >
                                        <GitHubIcon className="w-10 h-10" />

                                    </a>
                                </div>
                            )}
                        </div>
                        <p className="text-lg font-semibold text-amber-600 italic">{TechStack}</p>
                    </div>

                    {/* file content area */}
                    <div className="p-6 h-full flex flex-col">
                        {/* project image */}
                        {photo && (
                            <div className="mb-6 flex justify-center">
                                <img 
                                    src={photo} 
                                    alt={title} 
                                    className="max-w-full max-h-64 object-contain rounded-lg shadow-md"
                                />
                            </div>
                        )}
                        
                        {/* description */}
                        <div className="m-4">
                            <p className="text-gray-700 leading-relaxed text-base">{description}</p>
                        </div>
                        

                        
                    </div>
                </div>
            )}
        </div>
    );
}
 export default ProjectCard
