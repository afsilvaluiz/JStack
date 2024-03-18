import React from "react";

import Post from "./Post";
import Header from "./Header";

function App() {
  return (
    <>
      <Header>
        <h2>Posts of the week</h2>
      </Header>

      <hr />

      <Post
        likes={20}
        post={{
          title:'News headline 01',
          subtitle: 'News subheadline 01',
        }}
      />
      <Post
        likes={10}
        post={{
          title:'News headline 02',
          subtitle: 'News subheadline 02',
        }}
      />
      <Post
        likes={50}
        post={{
          title:'News headline 03',
          subtitle: 'News subheadline 03',
        }}
      />
    </>
  )
}

export default App;