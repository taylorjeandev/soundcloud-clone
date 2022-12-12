import React from "react";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Profile() {
  const { user } = useOutletContext();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((res) => setPosts(res.posts));
  }, []);

  return (
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
              enctype="multipart/form-data"
              method="POST"
            >
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
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
                <label htmlFor="caption" className="form-label">
                  Caption
                </label>
                <textarea
                  className="form-control"
                  id="caption"
                  name="caption"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="imgUpload" className="form-label">
                  Upload Audio
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="audioUpload"
                  name="file"
                />
              </div>
              <button type="submit" className="btn btn-primary" value="Upload">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-6">{/* <PostList posts={posts} /> */}</div>
      </div>
    </div>
  );
}
