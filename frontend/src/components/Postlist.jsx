import React from "react";
import PostPreview from "./PostPreview";

export default function PostList({ posts }) {
  <ul className="row list-unstyled">
    {posts.map((post) => (
      <PostPreview key={post._id} {...post} />
    ))}
  </ul>;
}
