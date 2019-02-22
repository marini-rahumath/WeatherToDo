import React from 'react';
import ReactModal from 'react-responsive-modal';
import Form from "./Form.jsx";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        };
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    onCloseModal() {
        this.setState({
            open: false
        });
    };

    componentDidUpdate(nextProps) {
        if((this.props.open !== nextProps.open)){
            this.setState({
                open: true
            });

        }
    }

    render() {
        return (
            <div className={"modal"}>
                <ReactModal open={this.state.open} onClose={this.onCloseModal} center>
                    <Form titleData={this.props.titleData} descData={this.props.descData} dateData={this.props.dateData} idData={this.props.idData}/>
                </ReactModal>

            </div>
        );
    }
}

export default Modal;