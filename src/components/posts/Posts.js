import React, { useEffect, useState } from "react";
import Modal from "../common/modal/Modal";
import NewPost from "../newPost/NewPost";
import Post from "./post/Post";
import postsStyles from "./Posts.module.css";

function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetchingPosts(true);
      //use localhost for development.
      //use ip to access on multiple devices on same network like mobile/ipad at home
      // const response = await fetch("http://localhost:8085/posts");
      const response = await fetch("http://192.168.1.102:8085/posts");
      const responseData = await response.json();
      setPosts(responseData.posts);
      setIsFetchingPosts(false);
    }

    fetchPosts();
  }, []);

  function addNewPostHandler(postData) {
    //Posting data to backend server.
    // fetch() is used for both fetching and posting data from/to server
    //use localhost for development.
    //use ip to access on multiple devices on same network like mobile/ipad at home
    // fetch("http://localhost:8085/posts", {
    fetch("http://192.168.1.102:8085/posts", {
      method: "Post",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    });
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
      {!isFetchingPosts && posts.length > 0 && (
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
      {!isFetchingPosts && posts.length === 0 && (
        <div className={postsStyles.noPosts}>
          <h2>No Posts yet!</h2>
          <p>Start adding some posts</p>
        </div>
      )}
      {isFetchingPosts && (
        <div className={postsStyles.loadingPosts}>
          <h2>Loading posts...</h2>
        </div>
      )}
    </React.Fragment>
  );
}

export default Posts;
