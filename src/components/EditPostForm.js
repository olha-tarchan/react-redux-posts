import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {editPost, hideCollapse} from "../redux/actions/actions";
import {SAVE} from "../text";


function EditPostForm({post, onEditBlock}) {
    const dispatch = useDispatch();
    const [param, setParam] = useState({title: post.title, content: post.content});

    const editPostHandler = event => {
        event.preventDefault();

        if (!param.title.trim() || !param.content) {
            return
        }
        const postEdit = {
            ...post,
            ...{
                title: param.title,
                content: param.content
            }
        };
        dispatch(editPost(postEdit));
        dispatch(hideCollapse());
        onEditBlock(false);
    }

    const changeInputPostHandler = event => {
        event.persist();
        setParam(prev => ({
                ...prev, ...{
                    [event.target.name]: event.target.value
                }
            })
        )
    }

    return (
        <form className="collapse-to-left m-3" onSubmit={editPostHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control mb-3"
                    id="title"
                    value={param.title}
                    name="title"
                    onChange={changeInputPostHandler}
                />
                <textarea
                    className="form-control mb-3"
                    id="content"
                    value={param.content}
                    name="content"
                    onChange={changeInputPostHandler}
                    rows="4"
                />
                <button className="btn btn-info text-white mb-2" type="submit">{SAVE}</button>
            </div>

        </form>
    )
}

const mapDispatchToProps = {
    editPost: editPost
}
export default connect(null, mapDispatchToProps)(EditPostForm);

