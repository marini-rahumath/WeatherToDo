import React from "react"
import Modal from "./Modal.jsx";
class FormButton extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
        this.onOpenModal = this.onOpenModal.bind(this);
    }

    onOpenModal(){
        this.setState({
            open: !(this.state.open)
        });
    };

    render (){
        return (
        <div className={"centre"} style={{margin:-30}}>
            <a onClick={this.onOpenModal} className="btn-floating btn-large waves-effect waves-light #00b2a9">
                <i className="material-icons">add</i>
            </a>
            <div><Modal open={this.state.open}/></div>
        </div>
        )
    };
}
export default FormButton;