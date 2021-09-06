import React, {useState} from 'react';
import EditPostForm from "./EditPostForm";
import {UPDATE, HIDE} from "../text";
import {Card} from "react-bootstrap";

export default ({post, onDelete}) => {
    const [editBlock, setEditBlock] = useState(false);

    const handleEditBtn = (changeEditBlock) => {
        setEditBlock(changeEditBlock);
    }

    return (
        <Card className="my-3 ">
            {editBlock ?
                <EditPostForm onEditBlock={handleEditBtn.bind(this)} post={post}/>
                :
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>

                </Card.Body>
            }
            <div className="d-flex justify-content-end">
                <Card.Link
                    onClick={() => setEditBlock(!editBlock)}
                    className="btn btn-light m-3 mt-0  mr-1  justify-content-end"
                >{!editBlock ? UPDATE : HIDE}</Card.Link>
                <Card.Link
                    onClick={() => onDelete(post.id)}
                    className="btn btn-light m-3 mt-0  mr-1  justify-content-end"
                >DELETE</Card.Link>
            </div>
        </Card>
    )
}
