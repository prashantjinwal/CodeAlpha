import { useState } from "react";
import Header from "../components/static/Header";
import Siderbar from "../components/static/SiderBar";


function HomePage(){
        const [sidebar , setSidebar] = useState(false)

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