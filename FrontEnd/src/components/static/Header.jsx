import Logo from "/assets/Logo/Logo.png"

function Header(){
    return(
        <nav className="flex items-center justify-between py-2 px-[4em]">

            <div className="flex items-center  py-2">
            <img src={Logo} alt="Logo"/>
            <h3 className=" text-2xl font-semibold" >JobHuntly</h3>
            
                <ul className="flex">
                    <li>Find a job</li>
                    <li>Browse Companies</li>
                </ul>
            </div>

            <div className="flex items-center gap-5 py-2">
                <button className="text-[#4640DE] font-semibold">Login</button>
                <button className="bg-[#4640DE] px-3 py-2 text-white font-semibold">Sign up</button>
            </div>

        
        </nav>
    )
}

export default Header