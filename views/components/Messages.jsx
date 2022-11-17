import React from "react";

const Messages = ({ messages }) => {
  return (
    <>
      {messages.errors &&
        messages.errors.map((el, i) => {
          return (
            <div key={i} className="alert alert-danger">
              {el.msg}
            </div>
          );
        })}
      {messages.info
        ? messages.info.map((el, i) => {
            return (
              <div key={i} className="alert alert-danger">
                {el.msg}
              </div>
            );
          })
        : null}
    </>
  );
};

export default Messages;
