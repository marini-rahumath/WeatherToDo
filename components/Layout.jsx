import React from "react"
import Data from "./Data.jsx";
import FormButton from "./FormButton.jsx";
import Calender from "./Calender.jsx";

function Layout() {
    return (
        <div className="card-list">
            <Calender/>
            <FormButton/>
            <Data/>
        </div>
    )
}
export default Layout;