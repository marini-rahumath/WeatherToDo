import React from "react"
import List from "./List.jsx";
import FormButton from "./FormButton.jsx";
import Calender from "./Calender.jsx";

function Layout() {
    return (
        <div className="card-list">
            <Calender/>
            <FormButton/>
            <List/>
        </div>
    )
}
export default Layout;