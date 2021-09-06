import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import {NEW_ARTICLE} from "./text";
import {Button, Collapse} from "react-bootstrap";
import Navbar from './components/Navbar';
import {Container, Row, Col} from "react-bootstrap";


function App() {
  const [open, setOpen] = useState(false);
  return (
      <>
        <Navbar/>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <Row>
            <Col>
              <div className="d-flex justify-content-end">
                <div className="my-3">
                  <Button
                      onClick={() => setOpen(!open)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                      variant="info"
                      className="text-white"
                  >
                    {NEW_ARTICLE}
                  </Button>
                </div>
              </div>
              <div>
                <Collapse in={open}>
                  <div id="example-collapse-text" className="mt-3">
                    <PostForm/>
                  </div>
                </Collapse>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="my-3 p-3 box-shadow">
              <Posts/>
            </div>
          </Row>
        </Container>
      </>
  );
}

export default App;
