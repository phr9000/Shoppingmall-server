import React from "react";
import LifeCarousel from "pages/Life/LifeCarousel";
// import ItemComponent from "pages/Life/ItemComponent";
import LifeData from "../../data/lifeData.json";

// import { useState } from "react";

const LifeLayout: React.FC = () => {
  return (
    <div className="life-container">
      <h2 className="sub-title">
        <p>LIFE</p>
      </h2>
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
      <div className="life-section">
        <div className="side-banner"></div>
        <div className="item-container">
          {LifeData.filter((list) => list.category === "HOME").map((list) => (
            <li key={list.category}>
              <img src={list.preview} alt="test" />
              <span className="title">{list.item}</span>
              <span className="detail">{list.state}</span>
              <span className="price-wrap">
                <span className="price-wrap__price">{list.price}</span>
                <span className="price-wrap__discount">{list.before}</span>
                <span className="sale">{list.sale}</span>
              </span>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeLayout;
