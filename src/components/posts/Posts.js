import React, { useState } from "react";
import Modal from "../common/modal/Modal";
import NewPost from "../newPost/NewPost";
import Post from "./post/Post";
import postsStyles from "./Posts.module.css";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  function addNewPostHandler(postData) {
    // setPosts([postData, ...posts]); //or
    setPosts((existingPosts) => [postData, ...posts]);
  }
  return (
    <React.Fragment>
      {
        /* Approach 1 */
        props.showModal ? (
          <Modal showModal={props.closeModal}>
            <NewPost
              onCancel={props.closeModal}
              onAddNewPost={addNewPostHandler}
            />
          </Modal>
        ) : null
        /* Approach 2 */
        /* props.showModal && (
          <Modal showModal={props.closeModal}>
            <NewPost onCancel={props.closeModal} />
          </Modal>
        ) */
      }
      {posts.length > 0 && (
        <ul className={postsStyles.posts}>
          {posts.map((post, index) => (
            <Post
              key={index * 31}
              postAuthor={post.postAuthor}
              postContent={post.postContent}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={postsStyles.noPosts}>
          <h2>No Posts yet!</h2>
          <p>Start adding some posts</p>
        </div>
      )}
    </React.Fragment>
  );
}

export default Posts;
