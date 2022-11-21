import React from "react";

const PostPreview = ({ post }) => {
  return (
    <div>
      <ul>
        <li className="col-6 justify-content-between mt-5">
          <a href={`/post/${post._id}`}>
            <h2>{post.title}</h2>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PostPreview;
