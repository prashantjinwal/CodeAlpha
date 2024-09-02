import { useState } from "react";
import Header from "../components/static/Header";
import Siderbar from "../components/static/SiderBar";
import Bands from "../components/static/Bands.Jsx";



function HomePage(){
        const [sidebar, setSideBar] = useState(false)

        return(
        <>
            <Header sideBarState={setSideBar} />
            {sidebar &&
            <Siderbar sideBarState={setSideBar} />
            }
            <Bands/>
        </>
        )

}

export default HomePage