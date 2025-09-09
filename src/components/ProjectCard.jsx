import { X, File } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
const ProjectCard = ({title, description, GitHubLink, TechStack, photo}) => {
    const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);

    return (
        
        <div className="w-100% h-[300px] bg-white p-4 text-left m-6">
            {/* folder card */}
            <div className="relative flex flex-col justify-end items-start w-64 h-60 bg-amber-100 p-4 text-left m-6 border border-amber-300 rounded-lg cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg group" 
                onClick={() => setIsPopUpOpen(true)}>  
                {/* folder tab */}
                <div className="absolute -top-4 left-0 w-30 h-6 bg-amber-100 border-t border-l border-r border-amber-300 rounded-t-lg"></div>
                        
                
                {/* folder contents */}
                <span className="text-xl font-bold"> {title}</span>
                <br></br>
                <p className="text-sm">{description}</p>
            </div>

            {/* popup modal */}
            {isPopUpOpen && (
                <div className="fixed inset-0  bg-black/30 bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg h-[350px] w-[700px] relative items-center text-center justify-end flex flex-col transition-all duration-500 ease-out transform"
                    style={{
                        backgroundImage: `url(${photo})`, // background image
                        backgroundSize: "cover",           // cover the container
                        backgroundPosition: "center",      // center the image
                    }}>
                        {/* dark overlay */}
                        <div className="absolute inset-0 bg-black/60 rounded-lg"></div> 

                        <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className="absolute left-4 top-4 text-white"/>
                        </a>
                        <button className="absolute top-4 right-4 text-gray-100 hover:text-gray-400" onClick={() => setIsPopUpOpen(false)}>
                            <X className="w-6 h-6 cursor-pointer" />
                        </button>
                        <div className="mb-8 z-10">
                            <h2 className="text-2xl font-bold text-white">{title}</h2>
                            <p className="text-sm font-bold text-white">{TechStack}</p>
                        </div>

                </div> 
                

                </div>
            )}
        </div>
    );
}
export default ProjectCard;