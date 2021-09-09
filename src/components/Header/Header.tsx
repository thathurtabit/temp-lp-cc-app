import { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header: FC = () => {
  return (
    <header className="header">
      <Link to="/" className="masthead">
        Live Person Test
      </Link>

      <nav className="nav">
        <Link to="/gubagoo">Gubagoo Chat</Link>
        <Link to="/contact-at-once">Contact at Once</Link>
        <Link to="/live-person">Live Person #1</Link>
        <Link to="/live-person-2">Live Person #2</Link>
      </nav>
    </header>
  );
};
