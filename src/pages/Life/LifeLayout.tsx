import React from "react";
import LifeCarousel from "pages/Life/LifeCarousel";
// import ItemComponent from "pages/Life/ItemComponent";
import LifeData from "../../data/lifeData.json";
import ItemComponent from "./ItemComponent";

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
          <ItemComponent datalist={LifeData} category={"HOME"}/>
      </div>
    </div>
  );
};

export default LifeLayout;
