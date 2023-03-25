import { useState } from "react";
import newPostStyles from "./NewPost.module.css";

function NewPost(props) {
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

  function postSubmitHandler(event) {
    event.preventDefault();
    const postData = {
      postContent: postContent,
      postAuthor: postAuthor,
    };
    console.log(postData);
    props.onAddNewPost(postData);
    props.onCancel();
  }

  return (
    <form className={newPostStyles.form} onSubmit={postSubmitHandler}>
      <p>
        <label htmlFor="postContent">Text</label>
        <textarea
          id="postContent"
          required
          rows={3}
          onChange={onPostContentChangeHandler}
        />
      </p>
      <p>
        <label htmlFor="postAuthor">Your Name</label>
        <textarea
          id="postAuthor"
          required
          onChange={onPostAuthorChangeHandler}
        />
      </p>
      <p className={newPostStyles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit"> Post </button>
      </p>
    </form>
  );
}

export default NewPost;
