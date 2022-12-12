import React from "react";
import Main from "./components/Main";
import PostList from "./components/PostList";

const Profile = ({ user, posts }) => {
  return (
    <Main>
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <div>
              <p>
                <strong>User Name</strong>: {user.userName}{" "}
              </p>
              <p>
                <strong>Email</strong>: {user.email}{" "}
              </p>
              <a href="/logout" className="col-3 btn btn-primary button">
                Logout
              </a>
            </div>
            <div className="mt-5">
              <h2>Add a song</h2>
              <form
                action="/post/createPost"
                encType="multipart/form-data"
                method="POST"
              >
                <div className="mb-3">
                  <label for="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                  />
                </div>
                <div className="mb-3">
                  <label for="caption" className="form-label">
                    Caption
                  </label>
                  <textarea
                    className="form-control"
                    id="caption"
                    name="caption"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label for="imgUpload" className="form-label">
                    Upload Audio
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="audioUpload"
                    name="file"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  value="Upload"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-6">
            <PostList posts={posts} />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Profile;
