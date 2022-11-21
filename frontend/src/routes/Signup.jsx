import React from "react";
import { useOutletContext } from "react-router-dom";

const Signup = () => {
  const { setUser, setMessages } = useOutletContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const response = await fetch(form.action, {
      method: form.method,
      body: new URLSearchParams(new FormData(form)),
    });
    const json = await response.json();

    if (json.messages) setMessages(json.messages);
    if (json.user) {
      setUser(json.user);
    }
  };

  return (
    <main className="container">
      <div className="row justify-content-center">
        <section className="col-6 mt-5">
          <form action="/signup" method="POST" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};
export default Signup;
