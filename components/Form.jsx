import React from "react"
var final_title ="", final_disc = "", final_date = "";

class Form extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.titleData,
            description: this.props.descData,
            date: this.props.dateData,
            id: this.props.idData,
            submit: this.props.submit
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        const form = event.target;
        const data = new FormData(form);
        var dataArr = [], i =0;
        for (var pair of data.entries()){
            dataArr[i] = pair[1];
            i++;
        }
        var value = (JSON.parse(localStorage.getItem('activity')));
        if(this.state.id != null){
            for(var i = 0; i < value.length; i++) {
                if(value[i].id === this.state.id) {
                    value.splice(i,1);
                    break;
                }
            }
            value.push({id: this.state.id, title: dataArr[0], description: dataArr[2], date: dataArr[1]});
        }
        else{
            var index = ((value.length)*2)+2;
            value.push({id: index, title: dataArr[0], description: dataArr[2], date: dataArr[1]});
        }
        localStorage.setItem('activity', JSON.stringify(value));
    }

    render() {
            if((final_title!=="")&&(final_disc!=="")&&(final_date!=="")) {
                console.log(final_title);
                final_title = "";
                final_disc = "";
                final_date = "";

            }

        return (
            <div>
                <h4>Add Activity</h4>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.title}
                        name="title"
                        placeholder="Eg. Do Homework"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={this.state.date}
                        name="date"
                        placeholder="dd/mm/yyyy"
                        onChange={this.handleChange}
                    />


                    <textarea
                        height="100px"
                        value={this.state.description}
                        name="description"
                        placeholder="Add details of activity..."
                        onChange={this.handleChange}
                    />

                    <br />

                    <button className="btn waves-effect waves-light #00b2a9" >Submit
                        <i className="material-icons right">send</i>
                    </button>

                </form>
            </div>

        )
    }
}

export default Form
