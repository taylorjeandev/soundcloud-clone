import React from "react";

const Post = ({ post }) => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <h2>{post.title} </h2>
          <video controls>
            <source src={post.audio} type="video/mp4" />
          </video>
          <div className="row justify-content-between">
            <form
              className="col-1"
              action={`/post/likePost/${post._id}?_method=PUT`}
              method="POST"
            >
              <button
                className="btn btn-primary fa fa-heart"
                type="submit"
              ></button>
            </form>
            <h3 className="col-3">Likes: {post.likes}</h3>
            {post.user === post.user.id && (
              <form
                action={`/post/deletePost/${post.id}?_method=DELETE`}
                method="POST"
                className="col-3"
              >
                <button
                  className="btn btn-primary fa fa-trash"
                  type="submit"
                ></button>
              </form>
            )}
          </div>
        </div>
        <div className="col-3 mt-5">
          <p>{post.caption}</p>
        </div>

        <div className="col-6 mt-5">
          <a className="btn btn-primary" href="/profile">
            Return to Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
