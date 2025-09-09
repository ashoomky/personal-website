import { useRef } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YoutubeIcon from '@mui/icons-material/YouTube';

const LandingPage = () => {
    const svgRef = useRef(null);

    const handleMouseMove = (e) => {
        const svg = svgRef.current;
        const point = svg.createSVGPoint();
        point.x = e.clientX;
        point.y = e.clientY;

        const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());


        const spotlight = svg.querySelector('#spotlight-circle');
        if (spotlight) {
            spotlight.setAttribute('cx', svgPoint.x);
            spotlight.setAttribute('cy', svgPoint.y);
        }
    };
    return (
        <div id = "home" className = "w-screen h-[700px] flex items-center justify-center md:justify-start relative" onMouseMove = {handleMouseMove}>
            {/* background grain */}
            <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 650 650"
                preserveAspectRatio="xMidYMid slice"
                className="absolute object-cover w-full h-full"
            >
                <defs>
                    {/* spotlight filter */}
                    <filter id="spotlight">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="50" result="blur" />
                        <feBlend in="SourceGraphic" in2="blur" mode="lighten" />
                    </filter>
                    {/* Grainy filter */}
                    <filter id="grainy">
                        <feTurbulence type="turbulence" baseFrequency="0.8" />
                    </filter>
                </defs>
                {/* grainy circle */}
                <circle
                    id="grainy-circle"
                    cx="325"
                    cy="325"
                    r="325"
                    fill="#FFC0CB"
                    filter="url(#grainy)"
                />
                {/* Spotlight circle */}
                <circle
                    id="spotlight-circle"
                    cx="325"
                    cy="325"
                    r="90"
                    fill="#FFC0CB"
                    opacity="0.5"
                    filter="url(#spotlight)"
                />
            </svg>
            {/* intro */}
            <div className="text-6xl md:pl-30">
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
    )
}
export default LandingPage