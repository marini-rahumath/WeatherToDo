import React from "react"

function Task(props) {
    return (
        <div className={"task-card"} >
            <div className={"container"} style={{zIndex: "1"}}>
                <div style={{width:"100%"}}>
                <span style={{float:"left", fontWeight:"bold"}}>{props.item.title}</span>
                <label style={{float:"right"}}>{props.item.date}</label>
                </div>
                <br/>
                <div style={{width:"100%"}}>
                <div style={{width:"80%"}}>
                <span>{props.item.description}</span>
                </div>
                <div style={{float:"right", width:"20%"}}>
                    <a onClick={() => props.handleEdit(props.item.id)}className="btn-floating btn-small waves-effect waves-light #00b2a9"><i className="material-icons">create</i></a>
                    <a onClick={() => props.handleChange(props.item.id)} className="btn-floating btn-small waves-effect waves-light #00b2a9"><i className="material-icons">delete</i></a>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Task