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
                NEW111
              </Link>
            </li>
            <li>
              <Link to="/women">
                WOMEN
              </Link>
            </li>
            <li>
              <Link to="/men">
                MEN
              </Link>
            </li>
            <li>
              <Link to="/beauty">
                BEAUTY
              </Link>
            </li>
            <li>
              <Link to="/life">
                LIFE
              </Link>
            </li>
            <li>
              <Link to="/sale">
                SALE
              </Link>
            </li>
            <li>
              <Link to="/designer">
                DESIGNER
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