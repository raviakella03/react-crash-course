import React from "react";

import postStyles from "./Post.module.css";

function Post(props) {
  return (
    <li className={postStyles.post}>
      <h1 className={postStyles.postAuthor}>{props.postAuthor}</h1>
      <p className={postStyles.postContent}>{props.postContent}</p>
    </li>
  );
}

export default Post;
