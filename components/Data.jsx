
var Data = [
        {id: 0, title: "Do Laundry", description: "Wash, dry and fold al the clothes over the weekend ", date: "13/12/2019"},
        {id: 1, title: "Go Shopping", description: "Go to the shopping mall to get the items from the lists", date: "01/03/2019"},
        {id: 2, title: "Watch Movies", description: "Spend a chill night catching with old missed movies", date: "04/05/2019"}]
if(typeof localStorage["activity"] === "undefined" ){
        window.localStorage.setItem('activity', JSON.stringify(Data));
}