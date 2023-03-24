import React from "react";
import LifeCarousel from "pages/Life/LifeCarousel";
// import ItemComponent from "pages/Life/ItemComponent";
import LifeData from "../../data/lifeData.json";
import bannerData from "../../data/bannerData.json";
import ItemComponent from "./ItemComponent";
import SideComponent from "./SideComponent";

// import { useState } from "react";

const LifeLayout: React.FC = () => {
  return (
    <div className="life-container">
      <h2 className="sub-title">LIFE</h2>
      <LifeCarousel></LifeCarousel>
      <ul className="tab-list">
        <li>
          <button>홈</button>
        </li>
        <li>
          <button>트래블</button>
        </li>
        <li>
          <button>디지털</button>
        </li>
        <li>
          <button>컬쳐</button>
        </li>
        <li>
          <button>푸드</button>
        </li>
      </ul>
      <div className="life-section life-section-1">
        <SideComponent datalist={bannerData} id={1} />

        <div className="life-section__home">
          <h3>HOME</h3>
          <ItemComponent datalist={LifeData} category={"HOME"} />
        </div>
      </div>
      <div className="mid-banner">
        <img src="images/life-midbanner.jpg" alt="" />
      </div>
      <div className="life-section life-section-2">
        <SideComponent datalist={bannerData} id={3} />
        <div className="life-section__culture">
          <h3>CULTURE</h3>
          <ItemComponent datalist={LifeData} category={"CULTURE"} />
        </div>
        <div className="life-section__food">
          <h3>FOOD</h3>
          <ItemComponent datalist={LifeData} category={"FOOD"} />
        </div>
      </div>
      <div className="life-section life-section-3">
        <div className="life-section__travel">
          <h3>TRAVEL</h3>
          <div className="sm-banner">
            <p>
              <h4>
                <strong>
                  모던하고 기능적인
                  <br />
                  제로러기지
                </strong>
              </h4>
              <br />
              New standard for mordern travel
            </p>
            <span>
              <img src="images/life-item__travel-0.jpg" alt="" />
            </span>
          </div>
          <ItemComponent datalist={LifeData} category={"TRAVEL"} />
        </div>
        <div className="life-section__digital">
          <h3>DIGITAL</h3>
          <div className="sm-banner">
            <p>
              <h4>
                <strong>
                  애플 정품을 만나요!
                  <br />
                  당신에게 필요한 APPLE
                </strong>
              </h4>
              <br />
              애플워치, 아이폰, 에어팟, 충전기, 정품케이스 지금 바로 구매하세요!
            </p>
            <span>
              <img src="images/life-item__digital-0.jpg" alt="" />
            </span>
          </div>
          <ItemComponent datalist={LifeData} category={"DIGITAL"} />
        </div>
      </div>
      <div className="life-section life-section-4">
        <div className="life-section__story">
          <h3>LIFE STORY</h3>
          <div className="life-section__story--wrap">
            <div className="life-section__story--sec-1">
              <SideComponent datalist={bannerData} id={10} />
              <div className="life-section__story__des">
                <strong>LIFE FESTIVAL MARCH</strong>
                <p>월간라이프 3월호, 매달 찾아오는 라이프 스타일 제안서!</p>
              </div>
              <ItemComponent datalist={LifeData} category={"FESTIVAL"} />
            </div>
            <div className="life-section__story--sec-1">
              <SideComponent datalist={bannerData} id={11} />
              <div className="life-section__story__des">
                <strong>LIVART</strong>
                <p>
                  행복을 위해 더 나은 공간을 제안합니다. 차별화된 디자인과
                  소재로, 가구 그 이상의 가치를 전합니다. 또한 주방, 바스,
                  건자재, 해외 프리미엄 홈퍼니싱에 이르기까지
                </p>
              </div>
              <ItemComponent datalist={LifeData} category={"LIVART"} />
            </div>
            <div className="life-section__story--sec-1">
              <SideComponent datalist={bannerData} id={12} />
              <div className="life-section__story__des">
                <strong>SONY</strong>
                <p>
                  #벗지않는편안함. 음악이 필요한 순간들. 매일매일 당신과
                  함께해요. 노이즈캔슬링은 역시 소니!
                </p>
              </div>
              <ItemComponent datalist={LifeData} category={"SONY"} />
            </div>
            <div className="life-section__story--sec-1">
              <SideComponent datalist={bannerData} id={13} />
              <div className="life-section__story__des">
                <strong>KODAK CARRIER</strong>
                <p>
                  모든 순간을 기억하고 공유할 수 있는 삶을 지향하는 코닥의
                  헤리티지로, 모든 여행자를 위한 아이코닉한 컬러와 디자인을
                  선보입니다. W컨셉 단독런칭가로 만나보세요.
                </p>
              </div>
              <ItemComponent datalist={LifeData} category={"KODAK"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeLayout;
