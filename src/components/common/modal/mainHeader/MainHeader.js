import React from "react";
import { MdMessage, MdPostAdd } from "react-icons/md";

import mainHeaderStyles from "./MainHeader.module.css";

function MainHeader(props) {
  return (
    <React.Fragment>
      <header className={mainHeaderStyles.header}>
        <h1 className={mainHeaderStyles.logo}>
          <MdMessage />
          React Poster
        </h1>
        <p>
          <button
            className={mainHeaderStyles.button}
            onClick={props.onCreatePost}
          >
            <MdPostAdd size={18} />
            New Post
          </button>
        </p>
      </header>
    </React.Fragment>
  );
}

export default MainHeader;
