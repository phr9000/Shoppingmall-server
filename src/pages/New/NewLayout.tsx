import React, { useState } from "react";
import { Col, Pagination, Row } from "antd";
import newDailyData from "assets/data/newDailyData.json";
import newWeeklyData from "assets/data/newWeeklyData.json";
import { Select } from "antd";
import ProductIntro from "components/ProductIntro";
import ProductList from "assets/data/products.json";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const NewLayout: React.FC = () => {
  const [search, setSearch] = useState("");
  const [isFilter, setFilter] = useState(false);
  const handleSearch = () => {
    console.log(search);
  };

  let [isInputClicked, setIsInputClicked] = useState(false);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const filterClick = () => {
    if (isFilter) setFilter(false);
    else setFilter(true);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const taglist = [
    "스웨트셔츠",
    "에코백",
    "메리제인",
    "원피스",
    "후디",
    "스니커즈",
    "착용",
    "미니백",
    "블라우스",
  ];
  const smallMenuList = [
    "CATEGORY",
    "BRAND",
    "PRICE",
    "BENEFIT",
    "COLOR",
    "DISCOUNT",
  ];
  const FilterMenuList = ["WOMEN", "MEN", "LIFE", "BEAUTY"];
  const LuxuryList = [
    "럭셔리백",
    "럭셔리어패럴",
    "럭셔리슈즈",
    "럭셔리액세서리",
    "럭셔리키즈",
  ];
  const APPARELList = [
    "티셔츠",
    "아우터",
    "팬츠",
    "니트",
    "원피스",
    "스커트",
    "셔츠",
    "데님",
    "블라우스",
    "언더웨어",
    "라운지웨어",
    "키즈어패럴",
  ];
  const ACCList = [
    "주얼리",
    "모자",
    "헤어액세서리",
    "패션엑세서리",
    "아이웨어",
    "14K골드",
    "스카프/머플러",
    "시계",
  ];
  const BagList = [
    "숄더백",
    "토트백",
    "크로스백",
    "지갑",
    "백팩",
    "에코/캔버스팩",
    "클러치",
    "기타가방",
    "백액세서리",
    "키즈백",
  ];
  const ActiveList = ["스포츠웨어", "골프", "에슬레저", "스윔웨어"];
  const ShoesList = [
    "플랫슈즈",
    "펌프스",
    "샌들",
    "뮬/슬리퍼",
    "로퍼",
    "스니커즈",
    "부츠",
    "슈즈액세서리",
    "시즈널슈즈",
    "키즈슈즈",
  ];

  return (
    <div className="container-wrapper new-container">
      <section className="thumbnail-container">
        <div className="title">NEW</div>
        <div className="hot-tag-container">
          <div className="hot-tag-area">
            <h4>인기태그</h4>
            <ul className="contents">
              {taglist
                .filter((value) => value === "스웨트셔츠")
                .map((value) => (
                  <li
                    className="tag side-tag"
                    data-hashtag={{ value }}
                    key={value}
                  >
                    <button type="button">{value}</button>
                  </li>
                ))}
              {taglist
                .filter(
                  (value) => value !== "스웨트셔츠" && value !== "블라우스"
                )
                .map((value) => (
                  <li
                    className="tag tag_items"
                    data-hashtag={{ value }}
                    key={value}
                  >
                    <button type="button">{value}</button>
                  </li>
                ))}
              {taglist
                .filter((value) => value === "블라우스")
                .map((value) => (
                  <li
                    className="tag side_tag"
                    data-hashtag={{ value }}
                    key={value}
                  >
                    <button type="button">{value}</button>
                  </li>
                ))}
            </ul>
          </div>
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
                  placeholder={isInputClicked === true ? "" : "태그 검색"}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="icon del-icon"
                  onClick={() => handleSearch()}
                ></button>
                <button
                  className="icon search-icon"
                  onClick={() => handleSearch()}
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="left-rank-area"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            verticalAlign: "top",
            width: "1780px",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "300px",
                height: "155px",
                backgroundColor: "gray",
              }}
            >
              <h4 style={{ padding: "20px", fontSize: "28px", color: "white" }}>
                TODAY
                <br />
                UPDATED
              </h4>
              <h4 style={{ padding: "20px", fontSize: "15px", color: "white" }}>
                오늘 등록된 신상품 191
              </h4>
            </div>
            {/* 날짜별 신상품 */}
            <div
              style={{
                width: "300px",
                height: "53px",
                backgroundColor: "lightgray",
              }}
            >
              <h4 style={{ padding: "20px", fontSize: "18px" }}>
                날짜별 신상품
              </h4>
            </div>
            <div
              style={{
                width: "300px",
                height: "370px",
                overflow: "auto",
                backgroundColor: "#FBFBFB",
              }}
            >
              {newDailyData.map((value) => (
                <div
                  key={value.date}
                  style={{
                    gap: "1rem",
                    padding: "10px",
                    height: "37px",
                    fontSize: "15px",
                    borderBottom: "1px solid lightgray",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ color: "grey" }}> {value.date} </p>{" "}
                  <p> {value.count} </p>
                </div>
              ))}
            </div>
            {/* 주간별 신상품 */}
            <div
              style={{
                width: "300px",
                height: "53px",
                backgroundColor: "lightgray",
              }}
            >
              <h4 style={{ padding: "20px", fontSize: "18px" }}>
                주간별 신상품
              </h4>
            </div>
            <div
              style={{
                width: "300px",
                height: "370px",
                overflow: "auto",
                backgroundColor: "#FBFBFB",
              }}
            >
              {newWeeklyData.map((value) => (
                <div
                  key={value.name}
                  style={{
                    padding: "10px",
                    height: "37px",
                    fontSize: "15px",
                    borderBottom: "1px solid lightgray",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ color: "grey" }}> {value.name} </p>{" "}
                  <p style={{ textAlign: "right" }}> {value.count} </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                width: "1450px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "97%",
                  height: "55px",
                  backgroundColor: "#FBFBFB",
                  marginLeft: "20px",
                  borderTop: "1px solid lightgrey",
                  borderBottom: "3px solid black",
                  justifyContent: "space-between",
                }}
              >
                <button
                  type="button"
                  onClick={() => filterClick()}
                  style={{
                    padding: "18px",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Filter +
                </button>
                <ul style={{ padding: "18px", listStyle: "none" }}>
                  {smallMenuList.map((value) => (
                    <li
                      style={{ display: "inline", marginRight: "40px" }}
                      data-hashtag={{ value }}
                      key={value}
                    >
                      <button
                        style={{ fontSize: "15px", fontWeight: "bold" }}
                        type="button"
                      >
                        {value}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {isFilter === true ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "97%",
                    height: "700px",
                    backgroundColor: "#FBFBFB",
                    marginLeft: "20px",
                    justifyContent: "flex-start",
                    borderBottom: "3px solid black",
                    position: "absolute",
                    zIndex: 2,
                    top: 60,
                    left: 0,
                  }}
                >
                  <ul style={{ padding: "18px", listStyle: "none" }}>
                    {FilterMenuList.map((value) => (
                      <li
                        style={{ display: "inline", marginRight: "40px" }}
                        data-hashtag={{ value }}
                        key={value}
                      >
                        <button
                          style={{ fontSize: "15px", fontWeight: "bold" }}
                          type="button"
                        >
                          {value}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div
                    style={{
                      marginLeft: "40px",
                      display: "flex",
                      flexDirection: "column",
                      width: "94%",
                      height: "532px",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "40px",
                        width: "94%",
                        display: "flex",
                        flexDirection: "row",
                        borderBottom: "1px solid lightgrey",
                      }}
                    >
                      <Checkbox
                        style={{
                          padding: "18px",
                          marginLeft: "20px",
                          fontSize: "13px",
                        }}
                        onChange={onChange}
                      >
                        LUXURY
                      </Checkbox>
                      <ul
                        style={{
                          padding: "18px",
                          listStyle: "none",
                          marginLeft: "30px",
                          width: "95%",
                          height: "60px",
                        }}
                      >
                        {LuxuryList.map((value) => (
                          <li
                            style={{ display: "inline", marginRight: "90px" }}
                            data-hashtag={{ value }}
                            key={value}
                          >
                            <Checkbox
                              style={{ marginLeft: "20px", fontSize: "13px" }}
                              onChange={onChange}
                            >
                              {value}
                            </Checkbox>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      style={{
                        marginLeft: "40px",
                        width: "94%",
                        display: "flex",
                        flexDirection: "row",
                        borderBottom: "1px solid lightgrey",
                      }}
                    >
                      <Checkbox
                        style={{
                          padding: "18px",
                          marginLeft: "20px",
                          fontSize: "13px",
                        }}
                        onChange={onChange}
                      >
                        APPARE
                      </Checkbox>
                      <ul
                        style={{
                          alignItems: "center",
                          padding: "18px",
                          listStyle: "none",
                          marginLeft: "30px",
                          width: "95%",
                          height: "100px",
                        }}
                      >
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                          {APPARELList.map((value) => (
                            <Col className="gutter-row" span={6}>
                              <li data-hashtag={{ value }} key={value}>
                                <Checkbox onChange={onChange}>{value}</Checkbox>
                              </li>
                            </Col>
                          ))}
                        </Row>
                      </ul>
                    </div>
                    <div
                      style={{
                        marginLeft: "40px",
                        width: "94%",
                        display: "flex",
                        flexDirection: "row",
                        borderBottom: "1px solid lightgrey",
                      }}
                    >
                      <Checkbox
                        style={{
                          padding: "18px",
                          marginLeft: "20px",
                          fontSize: "13px",
                        }}
                        onChange={onChange}
                      >
                        ACC
                      </Checkbox>
                      <ul
                        style={{
                          alignItems: "center",
                          padding: "18px",
                          listStyle: "none",
                          marginLeft: "30px",
                          width: "95%",
                          height: "80px",
                        }}
                      >
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                          {ACCList.map((value) => (
                            <Col className="gutter-row" span={6}>
                              <li data-hashtag={{ value }} key={value}>
                                <Checkbox onChange={onChange}>{value}</Checkbox>
                              </li>
                            </Col>
                          ))}
                        </Row>
                      </ul>
                    </div>
                    <div
                      style={{
                        marginLeft: "40px",
                        width: "94%",
                        display: "flex",
                        flexDirection: "row",
                        borderBottom: "1px solid lightgrey",
                      }}
                    >
                      <Checkbox
                        style={{
                          padding: "18px",
                          marginLeft: "20px",
                          fontSize: "13px",
                        }}
                        onChange={onChange}
                      >
                        BAG
                      </Checkbox>
                      <ul
                        style={{
                          alignItems: "center",
                          padding: "18px",
                          listStyle: "none",
                          marginLeft: "30px",
                          width: "95%",
                          height: "100px",
                        }}
                      >
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                          {BagList.map((value) => (
                            <Col className="gutter-row" span={6}>
                              <li data-hashtag={{ value }} key={value}>
                                <Checkbox onChange={onChange}>{value}</Checkbox>
                              </li>
                            </Col>
                          ))}
                        </Row>
                      </ul>
                    </div>
                    <div
                      style={{
                        marginLeft: "40px",
                        width: "94%",
                        display: "flex",
                        flexDirection: "row",
                        borderBottom: "1px solid lightgrey",
                      }}
                    >
                      <Checkbox
                        style={{
                          padding: "18px",
                          marginLeft: "20px",
                          fontSize: "13px",
                        }}
                        onChange={onChange}
                      >
                        ACTIVE
                      </Checkbox>
                      <ul
                        style={{
                          alignItems: "center",
                          padding: "18px",
                          listStyle: "none",
                          marginLeft: "30px",
                          width: "95%",
                          height: "50px",
                        }}
                      >
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                          {ActiveList.map((value) => (
                            <Col className="gutter-row" span={6}>
                              <li data-hashtag={{ value }} key={value}>
                                <Checkbox onChange={onChange}>{value}</Checkbox>
                              </li>
                            </Col>
                          ))}
                        </Row>
                      </ul>
                    </div>
                    <div
                      style={{
                        marginLeft: "40px",
                        width: "94%",
                        display: "flex",
                        flexDirection: "row",
                        borderBottom: "1px solid lightgrey",
                      }}
                    >
                      <Checkbox
                        style={{
                          padding: "18px",
                          marginLeft: "20px",
                          fontSize: "13px",
                        }}
                        onChange={onChange}
                      >
                        SHOES
                      </Checkbox>
                      <ul
                        style={{
                          alignItems: "center",
                          padding: "18px",
                          listStyle: "none",
                          marginLeft: "30px",
                          width: "95%",
                          height: "100px",
                        }}
                      >
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                          {ShoesList.map((value) => (
                            <Col className="gutter-row" span={6}>
                              <li data-hashtag={{ value }} key={value}>
                                <Checkbox onChange={onChange}>{value}</Checkbox>
                              </li>
                            </Col>
                          ))}
                        </Row>
                      </ul>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "50px",
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "gray",
                        width: "80px",
                        color: "white",
                        fontSize: "15px",
                        marginRight: "20px",
                      }}
                    >
                      초기화
                    </button>
                    <button
                      style={{
                        backgroundColor: "black",
                        width: "80px",
                        color: "white",
                        fontSize: "15px",
                        marginRight: "20px",
                      }}
                    >
                      필터 적용
                    </button>
                  </div>
                </div>
              ) : null}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "97%",
                  height: "55px",
                  marginLeft: "20px",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ padding: "18px", fontSize: "15px" }}>
                  108,652 개의 상품
                </p>
                <div style={{ marginTop: "18px" }}>
                  <Select
                    defaultValue="90개씩"
                    style={{ width: 120, marginRight: "30px" }}
                    onChange={handleChange}
                    options={[
                      { value: "30", label: "30개씩" },
                      { value: "60", label: "60개씩" },
                      { value: "90", label: "90개씩" },
                    ]}
                  />
                  <Select
                    defaultValue="신상품순"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                      { value: "new", label: "신상품순" },
                      { value: "sell", label: "판매순" },
                      { value: "discount", label: "할인율순" },
                      { value: "low", label: "낮은 가격 순" },
                      { value: "high", label: "높은 가격 순" },
                      { value: "review", label: "리뷰 순" },
                    ]}
                  />
                </div>
              </div>
              <div>
                <ProductIntro datalist={ProductList} />
              </div>
            </div>
          </div>
        </div>
        <Pagination
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
          defaultCurrent={1}
          total={50}
        />
      </section>
    </div>
  );
};

export default NewLayout;
