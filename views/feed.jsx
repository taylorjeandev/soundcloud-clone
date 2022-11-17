import React from "react";
import Main from "./components/Main";

const Feed = ({ posts }) => {
  return (
    <Main>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <PostList posts={posts} />
        </div>
      </div>
    </Main>
  );
};

export default Feed;
