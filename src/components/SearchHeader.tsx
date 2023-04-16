import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchHeader: React.FC = () => {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    console.log(search);
  };

  // input 호버시 placeholder 사라지게
  let [isInputClicked, setIsInputClicked] = useState(false);

  return (
    <div className="search-header-container">
      <h1>
        <a href="/">
          <span className="logo-black"></span>
        </a>
      </h1>
      <div className="search-container">
        <div className="search-area">
          <div className="flex align-center">
            <input
              type="text"
              onFocus={() => {
                setIsInputClicked(true);
              }}
              // 클릭되어 있지 않을 때 작동input 이외의 영역이 클릭되었을 때)
              onBlur={() => {
                setIsInputClicked(false);
              }}
              placeholder={
                isInputClicked === true
                  ? ""
                  : "지금 바로 [프리쇼] 로 봄 신상을 만나보세요"
              }
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="icon search-icon"
              onClick={() => handleSearch()}
            ></button>
          </div>
          <div className="search-more">see more</div>
        </div>
      </div>
      <div className="util-area">
        <Link to="/join">
          <button className="join-area">
            <i className="icon join-icon"></i>
            <span>Join</span>
          </button>
        </Link>
        <Link to="/login">
          <button className="login-area">
            <i className="icon login-icon"></i>
            <span>Login</span>
          </button>
        </Link>
        <Link to="/shopbag">
          <button className="basket-area">
            <i className="icon basket-icon"></i>
            <span>0</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchHeader;
