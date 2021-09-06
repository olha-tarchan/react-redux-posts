import {Modal} from "react-bootstrap";
import React from "react";

const ModalWindow = (props) => {
    return (
        <Modal show={props.show} onHide={() => {
            props.handleClose(false)
        }}>
            <Modal.Header closeButton>
                <Modal.Title>Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Simple Example with React-Redux, Bootstrap.
                <br/>
                <br/>
                You can:
                <ul>
                    <li>add new post</li>
                    <li>edit post</li>
                    <li>delete post</li>
                </ul>
            </Modal.Body>
        </Modal>
    )
}

export default ModalWindow;