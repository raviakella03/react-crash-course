import React, { useState } from "react";
import "./App.css";
import MainHeader from "./components/common/mainHeader/MainHeader";
import Posts from "./components/posts/Posts";

function App() {
  const [showModal, setShowModal] = useState(false);

  //   function showModalHandler() {
  //     setShowModal(true);
  //   }

  //   function hideModalHandler() {
  //     setShowModal(false);
  //   }

  function showhideModalHandler() {
    showModal ? setShowModal(false) : setShowModal(true);
  }

  return (
    <React.Fragment>
      {/* <MainHeader onCreatePost={showModalHandler} /> */}
      <MainHeader onCreatePost={showhideModalHandler} />
      <main>
        {/* <Posts showModal={showModal} closeModal={hideModalHandler} /> */}
        <Posts showModal={showModal} closeModal={showhideModalHandler} />
      </main>
    </React.Fragment>
  );
}

export default App;
