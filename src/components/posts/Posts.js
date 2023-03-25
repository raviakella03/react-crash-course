import React, { useState } from "react";
import Modal from "../common/modal/Modal";
import NewPost from "../newPost/NewPost";
import Post from "./post/Post";
import postsStyles from "./Posts.module.css";

function Posts(props) {
  const [postAuthor, setPostAuthor] = useState("Ravi Akella");
  const [postContent, setPostContent] = useState(
    "This is my first Post on React App"
  );

  function onPostContentChangeHandler(event) {
    setPostContent(event.target.value);
  }

  function onPostAuthorChangeHandler(event) {
    setPostAuthor(event.target.value);
  }

  /*
  //Approach 2
  let modalContent;

  if (showModal) {
    modalContent = (
      <Modal showModal={showHideModalHandler}>
        <NewPost
          onPostContentChange={onPostContentChangeHandler}
          onPostAuthorChange={onPostAuthorChangeHandler}
        />
      </Modal>
    );
  } */

  return (
    <React.Fragment>
      {
        /* Approach 1 */
        props.showModal ? (
          <Modal showModal={props.closeModal}>
            <NewPost
              onPostContentChange={onPostContentChangeHandler}
              onPostAuthorChange={onPostAuthorChangeHandler}
            />
          </Modal>
        ) : null
        /* Approach 2 */
        /*{modalContent} */
        /* Approach 3*/
        /* showModal && (
          <Modal showModal={showHideModalHandler}>
            <NewPost
              onPostContentChange={onPostContentChangeHandler}
              onPostAuthorChange={onPostAuthorChangeHandler}
            />
          </Modal>
        ) */
      }

      <ul className={postsStyles.posts}>
        <Post userName={postAuthor} storyContent={postContent} />
        <Post
          userName="Vijay Akella"
          storyContent="This is my first Post on React App"
        />
      </ul>
    </React.Fragment>
  );
}

export default Posts;
