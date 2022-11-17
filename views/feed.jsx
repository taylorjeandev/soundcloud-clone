import React from "react";
import Main from "./components/Main";

export default function Feed(props) {
  return (
    <Main>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <ul className="row list-unstyled">
            {props.posts.map((post) => {
              return (
                <li className="col-6 justify-content-between mt-5">
                  <a href={`/post/${post.id}`}>
                    <img className="img-fluid" src={post.image} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Main>
  );
}
