import React, { useState } from "react";
import ProductCarousel from "components/ProductCarousel";
import whatsNew from "assets/data/whatsNew.json";

const ShopBagLayout: React.FC = () => {
  const [item, setItem] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    spaceBetween: 10,
  };

  console.log(setItem);

  return (
    <div className="shopbag-container">
      <h2 className="sub-title">SHOPPING BAG</h2>
      <ul className="order-line">
        <li>쇼핑백</li>
        <li>주문결제</li>
        <li>주문완료</li>
      </ul>
      <div className="shop-section-1">
        <img
          src="images/shoppingbag-banner.jpg"
          alt=""
          style={{ cursor: "pointer" }}
        />
        <div className="shopbag-box">
          <div className="box1">
            <strong>쇼핑백 상품({item})</strong>
            <table>
              <thead>
                <tr>
                  <th>상품정보</th>
                  <th>수량</th>
                  <th>가격</th>
                  <th>쿠폰</th>
                  <th>배송비</th>
                  <th>상품금액</th>
                  <th>선택</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ verticalAlign: "middle" }}>
                  <td colSpan={7}>쇼핑백에 담긴 상품이 없습니다.</td>
                </tr>
              </tbody>
            </table>

            <div className="button-sec">
              <button>선택상품삭제</button>
              <button>쇼핑계속하기</button>
            </div>
          </div>
          <ul className="box2">
            <strong>주문금액</strong>
            <li>
              <p>총 상품 금액</p>
              <span>0 원</span>
            </li>
            <li>
              <p>배송비</p>
              <span>+0 원</span>
            </li>
            <li>
              <p>총 결제금액</p>
              <span>0 원</span>
            </li>
            <li>
              <p>적립예정 포인트</p>
              <span>0 p</span>
            </li>
            <button>선택상품 주문하기</button>
          </ul>
        </div>

        <div className="shop-section-2">
          <div className="md-title">
            <h4>Buy It with</h4>
          </div>
          <ProductCarousel setting={settings} dataList={whatsNew} />
        </div>
      </div>
    </div>
  );
};

export default ShopBagLayout;
