import React from "react";
import LifeData from "../../data/lifeData.json";

// import { useState } from "react";

const ItemComponent: React.FC = () => {
  console.log(LifeData.filter((list) => list.category === "HOME"));
  return (
    <div className="item-container">
      {LifeData.map((list) => (
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
  );
};

export default ItemComponent;
