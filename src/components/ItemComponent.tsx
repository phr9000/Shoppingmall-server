import React from "react";

// import { useState } from "react";

type dataType = {
  category: string;
  id: number;
  preview: string;
  item: string;
  state: string;
  price: string;
  before?: string;
  sale?: string;
  preorder?: string;
  new?: string;
  celeb?: string;
  only?: string;
};

type GreetingsProps = {
  datalist: dataType[];
  category: string;
};

const ItemComponent: React.FC<GreetingsProps> = (data) => {
  return (
    <div className="item-container">
      {data.datalist
        .filter((list) => list.category === data.category)
        .map((list) => (
          <li key={list.category}>
            <div className="item-preview">
              <p>&#9825;</p>
              <img src={list.preview} alt="test" />
            </div>
            <div className="item-description">
              <h4 className="title">{list.item}</h4>
              <p className="detail">{list.state}</p>
              <div className="price-wrap">
                <span className="price-wrap__price">{list.price}</span>
                <span className="price-wrap__discount">
                  <del>{list.before}</del>
                </span>
                <span className="price-wrap__sale">{list.sale}</span>
              </div>
            </div>
          </li>
        ))}
    </div>
  );
};

export default ItemComponent;
