import React from "react"
import Data from "./Data.jsx";
import FormButton from "./FormButton.jsx";
import Calendar from "./Calendar.jsx";

function Layout() {
    return (
        <div className="card-list">
            <Calendar/>
            <FormButton/>
            <Data/>
        </div>
    )
}
export default Layout;