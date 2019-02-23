import React from 'react';
import CalendarWidget from 'react-calendar'
import Weather from "./Weather.jsx";
var moment = require('moment');

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            show: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        this.setState( {
           date: new Date(event),
            show: false
        })
    }
    handleClick(){
        this.setState( {
            show: true
        })
    }

    render() {
        return (

            <div className={"weather-card centre"}>
                <h4 onClick={this.handleClick} style={{zIndex: "2"}} className={"btn-like"}>
                    {moment(this.state.date).format("MMM D - dddd")}
                </h4>
                <Weather value = {this.state.date}/>
                <div className={"centre"} style={{zIndex: '100',  position: "absolute",
                    justifyContent: "center", display: this.state.show? "flex" : "none"}} >
                    <CalendarWidget
                        onChange={this.handleChange}
                        value={this.state.date}
                    />
                </div>
            </div>
        );
    }
}
export default Calendar
