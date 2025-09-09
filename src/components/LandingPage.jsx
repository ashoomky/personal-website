import { useRef, useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YoutubeIcon from '@mui/icons-material/YouTube';

const LandingPage = () => {
    const svgRef = useRef(null);
    const [scroll, setScroll] = useState(0);

    const handleMouseMove = (e) => {
        const svg = svgRef.current;
        const rect = svg.getBoundingClientRect(); // get SVG position and size
        const x = ((e.clientX - rect.left) / rect.width) * 100; // mouse X relative to the SVG
        const y = ((e.clientY - rect.top) / rect.height) * 100;  // mouse Y relative to the SVG

        // update the radial gradient's center
        const gradient = svg.querySelector('#dynamic-gradient');
        if (gradient) {
            gradient.setAttribute('cx', `${x}%`);
            gradient.setAttribute('cy', `${y}%`);
        }
    };
    return (
        <div className = "w-full">
            {/* nav bar */}
            <div className ="absolute w-full h-18 flex items-center justify-center top-0 z-50">
            {/* logo lhs */}
                <div className="p-6 absolute left-6">
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
            <div id = "home" className = "w-screen h-screen flex items-center justify-center md:justify-start relative bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100" onMouseMove = {handleMouseMove}>
            
            {/* background grain */}
            <svg
                    ref={svgRef}
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    className="absolute object-cover w-full h-full"
                >
                    {/*  svg pipeline - each step alters the svg file */}
                    <defs>
                        {/* noise filter for grain effect */}
                        <filter id="noise" x="0%" y="0%" width="100%" height="100%">
                            <feTurbulence 
                                type="turbulence" /// type of noise
                                baseFrequency="0.6" // how intense
                                numOctaves="5" // adds layers for complexity 
                                stitchTiles="stitch"
                                result="noise" // saves result for next step
                            />
                            <feColorMatrix 
                                type="saturate" 
                                values="0" // removes all colour
                                in="noise" // applies the previous step (feTurbulence)
                                result="monoNoise" // saves for next step
                            />
                            <feComponentTransfer in="monoNoise" result="opacityNoise"> 
                                <feFuncA type="discrete" tableValues="0.05 0.1 0.15 0.2" /> // randomly maps the grayscale noise to low opacity values
                            </feComponentTransfer>
                            <feBlend mode="multiply" in="opacityNoise" in2="SourceGraphic" />
                        </filter>

                        {/* Dynamic radial gradient that lightens on mouse hover */}
                        <radialGradient id="dynamic-gradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                            <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.4" />
                            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    
                    {/* Background rectangle with gradient and grain */}
                    <rect width="100%" height="100%" fill="url(#dynamic-gradient)" filter="url(#noise)" />
                </svg>
            {/* intro */}
            <div className="text-6xl md:pl-30 z-10">
                Hi! My name is <br />
                <span className="font-bold">Ashlee Shum.</span>
            </div>
            {/* social icon links */}
            <div className="flex flex-row absolute pt-50 md:pl-30">
                <a href="mailto:ashlee@shum.co.nz" target="_blank" rel="noopener noreferrer">
                    <MailIcon className="m-4 ml-0"/>
                </a>
                <a href="https://github.com/ashoomky" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="m-4"/>
                </a>
                <a href="https://www.linkedin.com/in/ashleeshum" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="m-4"/>
                </a>
                <a href="https://www.youtube.com/@ashoomky" target="_blank" rel="noopener noreferrer">
                    <YoutubeIcon className="m-4"/>
                </a>
            </div>
        </div>
        </div>
    )
}
export default LandingPage