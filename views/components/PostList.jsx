import React from "react";
import PostPreview from "./PostPreview";

const PostList = ({ posts }) => {
  return (
    <div>
      <ul class="row list-unstyled">
        {posts.map((post) => (
          <PostPreview key={post._id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
