import React, { useState } from "react";
import preShowtData from "assets/data/preshowData.json";
import { Pagination } from "antd";
const PreShowLayout: React.FC = () => {
  // tab 관련
  const tabItems = ["ALL", "모던", "페미닌", "캐주얼", "베이직", "로맨틱"];
  const [clickedIndex, setClickedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  return (
    <div className="container-wrapper preshow-container">
      <div className="thumbnail-container">
        <div className="thumbnail-title">pre show</div>
        <div className="desc">
          W컨셉의 주요 브랜드의 신상과 트렌드를 먼저 만나볼 수 있어요
        </div>
        <div className="preshow-tab">
          <ul>
            {tabItems.map((item, index) => (
              <li
                key={index}
                className={index === clickedIndex ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                <button>#{item}</button>
              </li>
            ))}
          </ul>
          <ul></ul>
        </div>
        <div className="preshow-content">
          <div className="event-list-wrap">
            <ul className="event-list">
              {preShowtData
                .filter(
                  (list) =>
                    tabItems[clickedIndex] === "ALL" ||
                    list.category === tabItems[clickedIndex]
                )
                .map((list) => {
                  return (
                    <li key={list.id}>
                      <a href="!#">
                        <div className="img-area">
                          <div className="category-tag-area">
                            {list.categoryTag1 && (
                              <span>{list.categoryTag1}</span>
                            )}
                            {list.categoryTag2 && (
                              <span>{list.categoryTag2}</span>
                            )}
                          </div>
                          <img src={list.img} alt={list.title} />
                        </div>
                        <div className="txt-area">
                          <strong>{list.title}</strong>
                          <p className="desc">{list.desc}</p>
                          <dl className="flex align-center">
                            <dt className="mini-tag">{list.miniTag}</dt>
                            <dd className="date">{list.date}</dd>
                          </dl>
                        </div>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <Pagination style={{ marginTop: "60px" }} defaultCurrent={1} total={50} />
        </div>
    </div>
  );
};
export default PreShowLayout;
