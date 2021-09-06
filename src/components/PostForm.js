import React, {useState} from 'react';
import {connect} from "react-redux";
import {Form, Button} from "react-bootstrap";
import {createPost, showErrorHide300sec} from "../redux/actions/actions";
import {Error} from "./Error";
import {CONTENT, TITLE, SAVE} from "../text";

const PostForm = (props) => {
    const [param, setParam] = useState({title: '', content: ''});
    const submitHandler = event => {
        event.preventDefault();
        if (!param.title.trim() || !param.content.trim()) {
            return props.showError("Title and Content have to fill");
        }
        const newPost = {
            id: Number(Date.now().toString()),
            title: param.title,
            content: param.content
        }
        console.log("FORM Props", props)
        props.createPost(newPost);
        setParam({title: '', content: ''});
    }

    const changeInputHandler = event => {
        event.persist();
        setParam(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }));
    }

    return (
        <Form onSubmit={submitHandler}>
            {props.error && <Error text={props.error}/>}
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>{TITLE}</Form.Label>
                <Form.Control
                    name="title"
                    value={param.title}
                    onChange={changeInputHandler}
                    type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="content">
                <Form.Label>{CONTENT}</Form.Label>
                <Form.Control as="textarea"
                              name="content"
                              value={param.content}
                              onChange={changeInputHandler}
                              type="text"/>
            </Form.Group>

            <Button variant="info" type="submit" className="text-white">
                {SAVE}
            </Button>
        </Form>
    )
}

const mapDispatchToProps = {
    createPost: createPost,
    showError: showErrorHide300sec,
}

const mapStateToProps = state => ({
    error: state.app.error
})
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);


/*class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {title:''}
    }


    submitHandler = event => {
        event.preventDefault();
        const {title} = this.state;
        console.log("this.props!!!!!!!", this.props)
        if(!title.trim()){
            return  this.props.showError("Title don't be empty");
        }
        const newPost = {
            title,
            id: Number(Date.now().toString())
        }
        console.log("new Post:", newPost);
        this.props.createPost(newPost);     //вызывает диспатч
        this.setState({title: ''});
    }

     changeInputHandler = event => {
        console.log([event.target.name], event.target.value)
        event.persist();
        this.setState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }
        }));
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.error && <Error text={this.props.error}/>}

                <h4>titlePage</h4>
                <div className="form-group">
                    <label htmlFor="title">Title post</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                    <button className="btn btn-success mb-2" type="submit">Save</button>
                </div>

            </form>
        )
    }

}*/