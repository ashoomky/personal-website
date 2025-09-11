const ExperienceCard = ({title, start, end, description}) => {
    return (
        <div className="w-100% bg-white p-4 text-left m-6 border-t ">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-500 text-sm">{start} - {end}</p>
            <p className="text-gray-700 mt-2">{description}</p>
        </div>
    );
}   
export default ExperienceCard  