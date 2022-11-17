import React from "react";
import Main from "./components/Main";
import Messages from "./components/Messages";
const Signup = ({ messages }) => {
  return (
    <Main>
      <main class="container">
        <div class="row justify-content-center">
          <section class="col-6 mt-5">
            <Messages messages={messages} />
            <form action="/signup" method="POST">
              <div class="mb-3">
                <label for="userName" class="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="userName"
                  name="userName"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                />
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </section>
        </div>
      </main>
    </Main>
  );
};
export default Signup;
