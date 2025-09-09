import ExperienceCard from "./ExperienceCard"
import {useRef, useState, useEffect} from "react"

const Experience = () => {
    const experiences = [
  {
    title: "Marketing Director at UOACS (University of Auckland Compsci Society)",
    start: "July 2025",
    end: "Current",
    description: (
      <>
        As a Marketing Director I lead meetings, delegate tasks to my team and brainstorm content ideas. <br />
        Lead a team of <strong>4</strong> to coordinate marketing efforts across platforms, boosting account engagement by <strong>278.1%</strong> in a month.
      </>
    )
  },
  {
    title: "YouTube Editor / Vlogger",
    start: "September 2022",
    end: "Current",
    description: (
      <>
        I film, edit and post videos for my own monetised YouTube channel. <br />
        Content revolves around <strong>lifestyle, wellbeing, university, and badminton</strong>.
      </>
    )
  },
  {
    title: "FOH at Little Penang",
    start: "Feb 2023",
    end: "June 2023",
    description: (
      <>
        Waitressed at Little Penang and multitasked making drinks, taking orders, delivering food, and attending to customers throughout shifts. <br />
        Learned to manage <strong>high-volume orders efficiently</strong> and provide excellent customer service.
      </>
    )
  }
];

    const cardRef = experiences.map(() => useRef(null));
    const [activeIndex, setActiveIndex] = useState(0);

    // intersection observer to track which card is in view and fill dot
    useEffect(() => {
        // create new intersection observer
        const observer = new IntersectionObserver(
            // entries - the list of cards being observed
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardRef.findIndex(ref => ref.current === entry.target);
                        if (index !== -1) { // matches, returns index of card in view
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                root: null,  // viewport - entire screen
                rootMargin: "-40% 0px -50% 0px", // top, right, bottom, left - trigger when middle of card is in middle of screen
                threshold: 0         
            }
        );

        // for each card, attach an intersection observer to it
        cardRef.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });
        
        // clean up - when component unmounts (not on page anymore), stop observing
        return () => {
            cardRef.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [cardRef]);
    // runs everytime cardRef changes


    const scrollToCard = (index) => {
        if (cardRef[index].current) {
            cardRef[index].current.scrollIntoView({behavior: 'smooth', block: 'center'});
            setActiveIndex(index); // updates active index when clicking on a dot

        }
    };
    return (
        <div id="experience" className="w-full h-[1000px] text-center pt-20 ">
            {/* title */}
            <span className="text-4xl">
                experience
            </span>
            {/* experience contents */}
            <div className="flex flex-col relative mt-10 "> 
                {/* vertical timeline indicator */}
                <div className="absolute top-10 left-25 transform -translate-x-1/2 w-1 bg-[#C6A6B8] hidden md:block "
                style={{ bottom: "15rem" }}  
                ></div>
     
                {/* experience cards with circles */}
                <div className="flex md:flex-1 flex-col space-y-16">
                    {experiences.map((exp, i) => (
                        <div key={i} ref={cardRef[i]} className="relative flex">
                            {/* circle beside timeline */}
                            <button
                                onClick={() => scrollToCard(i)}
                                className={`absolute top-10 left-25 transform -translate-x-1/2 w-5 h-5 border-[3px] border-[#C6A6B8] rounded-full hover:bg-[#C6A6B8] transition cursor-pointer hidden md:block ${i === activeIndex ? "bg-[#C6A6B8]" : "bg-white"}`}
                            />
                            {/* card itself */}
                            <div className="md:flex-1">
                                <ExperienceCard
                                    title={exp.title}
                                    start={exp.start}
                                    end={exp.end}
                                    description={exp.description}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;