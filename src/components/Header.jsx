// import React, {useEffect, useState} from 'react'
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      {/* pc header 추후 컴퍼넌트로 분리예정 */}
      <div className='pc-header'>
        <ul>
          <li><a href="/new">NEW</a></li>
          <li><a href="/women">WOMEN</a></li>
          <li><a href="/men">MEN</a></li>
          <li><a href="/beauty">BEAUTY</a></li>
          <li><a href="/life">LIFE</a></li>
          <li><a href="/sale">SALE</a></li>
          <li><a href="/designer">DESIGNER</a></li>
        </ul>
        <ul>
          <li><a href="/pre-show">PRE-SHOW</a></li>
          <li><a href="/origin">ORIGINAL</a></li>
          <li><a href="/event">EVENT</a></li>
          <li><a href="/best">BEST</a></li>
        </ul>
      </div>
      {/* <span className="display-inblock">
        <Link to="/guide">Guide</Link>
      </span> */}
    </header>
  );
}
