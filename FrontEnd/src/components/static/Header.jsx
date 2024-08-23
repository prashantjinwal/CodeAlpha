// import Search from "../dynamic/Search"
import Logo from "/assets/Logo/Logo.png"
// import person from "/header/Ladka.png"
// import line from "/header/Vector.png"
import DragHandleIcon from '@mui/icons-material/DragHandle';

// #eaeaf7
// #25324B
// #515B6F
// #4640DE

function Header(){
    return(
        <header className="w-full bg-[#eaeaf7]  h-screen">
            <nav className="flex justify-between px-4 py-3 bg-slate-400">
                <label id="fontRaleway" className="flex gap-2 font-semibold text-2xl text-[#25324B]  items-center"> <img src={Logo} alt='' /> JobHuntly</label>
                <span className="border-2 bg-white p-1 rounded-full" ><DragHandleIcon fontSize="large"/></span>
            </nav>

        </header>
    )
}

export default Header