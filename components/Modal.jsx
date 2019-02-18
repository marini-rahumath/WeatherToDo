import React from 'react';
import ReactModal from 'react-responsive-modal';
import Form from "./Form.jsx";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            titleData: this.props.titleData,
            descData: this.props.descData,
            dateData: this.props.dateData,
            submit: false,
        };

        this.onCloseModal = this.onCloseModal.bind(this);
    }

    onCloseModal() {
        this.setState({
            open: false

        });
    };

    componentDidUpdate(nextProps) {
        console.log("trigger open before");
        if((this.props.open !== nextProps.open)){
            console.log("trigger open");
            this.setState({
                open: true

            });
            console.log("model data after state" + this.state.titleData)
            if(this.props.titleData !== nextProps.titleData){
                this.setState({
                    titleData: nextProps.titleData,
                    descData: nextProps.descData,
                    dateData: nextProps.dateData,

                });
                console.log("model data before sate" + this.state.titleData)
            }
        }
    }

    render() {
        return (
            <div className={"modal"}>
                <ReactModal open={this.state.open} onClose={this.onCloseModal} center>

                    <Form titleData={this.state.titleData} descData={this.state.descData} dateData={this.state.dateData}/>

                </ReactModal>

            </div>
        );
    }
}

export default Modal;