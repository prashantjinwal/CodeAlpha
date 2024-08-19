
import {useState} from "react"

export default function Search(){

    const allwords = [" ","Designer", "engineer", "data scientist", "Doctor"]
    const [selected, setSelected] = useState(allwords[0]);

    const handleSelect = (event) => {
        const selectedWord = event.target.value
        setSelected(selectedWord)
    }

    return(

        <>
            <form className="inline-flex gap-7 ">
                <input className="px-3 py-2 border-b-2" type="search"/>

                <select className="px-3 py-2 border-b-2 " value={selected} onChange={handleSelect} >
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