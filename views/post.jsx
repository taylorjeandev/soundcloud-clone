import React from "react";
import Main from "./components/Main";

export default function Post(props) {
  return (
    <Main>
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-6">
            <h2>{props.post.title} </h2>
            <video controls>
              <source src={props.post.audio} type="video/mp4" />
            </video>
            <div class="row justify-content-between">
              <form
                class="col-1"
                action={`/post/likePost/${props.post.id}?_method=PUT`}
                method="POST"
              >
                <button
                  class="btn btn-primary fa fa-heart"
                  type="submit"
                ></button>
              </form>
              <h3 class="col-3">Likes: {props.post.likes}</h3>
              {props.post.user == props.user.id && (
                <form
                  action={`/post/deletePost/${props.post.id}?_method=DELETE`}
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
            <p>{props.post.caption}</p>
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
}
