import React from "react";
import Main from "./components/Main";

const Index = () => {
  return (
    <Main>
      <div>
        <main className="container">
          <div className="row justify-content-around mt-5">
            <a href="/login" className="col-3 btn btn-primary">
              {" "}
              Login
            </a>
            <a href="/signup" className="col-3 btn btn-primary">
              {" "}
              Signup
            </a>
          </div>
        </main>
      </div>
    </Main>
  );
};

export default Index;
