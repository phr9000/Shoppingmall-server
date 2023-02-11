import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/index.scss";

export default function Header() {
  return (
    <header className="header-container">
      <span className="display-inblock">
        <Link to="/guide">Guide</Link>
      </span>
      <span className="display-inblock ml5">
        <Link to="/join">Join</Link>
      </span>
      <span className="display-inblock ml5">
        <Link to="/login">Login</Link>
      </span>
    </header>
  );
}
