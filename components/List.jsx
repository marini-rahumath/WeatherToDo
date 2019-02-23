import React from 'react';
import Task from "./Task.jsx";
import Modal from "./Modal.jsx";
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskData: JSON.parse(localStorage['activity']),
            newData: this.props.data,
            open: false,
            toEditTitle: "",
            toEditDesc: "",
            toEditDate: "",
            toEditId: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(id) {
        const curData=[];
        this.state.taskData.map(data => {
            if (data.id === id) {
                curData.push(data);
                this.setState({
                    open : !(this.state.open),
                    toEditTitle: curData[0].title,
                    toEditDesc: curData[0].description,
                    toEditDate: curData[0].date,
                    toEditId: curData[0].id,
                })
            }
        });
    }

    handleChange(id) {
        var storedData = JSON.parse(localStorage.getItem('activity'));
        this.state.taskData.map(data => {
            if (data.id === id) {
                for(var i = 0; i < storedData.length; i++) {
                    if(storedData[i].id === id) {
                        storedData.splice(i,1);
                        break;
                    }
                }
                localStorage.setItem('activity',JSON.stringify(storedData));
            }
        });
        this.setState({
            taskData: JSON.parse(window.localStorage.getItem('activity'))
        })
    }

    render() {
        const dataItems = this.state.taskData.map(item =><Task key={item.id} item={item} handleChange={this.handleChange} handleEdit={this.handleEdit}/>);
        return (
            <div>
                <div><Modal open={this.state.open} titleData={this.state.toEditTitle} descData={this.state.toEditDesc} dateData={this.state.toEditDate}  idData={this.state.toEditId}/></div>
                {dataItems}
            </div>
        )
    }
}

export default List;