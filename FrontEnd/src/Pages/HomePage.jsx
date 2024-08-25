import { useState } from "react";
import Header from "../components/static/Header";
import Siderbar from "../components/static/SiderBar";


function HomePage(){
        const [sidebar, setSideBar] = useState(false)

        return(
        <>
            <Header sideBarState={setSideBar} />
            {sidebar &&
            <Siderbar sideBarState={setSideBar} />
            }
        </>
        )

}

export default HomePage