import React from "react";

import Post from "./Post";

function App() {
  return (
    <>
      <h1>Haura's blog</h1>
      <h2>Posts of the week</h2>

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