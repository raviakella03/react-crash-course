import { useState } from 'react';

import newPostStyles from './NewPost.module.css';

function NewPost() {

    const [postContent, setPostContent] = useState('');

    function changeBodyHandler(event) {
        setPostContent(event.target.value);
    }

    return (
        <form className={newPostStyles.form}>
            <p>
                <label htmlFor='postContent'>Text</label>
                <textarea id="postContent" required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>{postContent}</p>
            <p>
                <label htmlFor='postAuthor'>Your Name</label>
                <textarea id="postAuthor" required />
            </p>
        </form>
    );
}

export default NewPost;