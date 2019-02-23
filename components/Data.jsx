import React from "react"
import List from "./List.jsx";

function Layout() {
    const Data = [{ id: 0, title: "Do Laundry", description: "Wash, dry and fold all clothes over the weekend", date: "13/12/2019"},
        { id: 1, title: "Go Shopping", description: "Go to the shopping mall to get the items from the list", date: "01/03/2019"},
        { id: 2, title: "Watch Movies", description: "Spend a chill night catching with the old, missed movies", date: "04/05/2019"}];
    if(typeof localStorage['activity'] == "undefined")
        localStorage.setItem('activity', JSON.stringify(Data));
    return <List/>
}
export default Layout;