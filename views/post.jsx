import React from "react";
import Main from "./components/Main";

const Post = ({ post }) => {
  return (
    <Main>
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-6">
            <h2>{post.title} </h2>
            <video controls>
              <source src={post.audio} type="video/mp4" />
            </video>
            <div class="row justify-content-between">
              <form
                class="col-1"
                action={`/post/likePost/${post._id}?_method=PUT`}
                method="POST"
              >
                <button
                  class="btn btn-primary fa fa-heart"
                  type="submit"
                ></button>
              </form>
              <h3 class="col-3">Likes: {post.likes}</h3>
              {post.user == post.user.id && (
                <form
                  action={`/post/deletePost/${post.id}?_method=DELETE`}
                  method="POST"
                  class="col-3"
                >
                  <button
                    class="btn btn-primary fa fa-trash"
                    type="submit"
                  ></button>
                </form>
              )}
            </div>
          </div>
          <div class="col-3 mt-5">
            <p>{post.caption}</p>
          </div>

          <div class="col-6 mt-5">
            <a class="btn btn-primary" href="/profile">
              Return to Profile
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Post;
