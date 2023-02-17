import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__nav">
        <ul>
          <li>회사소개</li>
          <li>입점상담</li>
          <li>제휴문의</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>고객센터</li>
          <li>채용정보</li>
          <li>GLOBAL</li>
        </ul>
      </div>
      <div className="footer__info">
        <div className="footer__info__company">
          상호명 : ㈜더블유컨셉코리아 ㅣ 대표자 : 이은철 ㅣ 주소 : 서울특별시
          강남구 테헤란로 231, EAST동 20층(역삼동, 센터필드)
          <br /> 사업자등록번호 : 211-88-19183 ㅣ 통신판매업신고 :
          제2009호-서울강남-00847호 <button>사업자정보확인</button> │
          개인정보보호책임자 : 허선희 │ 호스팅서비스 : ㈜ 더블유컨셉코리아
          <br /> COPYRIGHT ⓒ ㈜더블유컨셉코리아 ALL RIGHTS RESERVED
        </div>
        <div className="footer__info__customer">
          <b>소비자피해보상보험</b>
          <br />
          고객님은 안전거래를 위해 현금 결제 시, Wconcept 에서 가입한
          소비자피해보상보험 서비스를 이용하실 수 있습니다. <br />
          보상대상 : 미배송/반품, 환불거부/쇼핑몰부도
          <button>서비스 가입사실 확인</button>
        </div>
      </div>
    </div>
  );
}
