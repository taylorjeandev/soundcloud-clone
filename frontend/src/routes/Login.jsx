import React from "react";
import { useOutletContext } from "react-router-dom";

const Login = () => {
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
          <form action="/login" method="POST" onSubmit={handleSubmit}>
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
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
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

export default Login;
