import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <strong style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '50px'
            }}>NO DATA</strong>
        )
    }
    return (
        <div>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post">
                        <PostItem number={index + 1} remove={remove} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
