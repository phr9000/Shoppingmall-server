import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCarousel from "../../components/ProductCarousel";
import beautyData from "assets/data/beautyData.json";
import bestPickData from "assets/data/bestPickData.json";
const BeautyLayout: React.FC = () => {
  // const settings = {
  //     dots: true,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slideToScroll: 1,
  //   };
  // slide 관련
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) =>
      handleSlideChange(newIndex),
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const handleSlideChange = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const handleButtonClick = (index: number) => {
    console.log(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  // make it yours
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    spaceBetween: 10,
  };

  const beautylist = [
    "스킨케어",
    "메이크업",
    "헤어&바디",
    "센트",
    "맨뷰티",
    "이너뷰티",
    "디바이스",
    "뷰티툴",
  ];
  interface Slide {
    id: number;
    text: string;
  }

  return (
    <div className="main-layout-container beauty-container">
      <div className="beauty-container__inner">
        <h2 className="beauty-container__title">BEAUTY</h2>
        {/* carousel */}
        <div className="main-carousel beauty-container__banner">
          <Slider {...settings}>
            {beautyData.banner!.map((carousel) => (
              <li key={carousel.id}>
                <img src={carousel.url} alt="test" />
              </li>
            ))}
          </Slider>
        </div>
        {/* category link */}
        <ul className="beauty-container__cate-link-list">
          {beautylist.map((value) => (
            <li className="beauty-container__cate-link-item">
              <a href="!#">{value}</a>
            </li>
          ))}
        </ul>
        {/* top banner */}
        <div className="top-banner-container">
          <a href="!#" className="left">
            <div className="float-txt">
              <strong> NAMING.</strong>
              <p>네이밍이 정의하는 내추럴함</p>
              <em>최대 40% 할인</em>
            </div>
          </a>
          <a href="!#" className="right">
            <div className="float-txt">
              <strong> B Project </strong>
              <p>건강한 삶을 영유하는 비건 프렌들리 브랜드</p>
              <em>최대 42% 할인</em>
            </div>
          </a>
        </div>
        {/* make it yours */}
        <div className="thumbnail__container whats-new-container make-it-yours-container">
          <h2 className="thumbnail__title">MAKE IT YOURS </h2>
          <ProductCarousel setting={settings2} dataList={bestPickData} />
        </div>
        {/* sub banner */}
        <div className="sub-banner-container">
          <ul>
            <li>
              <a href="!#" className="display-inblock">
                <img
                  src={process.env.PUBLIC_URL + "/images/beauty_section03.jpg"}
                  alt="beauty01"
                />
                <div className="float-txt">
                  <strong> MOREMO_</strong>
                  <p>건강하고 아름다운 헤어 라이프</p>
                  <em>최대 61% 할인</em>
                </div>
              </a>
            </li>
            <li>
              <a href="!#" className="display-inblock">
                <img
                  src={process.env.PUBLIC_URL + "/images/beauty_section04.jpg"}
                  alt="beauty02"
                />
                <div className="float-txt">
                  <strong> Piccasso</strong>
                  <p>극강의 부드러운 터치</p>
                  <em>최대 52% 할인</em>
                </div>
              </a>
            </li>
            <li>
              <a href="!#" className="display-inblock">
                <img
                  src={process.env.PUBLIC_URL + "/images/beauty_section05.jpg"}
                  alt="beauty03"
                />
                <div className="float-txt">
                  <strong>MENOKIN</strong>
                  <p>가장 효과적인 스킨케어 브랜드</p>
                  <em>최대 30% 할인</em>
                </div>
              </a>
            </li>
          </ul>
        </div>
        {/* top rank container */}
        <div className="top-rank-container">
          <div className="left">
            <div className="list top-brand-area">
              <h2>TOP BRAND</h2>
              <ul>
                <li>
                  <span className="num">1</span>
                  <a href="!#" className="title">
                    hersteller
                  </a>
                </li>
                <li>
                  <span className="num">2</span>
                  <a href="!#" className="title">
                    LOMA
                  </a>
                </li>
                <li>
                  <span className="num">3</span>
                  <a href="!#" className="title">
                    Piccasso
                  </a>
                </li>
                <li>
                  <span className="num">4</span>
                  <a href="!#" className="title">
                    NAMING.
                  </a>
                </li>
                <li>
                  <span className="num">5</span>
                  <a href="!#" className="title">
                    HERA
                  </a>
                </li>
                <li>
                  <span className="num">6</span>
                  <a href="!#" className="title">
                    ABOUT ME
                  </a>
                </li>
                <li>
                  <span className="num">7</span>
                  <a href="!#" className="title">
                    dasique
                  </a>
                </li>
                <li>
                  <span className="num">8</span>
                  <a href="!#" className="title">
                    JAVIN DE SEOUL
                  </a>
                </li>
                <li>
                  <span className="num">9</span>
                  <a href="!#" className="title">
                    B Project
                  </a>
                </li>
                <li>
                  <span className="num">10</span>
                  <a href="!#" className="title">
                    PRO8 CHEONGDAM
                  </a>
                </li>
              </ul>
            </div>
            <div className="list best-keyword-area">
              <h2>best keyword</h2>
              <ul>
                <li>
                  <span className="num">1</span>
                  <a href="!#" className="title">
                    뷰티 디바이스
                  </a>
                </li>
                <li>
                  <span className="num">2</span>
                  <a href="!#" className="title">
                    매트 립스틱
                  </a>
                </li>
                <li>
                  <span className="num">3</span>
                  <a href="!#" className="title">
                    페이스오일
                  </a>
                </li>
                <li>
                  <span className="num">4</span>
                  <a href="!#" className="title">
                    세럼
                  </a>
                </li>
                <li>
                  <span className="num">5</span>
                  <a href="!#" className="title">
                    피부 보습
                  </a>
                </li>
                <li>
                  <span className="num">6</span>
                  <a href="!#" className="title">
                    페이스롤러
                  </a>
                </li>
                <li>
                  <span className="num">7</span>
                  <a href="!#" className="title">
                    아이라이너
                  </a>
                </li>
                <li>
                  <span className="num">8</span>
                  <a href="!#" className="title">
                    쿠션
                  </a>
                </li>
                <li>
                  <span className="num">9</span>
                  <a href="!#" className="title">
                    핸드크림
                  </a>
                </li>
                <li>
                  <span className="num">10</span>
                  <a href="!#" className="title">
                    샴푸
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <a className="top-one-item" href="!#">
              <div className="img-area">
                <p className="seller-bage-icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/bg_top_seller.png"}
                    alt="셀러아이콘"
                  />
                  <span>1</span>
                </p>
                <img
                  src={process.env.PUBLIC_URL + "/images/top_seller01.png"}
                  alt="top1"
                />
              </div>
              <div className="txt-wrap">
                <div className="brand">MUZIGAE MANSION</div>
                <div className="product ellipsis-two">피팅 블러쉬 5종 택 1</div>
                <div className="price">
                  <p>
                    <span className="discount_price">14,400</span>
                    <span className="base_price">18,000</span>
                  </p>
                  <span className="discount_rate">20%</span>
                </div>
              </div>
            </a>
            {/* 만약 디비에 월마다 저장되있고, 10개씩만 가가져져오오면면? */}
            <ul className="top-etc-item-list">
              <li className="top-etc-item">
                <a href="!#">
                  <div className="img-area">
                    <p className="seller-bage-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/bg_top_seller.png"
                        }
                        alt="셀러아이콘"
                      />
                      <span>2</span>
                    </p>
                    <img
                      src={process.env.PUBLIC_URL + "/images/top_seller02.jpg"}
                      alt="top seller etc2"
                    />
                  </div>
                  <div className="txt-wrap">
                    <div className="brand">MUZIGAE MANSION</div>
                    <div className="product ellipsis-two">
                      피팅 블러쉬 5종 택 1
                    </div>
                    <div className="price">
                      <p>
                        <span className="discount_price">14,400</span>
                        <span className="base_price">18,000</span>
                      </p>
                      <span className="discount_rate">20%</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="top-etc-item">
                <a href="!#">
                  <div className="img-area">
                    <p className="seller-bage-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/bg_top_seller.png"
                        }
                        alt="셀러아이콘"
                      />
                      <span>3</span>
                    </p>
                    <img
                      src={process.env.PUBLIC_URL + "/images/top_seller03.jpg"}
                      alt="top seller etc3"
                    />
                  </div>
                  <div className="txt-wrap">
                    <div className="brand">MUZIGAE MANSION</div>
                    <div className="product ellipsis-two">
                      피팅 블러쉬 5종 택 1
                    </div>
                    <div className="price">
                      <p>
                        <span className="discount_price">14,400</span>
                        <span className="base_price">18,000</span>
                      </p>
                      <span className="discount_rate">20%</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="top-etc-item">
                <a href="!#">
                  <div className="img-area">
                    <p className="seller-bage-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/bg_top_seller.png"
                        }
                        alt="셀러아이콘"
                      />
                      <span>4</span>
                    </p>
                    <img
                      src={process.env.PUBLIC_URL + "/images/top_seller04.jpg"}
                      alt="top seller etc4"
                    />
                  </div>
                  <div className="txt-wrap">
                    <div className="brand">MUZIGAE MANSION</div>
                    <div className="product ellipsis-two">
                      피팅 블러쉬 5종 택 1
                    </div>
                    <div className="price">
                      <p>
                        <span className="discount_price">14,400</span>
                        <span className="base_price">18,000</span>
                      </p>
                      <span className="discount_rate">20%</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="top-etc-item">
                <a href="!#">
                  <div className="img-area">
                    <p className="seller-bage-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/bg_top_seller.png"
                        }
                        alt="셀러아이콘"
                      />
                      <span>5</span>
                    </p>
                    <img
                      src={process.env.PUBLIC_URL + "/images/top_seller05.jpg"}
                      alt="top seller etc5"
                    />
                  </div>
                  <div className="txt-wrap">
                    <div className="brand">MUZIGAE MANSION</div>
                    <div className="product ellipsis-two">
                      피팅 블러쉬 5종 택 1
                    </div>
                    <div className="price">
                      <p>
                        <span className="discount_price">14,400</span>
                        <span className="base_price">18,000</span>
                      </p>
                      <span className="discount_rate">20%</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="top-etc-item">
                <a href="!#">
                  <div className="img-area">
                    <p className="seller-bage-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/bg_top_seller.png"
                        }
                        alt="셀러아이콘"
                      />
                      <span>6</span>
                    </p>
                    <img
                      src={process.env.PUBLIC_URL + "/images/top_seller06.jpg"}
                      alt="top seller etc6"
                    />
                  </div>
                  <div className="txt-wrap">
                    <div className="brand">MUZIGAE MANSION</div>
                    <div className="product ellipsis-two">
                      피팅 블러쉬 5종 택 1
                    </div>
                    <div className="price">
                      <p>
                        <span className="discount_price">14,400</span>
                        <span className="base_price">18,000</span>
                      </p>
                      <span className="discount_rate">20%</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="top-etc-item">
                <a href="!#">
                  <div className="img-area">
                    <p className="seller-bage-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/bg_top_seller.png"
                        }
                        alt="셀러아이콘"
                      />
                      <span>7</span>
                    </p>
                    <img
                      src={process.env.PUBLIC_URL + "/images/top_seller03.jpg"}
                      alt="top seller etc7"
                    />
                  </div>
                  <div className="txt-wrap">
                    <div className="brand">MUZIGAE MANSION</div>
                    <div className="product ellipsis-two">
                      피팅 블러쉬 5종 택 1
                    </div>
                    <div className="price">
                      <p>
                        <span className="discount_price">14,400</span>
                        <span className="base_price">18,000</span>
                      </p>
                      <span className="discount_rate">20%</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="top-etc-item">
                <a href="!#">
                  <div className="img-area">
                    <p className="seller-bage-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/bg_top_seller.png"
                        }
                        alt="셀러아이콘"
                      />
                      <span>8</span>
                    </p>
                    <img
                      src={process.env.PUBLIC_URL + "/images/top_seller04.jpg"}
                      alt="top seller etc1"
                    />
                  </div>
                  <div className="txt-wrap">
                    <div className="brand">MUZIGAE MANSION</div>
                    <div className="product ellipsis-two">
                      피팅 블러쉬 5종 택 1
                    </div>
                    <div className="price">
                      <p>
                        <span className="discount_price">14,400</span>
                        <span className="base_price">18,000</span>
                      </p>
                      <span className="discount_rate">20%</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="top-etc-item">
                <a href="!#">
                  <div className="img-area">
                    <p className="seller-bage-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/bg_top_seller.png"
                        }
                        alt="셀러아이콘"
                      />
                      <span>9</span>
                    </p>
                    <img
                      src={process.env.PUBLIC_URL + "/images/top_seller02.jpg"}
                      alt="top seller etc1"
                    />
                  </div>
                  <div className="txt-wrap">
                    <div className="brand">MUZIGAE MANSION</div>
                    <div className="product ellipsis-two">
                      피팅 블러쉬 5종 택 1
                    </div>
                    <div className="price">
                      <p>
                        <span className="discount_price">14,400</span>
                        <span className="base_price">18,000</span>
                      </p>
                      <span className="discount_rate">20%</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* slider test */}
        <div className="thumbnail__container beauty-container__brand-container">
          <h2 className="thumbnail__title">style story</h2>
          <div className="brands-menu-area">
            {beautyData.brands.map((slide, index) => (
              <button
                key={index}
                className={
                  currentSlideIndex === index ? "active" : "non-active"
                }
                onClick={() => handleButtonClick(index)}
              >
                {slide.title}
              </button>
            ))}
          </div>
          <Slider {...settings} ref={sliderRef}>
            {beautyData.brands.map((slide) => (
              <div>
                <div className="flex">
                  <div className="wrap-img">
                    <img src={slide.wrapImg} alt={slide.wrapAlt} />
                  </div>
                  <div
                    className="small-img-container"
                    style={{ backgroundColor: slide.backgroundColor }}
                  >
                    <ul className="small-img-inner flex">
                      <li>
                        <a href="!#">
                          <div className="small-img-area">
                            <img src={slide.smallImg1} alt={slide.smallAlt1} />
                          </div>
                          <div className="small-txt-area">
                            <div className="title">{slide.title}</div>
                            <p className="desc">{slide.desc1}</p>
                            <div className="price-area">
                              <div className="flex align-center">
                                <span className="discount_price">{slide.discountPrice1}</span>
                                <span className="base_price">{slide.basePrice1}</span>
                              </div>
                              <div className="discount_percent">{slide.discountRate1}</div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="!#">
                          <div className="small-img-area">
                            <img src={slide.smallImg2} alt={slide.smallAlt2} />
                          </div>
                          <div className="small-txt-area">
                            <div className="title">{slide.title}</div>
                            <p className="desc">{slide.desc2}</p>
                            <div className="price-area">
                              <div className="flex align-center">
                                <span className="discount_price">{slide.discountPrice2}</span>
                                <span className="base_price">{slide.basePrice2}</span>
                              </div>
                              <div className="discount_percent">{slide.discountRate2}</div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="!#">
                          <div className="small-img-area">
                            <img src={slide.smallImg3} alt={slide.smallAlt3} />
                          </div>
                          <div className="small-txt-area">
                            <div className="title">{slide.title}</div>
                            <p className="desc">{slide.desc3}</p>
                            <div className="price-area">
                              <div className="flex align-center">
                                <span className="discount_price">{slide.discountPrice3}</span>
                                <span className="base_price">{slide.basePrice3}</span>
                              </div>
                              <div className="discount_percent">{slide.discountRate3}</div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BeautyLayout;
