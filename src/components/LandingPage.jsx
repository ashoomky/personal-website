import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YoutubeIcon from '@mui/icons-material/YouTube';

const LandingPage = () => {
    return (
        <div id = "home" className = "w-screen h-[600px] flex items-center md:pl-30 justify-center md:justify-start bg-gray-to-b from-white via-white to-gray-200 relative">
            {/* intro */}
            <div className="text-6xl">
                Hi! My name is <br />
                <span className="font-bold">Ashlee Shum.</span>
            </div>
            {/* social icon links */}
            <div className="flex flex-row absolute pt-50 ">
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