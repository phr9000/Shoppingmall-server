import React, { useState, useEffect } from "react";

// import { useState } from "react";

type dataType = {
  category: string;
  id: number;
  preview: string;
  name: string;
  promotion?: string;
  des?: string;
  price: string;
  before?: string;
  sale?: string;
  preorder?: string;
  new?: string;
  celeb?: string;
  coupon?: string;
  only?: string;
};

type bestProps = {
  datalist: dataType[];
  category?: string;
  id?: number[];
};

const BestItemComponent: React.FC<bestProps> = ({ datalist, category, id }) => {
  const [filteredData, setFilteredData] = useState<dataType[]>([]);

  useEffect(() => {
    let filtered = datalist;
    if (category) {
      filtered = filtered.filter((list) => list.category === category);
    }
    if (id) {
      filtered = filtered.filter((list) => id.includes(list.id));
    }
    setFilteredData(filtered);
  }, [datalist, category, id]);

  return (
    <div className="best-item-container">
      {filteredData.map((list) => (
        <li key={list.id}>
          <div className="best-item-preview">
            <span className="ranking-num">
              {list.id}
              <br />
              <strong>BEST</strong>
            </span>
            <img src={list.preview} alt={list.name} />
          </div>
          <div className="best-item-description">
            <h4 className="title">{list.promotion}</h4>
            <p className="detail">{list.des}</p>
            <div className="price-wrap">
              <span className="price-wrap__price">{list.price}</span>
              {list.before && (
                <span className="price-wrap__discount">
                  <del>{list.before}</del>
                </span>
              )}
              {list.sale && (
                <span className="price-wrap__sale">{list.sale}</span>
              )}
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default BestItemComponent;
