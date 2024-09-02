import line from "/header/Vector.png"
// import person from "/header/Ladka.png"

function Banner() {
    return (
        <>
            <p className="text-5xl md:text-7xl sm:text-6xl font-semibold text-[#25324B]">
                Discover <br/> more than <br/> 
                <span className="text-[#26A4FF]">
                        5000+ Jobs
                            <img src={line} alt="#" /> 
                </span>
            </p>

            <p className="text-[#515B6F] text-sm mt-[1em] ">Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
    
            
        </>
    )
}

export default Banner