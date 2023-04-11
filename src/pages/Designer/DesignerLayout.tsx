import React, { useState } from "react";

// import BrandList from "./BrandList";
import BrandData from "assets/data/brandData.json";
import DesignerCarousel from "pages/Designer/DesignerCarousel";

// type dataType = {
//   id: number;
//   engName: string;
//   korName: string;
//   category: string;
// };
const DesignerLayout: React.FC = () => {
  const [data, setData] = useState(BrandData);

  const filterResult_a = (brandnameE: string) => {
    const result_a = BrandData.filter((list) => {
      return list.categoryEng === brandnameE;
    });
    setData(result_a);
  };
  const filterResult_b = (brandnameK: string) => {
    const result_b = BrandData.filter((list) => {
      return list.categoryKor === brandnameK;
    });
    setData(result_b);
  };

  const [brandsearch, setBrandSearch] = useState("");
  const handleSearching = () => {
    console.log(brandsearch);
  };

  let [isInputClicked, setIsInputClicked] = useState(false);

  const [visible, setVisible] = useState(false);

  return (
    <div className="designer-container">
      <h2 className="sub-title">DESIGNER</h2>
      <div className="designer-section designer-section__showup">
        <div className="showup__video">
          <iframe
            width="885"
            height="498"
            src="https://www.youtube.com/embed/s4xnyr2mCuI?autoplay=1&mute=1"
            title="H&amp;M Conscious: Sustainable fashion through recycled clothes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="showup__slide">
          <DesignerCarousel />
        </div>
      </div>

      <ul className="tab-list">
        <div className="tab-list__left">
          <li>
            <button>ALL</button>
          </li>
          <li>
            <button>WOMEN</button>
          </li>
          <li>
            <button>MEN</button>
          </li>
          <li>
            <button>LIFE</button>
          </li>
          <li>
            <button>BEAUTY</button>
          </li>
        </div>

        <div className="tab-list__right">
          <li>
            <button>NEW BRAND</button>
          </li>
          <li>
            <button>TOP BRAND</button>
          </li>
          <li>
            <button>EXCLUSIVE</button>
          </li>
        </div>
      </ul>

      <div className="designer-section designer-section__login">
        <h4>MY❤️BRAND LIST</h4>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "+" : "-"}
        </button>
      </div>
      {visible && (
        <div className="designer-section designer-section__login--open">
          <p>로그인 하시면 MY🤍에 등록한 BRAND의 소식을 확인할 수 있습니다.</p>
          <button>로그인</button>
        </div>
      )}

      <div className="designer-section designer-section__brand-serch">
        <div className="brand-search-container">
          <div className="brand-search-area">
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
                placeholder={isInputClicked === true ? "" : "브랜드명으로 검색"}
                onChange={(e) => setBrandSearch(e.target.value)}
              />
              <button
                className="icon search-icon"
                onClick={() => handleSearching()}
              ></button>
            </div>
            <div className="search-more">see more</div>
          </div>
        </div>
        <div className="brand-search_tab">
          <div className="brand-search_tab--eng">
            <h4>
              <button>ABC</button>
            </h4>
            <div>
              <button onClick={() => setData(BrandData)}>ALL</button>
              <button
                onClick={() => {
                  filterResult_a("A");
                }}
              >
                A
              </button>
              <button onClick={() => filterResult_a("B")}>B</button>
              <button onClick={() => filterResult_a("C")}>C</button>
              <button onClick={() => filterResult_a("D")}>D</button>
              <button onClick={() => filterResult_a("E")}>E</button>
              <button onClick={() => filterResult_a("F")}>F</button>
              <button onClick={() => filterResult_a("G")}>G</button>
              <button onClick={() => filterResult_a("H")}>H</button>
              <button onClick={() => filterResult_a("I")}>I</button>
              <button onClick={() => filterResult_a("J")}>J</button>
              <button onClick={() => filterResult_a("K")}>K</button>
              <button onClick={() => filterResult_a("L")}>L</button>
              <button onClick={() => filterResult_a("M")}>M</button>
              <button onClick={() => filterResult_a("N")}>N</button>
              <button onClick={() => filterResult_a("O")}>O</button>
              <button onClick={() => filterResult_a("P")}>P</button>
              <button onClick={() => filterResult_a("Q")}>Q</button>
              <button onClick={() => filterResult_a("R")}>R</button>
              <button onClick={() => filterResult_a("S")}>S</button>
              <button onClick={() => filterResult_a("T")}>T</button>
              <button onClick={() => filterResult_a("U")}>U</button>
              <button onClick={() => filterResult_a("V")}>V</button>
              <button onClick={() => filterResult_a("W")}>X</button>
              <button onClick={() => filterResult_a("Y")}>Y</button>
              <button onClick={() => filterResult_a("Z")}>Z</button>
              <button onClick={() => filterResult_a("ETC")}>ETC</button>
            </div>
          </div>
          <div className="brand-search_tab--kor">
            <h4>
              <button>ㄱㄴㅇ</button>
            </h4>
            <div>
              <button onClick={() => setData(BrandData)}>ALL</button>
              <button onClick={() => filterResult_b("ㄱ")}>ㄱ</button>
              <button onClick={() => filterResult_b("ㄲ")}>ㄲ</button>
              <button onClick={() => filterResult_b("ㄴ")}>ㄴ</button>
              <button onClick={() => filterResult_b("ㄷ")}>ㄷ</button>
              <button onClick={() => filterResult_b("ㄸ")}>ㄸ</button>
              <button onClick={() => filterResult_b("ㄹ")}>ㄹ</button>
              <button onClick={() => filterResult_b("ㅁ")}>ㅁ</button>
              <button onClick={() => filterResult_b("ㅂ")}>ㅂ</button>
              <button onClick={() => filterResult_b("ㅃ")}>ㅃ</button>
              <button onClick={() => filterResult_b("ㅆ")}>ㅆ</button>
              <button onClick={() => filterResult_b("ㅇ")}>ㅇ</button>
              <button onClick={() => filterResult_b("ㅈ")}>ㅈ</button>
              <button onClick={() => filterResult_b("ㅉ")}>ㅉ</button>
              <button onClick={() => filterResult_b("ㅊ")}>ㅊ</button>
              <button onClick={() => filterResult_b("ㅋ")}>ㅋ</button>
              <button onClick={() => filterResult_b("ㅌ")}>ㅌ</button>
              <button onClick={() => filterResult_b("ㅍ")}>ㅍ</button>
              <button onClick={() => filterResult_b("ㅎ")}>ㅎ</button>
            </div>
          </div>
        </div>

        <div className="brand-list-wrap">
          {data.map((values) => {
            const { id, engName, korName, categoryEng, categoryKor } = values;
            return (
              <ul className="brand-list">
                <li key={id}>
                  <li className="brand-name__eng">{engName}</li>
                  <li className="brand-name__kor">{korName}</li>
                  <li className="brand-category" style={{ display: "none" }}>
                    {categoryEng}
                    {categoryKor}
                  </li>
                </li>
              </ul>
            );
          })}
          {/* <BrandList datalist={BrandData} /> */}
        </div>
      </div>
    </div>
  );
};

export default DesignerLayout;
