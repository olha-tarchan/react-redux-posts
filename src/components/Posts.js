import React, {useState} from 'react';
import {connect} from "react-redux";
import Post from "./Post";
import {deletePost, editPost} from "../redux/actions/actions";

const Posts = (props) => {

    const handleDelete = (postId) => {
        props.deletePostDispatch(postId);
    }

    if (!props.syncPost.length) {
        return <p className="text-center">don't have posts yet</p>
    }
    return [...props.syncPost].reverse()
        .map(post => <Post
            post={post}
            key={post.id}
            onDelete={handleDelete.bind(this)}
        />);
}

const mapStateToProps = state => ({
    error: state.app.error,
    syncPost: state.stateMock.posts
})
const mapDispatchToProps = {
    deletePostDispatch: deletePost,
    edit: editPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
