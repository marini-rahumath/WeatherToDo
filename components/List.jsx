import React from 'react';
import Task from "./Task.jsx"
/*import Data from "../db.json"
import Data2 from "./Data.jsx"*/
import Modal from "./Modal.jsx";
//var Data = JSON.parse(window.localStorage.getItem('activity'));

class List extends React.Component {
    constructor(props) {
        //run the following commented code only ONCE to set initial value
/*        var Data = [
            {id: 0, title: "Do Laundry", description: "Wash, dry and fold all the clothes over the weekend ", date: "13/12/2019"},
            {id: 1, title: "Go Shopping", description: "Go to the shopping mall to get the items from the list", date: "01/03/2019"},
            {id: 2, title: "Watch Movies", description: "Spend a chill night catching with the old, missed movies", date: "04/05/2019"}]

        window.localStorage.setItem('activity', JSON.stringify(Data));*/
        super(props);
        this.state = {
            taskData: JSON.parse(window.localStorage.getItem('activity')),
            newData: this.props.data,
            open: false,
            toEditTitle: "",
            toEditDesc: "",
            toEditDate: "",
            toEditId: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(id) {
/*        var curData = [];
        this.setState(prevState => {
            const updatedStoredData = prevState.taskData.map(data => {
                if (data.id === id) {
                    curData.push(data);
                }
                    return curData
            })
            console.log("List data before set state: " + this.state.toEditTitle);
            return curData;
            return {
                open : !(this.state.open),
                toEditTitle: curData[0].title,
                toEditDesc: curData[0].description,
                toEditDate: curData[0].date,
            }
        })
        console.log("List data after set state: " + this.state.toEditTitle);*/
        const curData=[];

        this.state.taskData.map(data => {
            if (data.id === id) {
                console.log("editing index " + id);
                curData.push(data);
                this.setState({
                    open : !(this.state.open),
                    toEditTitle: curData[0].title,
                    toEditDesc: curData[0].description,
                    toEditDate: curData[0].date,
                    toEditId: curData[0].id,
                })

                console.log("editing title " + this.state.toEditTitle);
            }
        });


    }

    handleChange(id) {
        var storedData = JSON.parse(localStorage.getItem('activity'));

        this.state.taskData.map(data => {
            if (data.id === id) {
                console.log("data is"+  id);
                console.log("data_id is" +data.id );

                for(var i = 0; i < storedData.length; i++) {
                    if(storedData[i].id == id) {
                        console.log(storedData[i])
                        storedData.splice(i,1);
                        break;
                    }
                }
                localStorage.setItem('activity',JSON.stringify(storedData));
                console.log(window.localStorage.getItem('activity'));
            }
        });
        this.setState({
            taskData: JSON.parse(window.localStorage.getItem('activity'))
        })

    }

    render() {
        console.log(window.localStorage.getItem('activity'));

        const dataItems = this.state.taskData.map(item =>
            <Task key={item.id} item={item} handleChange={this.handleChange} handleEdit={this.handleEdit}/>
            )
        return (
            <div>
                <div><Modal open={this.state.open} titleData={this.state.toEditTitle} descData={this.state.toEditDesc} dateData={this.state.toEditDate}  idData={this.state.toEditId}/></div>
                {dataItems}
            </div>
        )
    }
}

export default List;