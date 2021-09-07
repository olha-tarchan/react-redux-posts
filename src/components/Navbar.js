import React, {useState} from "react";
import {Navbar, Container, Button, Nav} from "react-bootstrap";
import ModalWindow from "./ModalWindow";

export default function NavBar() {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="shadow-sm p-3 mb-5">
                <Container>
                    <Navbar.Brand>React-Redux: Posts</Navbar.Brand>
                    {/*<Navbar.Collapse id="responsive-navbar-nav">*/}
                    {/*    <Nav className="me-auto">*/}
                    {/*    </Nav>*/}
                    <Nav className="m-sm-2">
                        <Button variant="info" className="mr-2 text-white"
                                onClick={handleShow}>Info</Button>
                    </Nav>
                    {/*</Navbar.Collapse>*/}
                </Container>
            </Navbar>
            <ModalWindow show={show} handleClose={handleClose.bind(this)}/>
        </>
    )
}