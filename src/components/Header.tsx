// import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

const Header: React.FC = ()=>{
    return (
      <header className="header-container">
        {/* pc header 추후 컴퍼넌트로 분리예정 */}
        <div className='pc-header'>
          <ul>
            <li>
              <Link to="/new">
                <span>NEW111</span>
              </Link>
            </li>
            <li>
              <Link to="/women">
                <span>WOMEN</span>
              </Link>
            </li>
            <li>
              <Link to="/men">
                <span>MEN</span>
              </Link>
            </li>
            <li>
              <Link to="/beauty">
                <span>BEAUTY</span>
              </Link>
            </li>
            <li>
              <Link to="/life">
                <span>LIFE</span>
              </Link>
            </li>
            <li>
              <Link to="/sale">
                <span>SALE</span>
              </Link>
            </li>
            <li>
              <Link to="/designer">
                <span>DESIGNER</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li><a href="/preshow">PRE-SHOW</a></li>
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

  export default Header;