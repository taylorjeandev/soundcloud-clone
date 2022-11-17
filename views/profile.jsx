import React from "react";
import Main from "./components/Main";
import PostList from "./components/PostList";

const Profile = ({ user, posts }) => {
  return (
    <Main>
      <div class="container">
        <div class="row mt-5">
          <div class="col-6">
            <div>
              <p>
                <strong>User Name</strong>: {user.userName}{" "}
              </p>
              <p>
                <strong>Email</strong>: {user.email}{" "}
              </p>
              <a href="/logout" class="col-3 btn btn-primary button">
                Logout
              </a>
            </div>
            <div class="mt-5">
              <h2>Add a song</h2>
              <form
                action="/post/createPost"
                enctype="multipart/form-data"
                method="POST"
              >
                <div class="mb-3">
                  <label for="title" class="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    name="title"
                  />
                </div>
                <div class="mb-3">
                  <label for="caption" class="form-label">
                    Caption
                  </label>
                  <textarea
                    class="form-control"
                    id="caption"
                    name="caption"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="imgUpload" class="form-label">
                    Upload Audio
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="audioUpload"
                    name="file"
                  />
                </div>
                <button type="submit" class="btn btn-primary" value="Upload">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div class="col-6">
            <PostList posts={posts} />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Profile;
