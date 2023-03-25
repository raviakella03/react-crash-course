import React from "react";
import Post from "./post/Post";
import postsStyles from './Posts.module.css';

function Posts() {
    return (
        <React.Fragment>
            <ul className={postsStyles.posts}>
                <Post userName="Ravi Akella" storyContent="This is my first Post on React App" />
                <Post userName="Vijay Akella" storyContent="This is my first Post on React App" />
            </ul>
        </React.Fragment>
    )
}

export default Posts;