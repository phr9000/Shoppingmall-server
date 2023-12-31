import React, { useState } from "react";
import bestData from "assets/data/bestData.json";
import BestItemComponent from "components/BestItemComponent";

const BestLayout: React.FC = () => {
  const [selectedDiv, setSelectedDiv] = useState<string | null>("ALL");

  const handleButtonClick = (divName: string) => {
    setSelectedDiv(divName);
  };

  const [brandsearch, setBrandSearch] = useState("");
  const handleSearching = () => {
    console.log(brandsearch);
  };

  let [isInputClicked, setIsInputClicked] = useState(false);

  const menuList = ["ALL", "WOMEN", "MEN", "LIFE", "BEAUTY"];

  return (
    <div className="container-wrapper best-container">
      <div className="thumbnail-container">
        <h4 className="thumbnail-title">BEST</h4>
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
        {menuList.map((value) => (
          <li data-hashtag={{ value }} key={value}>
            <button
              className={selectedDiv === value ? "selected" : ""}
              onClick={() => handleButtonClick(value)}
              type="button"
            >
              {value}
            </button>
          </li>
        ))}
      </ul>

      {selectedDiv === "ALL" && <BestItemComponent datalist={bestData} />}
      {selectedDiv === "WOMEN" && (
        <div className="section-wrap">
          <div className="section section-1">
            <BestItemComponent
              datalist={bestData}
              category={"WOMEN"}
              id={[1, 2, 3]}
            />
          </div>
          <div className="section section-2">
            <BestItemComponent
              datalist={bestData}
              category={"WOMEN"}
              id={[4, 5, 6, 7]}
            />
          </div>
        </div>
      )}

      {selectedDiv === "MEN" && (
        <div className="section-wrap">
          <div className="section section-1">
            <BestItemComponent
              datalist={bestData}
              category={"MEN"}
              id={[1, 2, 3]}
            />
          </div>
          <div className="section section-2">
            <BestItemComponent
              datalist={bestData}
              category={"MEN"}
              id={[4, 5, 6, 7]}
            />
          </div>
        </div>
      )}
      {selectedDiv === "BEAUTY" && (
        <div className="section-wrap">
          <div className="section section-1">
            <BestItemComponent
              datalist={bestData}
              category={"BEAUTY"}
              id={[1, 2, 3]}
            />
          </div>
          <div className="section section-2">
            <BestItemComponent
              datalist={bestData}
              category={"BEAUTY"}
              id={[4, 5, 6, 7]}
            />
          </div>
        </div>
      )}
      {selectedDiv === "LIFE" && (
        <div className="section-wrap">
          <div className="section section-1">
            <BestItemComponent
              datalist={bestData}
              category={"LIFE"}
              id={[1, 2, 3]}
            />
          </div>
          <div className="section section-2">
            <BestItemComponent
              datalist={bestData}
              category={"LIFE"}
              id={[4, 5, 6, 7]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BestLayout;
