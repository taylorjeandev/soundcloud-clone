import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Messages from "../components/Messages";

export default function Root() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, []);

  return (
    <>
      <header className="container">
        <div className="text-center">
          <h1 className="">
            <Link to={user ? "/profile" : "/"}>Song Stash</Link>
          </h1>
          <span>Full Stack Audio</span>
        </div>
      </header>
      <Messages messages={messages} />
      <Outlet context={{ user, setUser, setMessages }} />
    </>
  );
}
