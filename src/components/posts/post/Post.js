import React from "react";

import postStyles from './Post.module.css';

function Post(props) {
    return (
        <li className={postStyles.post}>
            <h1 className={postStyles.author}>{props.userName}</h1>
            <p className={postStyles.storyContent}>{props.storyContent}</p>
        </li>
    );
}

export default Post;