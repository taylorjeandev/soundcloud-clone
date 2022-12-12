import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Messages from "../components/Messages";

export default function Root() {
  const [user, setUser] = useState();
  const [messages, setMessages] = useState({});

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((res) => setUser(res.user));
  }, []);

  return (
    <>
      <header className="container">
        <div className="text-center">
          <h1 className="">
            <Link to={user ? "/profile" : "/"}>Binary Upload Boom</Link>
          </h1>
          <span>The #100Devs Social Network</span>
        </div>
      </header>
      <Messages messages={messages} />
      <Outlet context={{ user, setUser, setMessages }} />
    </>
  );
}
