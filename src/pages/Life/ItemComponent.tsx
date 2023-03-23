import React from "react";

// import { useState } from "react";

type dataType = {
  category: string,
  id: number,
  preview: string,
  item: string,
  state: string,
  price: string,
  before?: string,
  sale?: string
};

type GreetingsProps = {
  datalist: dataType[];
  category: string
};

const ItemComponent: React.FC<GreetingsProps> = (data) => {
  return (
    <div className="item-container">
      {data.datalist.filter((list)=> list.category === data.category).map((list) => (
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
