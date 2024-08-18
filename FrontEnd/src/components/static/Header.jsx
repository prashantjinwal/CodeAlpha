import Search from "../dynamic/Search"
import Logo from "/assets/Logo/Logo.png"
import person from "/header/Ladka.png"
import line from "/header/Vector.png"

function Header(){
    return(
        <header className="bg-[#eaeaf7]">
            <nav className="flex items-center justify-between py-2 px-[5em] ">
               <div className="flex items-center py-2 gap-[3em]">

                <h3 className="text-[#25324B] text-2xl font-bold flex gap-2 " > <img src={Logo} alt="Logo"/> JobHuntly </h3>
            
                    <ul className="flex gap-5">
                        <li className='text-[#515B6F]'>Find a Job</li>
                        <li className='text-[#515B6F]' >Browse Companies</li>
                    </ul>
                </div>

                <div className="flex items-center gap-5 py-2">
                    <button className="text-[#4640DE] px-4 py-2 font-semibold  border-r-2 ">Login</button>
                    <button className="bg-[#4640DE] px-3 py-2 text-white font-semibold">Sign up</button>
                </div>
            </nav>

            <section className="flex gap-4">

            <div className="p-[5em] flex flex-col justify-start  ml-4  gap-2">

                <h3 className="text-7xl font-bold text-[#25324B] font-head">Discover<br/> more than <br/> <span className="text-[#26A4FF]">5000+ Jobs</span> <br/> <img src={line} alt="vector"/></h3>
                <p className='text-[#515B6F] text-wrap w-2/3 py-2'>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                <span className="p-3  bg-white  "><Search/></span>
            </div>

            <div className="">
                <img className="w-[85%]" src={person} alt="Person" />
            </div>

            </section>
            





        </header>
    )
}

export default Header