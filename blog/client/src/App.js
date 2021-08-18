import React from 'react';
import PostCreat from './PostCreate';
import PostsList from './PostsList';

function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreat />
      <hr />
      <h1>Posts</h1>
      <PostsList />
    </div>
  );
}

export default App;
