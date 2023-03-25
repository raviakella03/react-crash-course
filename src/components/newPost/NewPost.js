import newPostStyles from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={newPostStyles.form}>
      <p>
        <label htmlFor="postContent">Text</label>
        <textarea
          id="postContent"
          required
          rows={3}
          onChange={props.onPostContentChange}
        />
      </p>
      <p>
        <label htmlFor="postAuthor">Your Name</label>
        <textarea
          id="postAuthor"
          required
          onChange={props.onPostAuthorChange}
        />
      </p>
    </form>
  );
}

export default NewPost;
