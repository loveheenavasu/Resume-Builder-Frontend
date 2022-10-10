import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


export default class Tost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            type: "Primary"
        };
    }

    render() {

        return (
            <ToastContainer position="top-end" className="p-3">
                <Toast
                    className="d-inline-block m-1"
                    bg="Primary"
                    key="1"
                    onClose={() => this.setState({
                        show: false
                    })}
                    show={this.state.show}
                    delay={3000}
                    autohide
                >
                    <Toast.Body className='Dark'>
                        Hello, world! This is a toast message.
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        )
    }
}