const Footer = () => {
    return (
        <footer className="flex flex-col justify-end bg-gray-700 text-white py-4 mt-8 h-[300px]">
            <div className=" container mx-auto text-center ">
                <p>&copy; {new Date().getFullYear()} Ashlee Shum. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;