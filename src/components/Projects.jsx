import { GitHub } from "@mui/icons-material"
import ProjectCard from "./ProjectCard"
import FindrScreenshot from "../assets/FindrScreenshot.png"
const Projects = () => {
    const projects = [
        {
            title: "Findr",
            description: "Finder is a unique web application inspired by Tinder, where you can save planets by swiping right. Access your saved planets and learn more about the cosmos while contributing to the ultimate theme of escaping Earth.",
            GitHubLink: "https://github.com/evanautianle/HACKATHON2024-print-Hello-World-",
            TechStack: "HTML, CSS, JavaScript, GitHub",
            photo: FindrScreenshot
        },
        {
            title: "Project 2",
            description: "This is a description of project 2"   
        },
        {
            title: "Project 3",
            description: "This is a description of project 3"   
        },
    ]
    return (
        <div id="projects" className="w-full justify-center p-20">
            {/* title */}
            <div className="text-4xl">
                projects
            </div>
            {/* project cards */}
            <div className="flex md:flex-row flex-col justify-center items-center">
                {projects.map((project, index) => (
                    <ProjectCard 
                    key={index} 
                    title={project.title} 
                    description={project.description} 
                    GitHubLink={project.GitHubLink}
                    TechStack={project.TechStack}
                    photo={project.photo}
                    />
                ))}
            </div>
        </div>
    )
}
export default Projects