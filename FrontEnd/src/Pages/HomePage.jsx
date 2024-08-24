import { useState } from "react";
import Header from "../components/static/Header";
import Siderbar from "../components/static/SiderBar";


function HomePage(){
        const [sidebar] = useState(true)

        return(
        <>
            <Header/>
            {sidebar &&
            <Siderbar/>
            }
        </>
        )

}

export default HomePage