import React from "react";

import Post from "./Post";
import Header from "./Header";

function App() {
  return (
    <>
      <Header title="Haura's blog">
        <h2>Posts of the week</h2>
      </Header>

      <hr />

      <Post
        post={{
          title:'News headline 01',
          subtitle: 'News subheadline 01',
        }}
      />
      <Post
        post={{
          title:'News headline 02',
          subtitle: 'News subheadline 02',
        }}
      />
      <Post
        post={{
          title:'News headline 03',
          subtitle: 'News subheadline 03',
        }}
      />
    </>
  )
}

export default App;