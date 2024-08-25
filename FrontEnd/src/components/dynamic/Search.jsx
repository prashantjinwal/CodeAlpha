
import {useState} from "react"

export default function Search(){

    const allwords = ["Designer", "engineer", "data scientist", "Doctor"]
    const [selected, setSelected] = useState(allwords[0]);

    const handleSelect = (event) => {
        const selectedWord = event.target.value
        setSelected(selectedWord)
    }

    return(

        <>
            <form className="inline-flex gap-7 flex-wrap flex-col w-full  ">
                <input className="px-3 py-2 border-b-2 outline-none" type="search" placeholder="Job title or keyword" />

                <select className="px-3 py-3 border-b-2 outline-none " value={selected} onChange={handleSelect}  >
                    {allwords.map((word, index)=>(
                       <option key={index} >
                            {word}
                       </option> 
                    ))}
                    
                </select>
                
                <button className="bg-[#4640DE] text-white text-base font-medium  px-3 py-2">Search my job</button>

            </form>
        
        </>
    )
}