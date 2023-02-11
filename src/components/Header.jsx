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
      <div>후덜덜해 이렇게 하는 데 변경이 안되나? 이번에는 성공한다</div>
    </header>
  );
}
