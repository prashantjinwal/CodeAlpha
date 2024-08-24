import CloseIcon from '@mui/icons-material/Close';

function Siderbar() {
    return(
        <div className="h-full right-0  w-2/3 bg-slate-700 fixed z-50 p-[1.5em] "> 

            <div className='flex justify-end '>
                <span className=' border-2 border-[#a2aec7] border-opacity-25 shadow-md bg-white p-1 rounded-md inline-flex  justify-center items-center  '>
                    <CloseIcon/>
                </span>
            </div>
            
               
                <ul className="flex mt-[2em]  flex-col ">
                    <li className='py-2 '>Find Jobs</li>
                    <li>Browse Companies</li>
                    {/* <li></li> */}
                </ul>

                <div className="py-5 flex flex-col ">
                    <button className="px-4 py-2 text-[#4640DE] font-semibold " >Login</button>
                    <button className="px-4 py-2 bg-[#4640DE] font-semibold text-white" >Sign Up</button>
                </div>

            
        </div>
    )
}

export default Siderbar