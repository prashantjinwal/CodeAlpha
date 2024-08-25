/* eslint-disable react/prop-types */
// import Search from "../dynamic/Search"
import Search from "../dynamic/Search";
import Banner from "../Essential/Banner";
import Logo from "/assets/Logo/Logo.png"
// import person from "/header/Ladka.png"

import DragHandleIcon from '@mui/icons-material/DragHandle';

// #eaeaf7
// #25324B
// #515B6F
// #4640DE


function Header({sideBarState}){

    const barToggle = () => {
        sideBarState(true)
    }
    return(
        <header className="w-full bg-[#eaeaf7]  h-screen absolute">
            <nav className="flex justify-between px-4 py-3 md:py-4 md:px-10">
                <div className="flex">
                    <label id="fontRaleway" className="flex gap-2 font-semibold text-2xl text-[#25324B]  items-center"> <img src={Logo} alt='' /> JobHuntly</label>
                    <ul className="hidden md:flex items-center px-[5em]  gap-7">
                        <li>Find Jobs</li>
                        <li>Browse Companies</li>
                    </ul>
                    
                </div>
                <div className="hidden md:flex gap-5">
                    <button className="px-4 py-2 text-[#4640DE] font-semibold border-r-2 border-[#a2aec7] border-opacity-25 ">Login</button>
                    <button className="px-4 py-2 bg-[#4640DE] font-semibold text-white">Sign in</button>
                </div>
                <span onClick={barToggle} className="border-2 bg-white p-1 rounded-full md:hidden shadow-md" ><DragHandleIcon fontSize="large"/></span>
            </nav>

            <div className="py-[1.8em] px-5">

                <Banner/>
               <div className="my-8 flex flex-row bg-white px-5 py-5 rounded-md shadow-md"> <Search/> </div>
                <p className=" text-wrap text-[#515B6F] text-md my-4 "><span className="block py-1">Popular :</span>UI Designer, UX Researcher, Android, Admin</p>
            </div>
            

        </header>
    )
}

export default Header