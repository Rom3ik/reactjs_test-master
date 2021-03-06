import React from 'react';
import CreateButton from "./UI/buttons/CreateButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.description}
                </div>
            </div>
            <div className="post__btns">
                <CreateButton onClick={() => props.remove(props.post)}>Remove</CreateButton>
            </div>
        </div>
    );
};

export default PostItem;
