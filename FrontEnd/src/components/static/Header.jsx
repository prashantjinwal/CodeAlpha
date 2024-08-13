import Logo from "/assets/Logo/Logo.png"

function Header(){
    return(
        <nav className="flex items-center justify-between py-2 px-[5em] ">

            <div className="flex items-center py-2 gap-[3em]">

                <h3 className=" text-2xl font-bold flex gap-2" > <img src={Logo} alt="Logo"/> JobHuntly</h3>
            
                <ul className="flex gap-5">
                    <li>Find a job</li>
                    <li>Browse Companies</li>
                </ul>
            </div>

            <div className="flex items-center gap-5 py-2">
                <button className="text-[#4640DE] px-3 py-2 font-semibold">Login</button>
                <button className="bg-[#4640DE] px-3 py-2 text-white font-semibold">Sign up</button>
            </div>

        
        </nav>
    )
}

export default Header