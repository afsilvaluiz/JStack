import React from "react";

import Post from "./Post";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />      

      <hr />

      <Post 
        title='News headline 01' 
        subtitle='News subheadline 01' 
      />
      <Post 
        title='News headline 02' 
        subtitle='News subheadline 02' 
      />
      <Post 
        title='News headline 03' 
        subtitle='News subheadline 03' 
      />

    </>
  )
}

export default App;