import React from "react";

export default function Login() {
  return (
    <div className="login-container">
      <h2 className="title">로그인</h2>
      <div className="top-title-area"></div>
      <form>
        <div className="user-box mt10">
          <input
            type="text"
            name="login-id"
            required=""
            placeholder="아이디를 입력해주세요"
          />
          <label htmlFor="login-id">username</label>
        </div>
        <div className="user-box mt10">
          <input
            type="text"
            name="login-pw"
            required=""
            placeholder="비밀번호를 입력해주세요"
          />
          <label htmlFor="login-pw">password</label>
        </div>
      </form>
      <div className="find-info mt10 flex">
        <a href="#none">아이디 찾기</a>
        <span></span>
        <a href="#none">비밀번호 찾기</a>
      </div>
     

      <div className="btn-area w100">
        <button className="btn primary" type="button">
          로그인
        </button>
        <button className="btn" type="button">
          회원가입
        </button>
      </div>
    </div>
  );
}
