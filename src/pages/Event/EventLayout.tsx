import React, { useState } from "react";
import EventCarousel from "./EventCarousel";

import eventData from "assets/data/eventData.json";
import { Select } from "antd";

const EventLayout: React.FC = () => {
  const [data, setData] = useState(eventData);

  const hasWomen = () => {
    const resultWomen = eventData.filter((list) =>
      list.category.includes("WOMEN")
    );
    setData(resultWomen);
  };
  const hasMen = () => {
    const resultMen = eventData.filter((list) => list.category.includes("MEN"));
    setData(resultMen);
  };
  const hasLife = () => {
    const resultLife = eventData.filter((list) =>
      list.category.includes("LIFE")
    );
    setData(resultLife);
  };
  const hasBeauty = () => {
    const resultBeauty = eventData.filter((list) =>
      list.category.includes("BEAUTY")
    );
    setData(resultBeauty);
  };

  const [brandsearch, setBrandSearch] = useState("");
  const handleSearching = () => {
    console.log(brandsearch);
  };

  let [isInputClicked, setIsInputClicked] = useState(false);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const evnetTabList = [
    "ALL",
    "COLLECTION",
    "TREND",
    "EDITORIAL",
    "SALE",
    "EVENT",
  ];

  return (
    <div className="event-container">
      <h2 className="sub-title">EVENT</h2>
      <EventCarousel />
      <div className="event-section">
        <div className="event-benefit event-benefit__login">
          <h4>MY &#9829; BRAND EVENT</h4>
          <div>
            <p>
              로그인 하시면 MY &#9829;에 등록한 BRAND의 최근 EVENT를 확인할 수
              있습니다.
            </p>
            <button>로그인</button>
          </div>
        </div>
        <div className="event-benefit event-benefit__coupon">
          <h4>BENEFIT</h4>
          <div>
            <a href="#!">
              <img src="/images/event_coupon.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="event-search">
        <div className="search-container">
          <div className="search-area">
            <div className="flex align-center">
              <input
                type="text"
                onFocus={() => {
                  setIsInputClicked(true);
                }}
                // 클릭되어 있지 않을 때 작동input 이외의 영역이 클릭되었을 때)
                onBlur={() => {
                  setIsInputClicked(false);
                }}
                placeholder={
                  isInputClicked === true ? "" : "제목 또는 내용, 브랜드명 입력"
                }
                onChange={(e) => setBrandSearch(e.target.value)}
              />
              <button
                className="icon search-icon"
                onClick={() => handleSearching()}
              ></button>
            </div>
          </div>
        </div>
      </div>
      <ul className="event-tab">
        <li>
          <button onClick={() => setData(eventData)}>ALL</button>
        </li>
        <li>
          <button
            onClick={
              // data.filter((list) => list.category.includes("WOMEN"))
              hasWomen
            }
          >
            WOMEN
          </button>
        </li>
        <li>
          <button onClick={hasMen}>MEN</button>
        </li>
        <li>
          <button onClick={hasLife}>LIFE</button>
        </li>
        <li>
          <button onClick={hasBeauty}>BEAUTY</button>
        </li>
      </ul>

      <div className="event-tab__subwrap">
        <ul className="event-tab__submenu">
          {evnetTabList.map((value) => (
            <li>
              <button>
                <span>{value}</span>
              </button>
            </li>
          ))}
        </ul>
        <Select
          defaultValue="진행중 이벤트"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "continued", label: "진행중 이벤트" },
            { value: "finished", label: "종료된 이벤트" },
          ]}
        />
      </div>

      <div className="event-list-wrap">
        {data.map((list) => {
          return (
            <ul className="event-list">
              <li key={list.id}>
                <div className="event-preview">
                  <img src={list.src} alt="이벤트이미지" />
                </div>
                <div className="event-wrap">
                  <li className="event-name">{list.name}</li>
                  <li className="event-des">{list.des}</li>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default EventLayout;
