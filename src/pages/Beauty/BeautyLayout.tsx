import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCarousel from '../../components/ProductCarousel';
import beautyData from 'assets/data/beautyData.json'
import bestPickData from 'assets/data/bestPickData.json'
const BeautyLayout:React.FC = ()=>{
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

    const slides: Slide[] = [
      { id: 1, text: 'Slide 1' },
      { id: 2, text: 'Slide 2' },
      { id: 3, text: 'Slide 3' },
      { id: 4, text: 'Slide 4' },
      { id: 5, text: 'Slide 5' },
    ];

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
          spaceBetween: 10
        };

      const beautylist = ["스킨케어", "메이크업", "헤어&바디", "센트", "맨뷰티", "이너뷰티", "디바이스", "뷰티툴"]
      interface Slide {
        id: number;
        text: string;
      }

    return (
    <div className='main-layout-container beauty-container'>
        <div className='beauty-container__inner'>
            <h2 className='beauty-container__title'>BEAUTY</h2>
            {/* carousel */}
            <div className='main-carousel beauty-container__banner'>
                <Slider {...settings}>
                {
                  beautyData!.map((carousel) => 
                    <li key={carousel.id}><img src={carousel.url} alt="test" /></li>
                  )
                }
                </Slider>
            </div>
            {/* category link */}
            <ul className='beauty-container__cate-link-list'>
            {
              beautylist.map((value)=>
                <li className="beauty-container__cate-link-item">
                  <a href='!#'>{value}</a>
                </li>
              )
            }
            </ul>
            {/* top banner */}
            <div className='top-banner-container'>
              <a href="!#" className='left'>
                <div className='float-txt'>
                  <strong> NAMING.</strong>
                  <p>네이밍이 정의하는 내추럴함</p>
                  <em>최대 40% 할인</em>
                </div>
              </a>
              <a href="!#" className='right'>
                <div className='float-txt'>
                  <strong> B Project </strong>
                  <p>건강한 삶을 영유하는 비건 프렌들리 브랜드</p>
                  <em>최대 42% 할인</em>
                </div>
              </a>
            </div>
            {/* make it yours */}
            <div className='thumbnail__container whats-new-container'>
              <h2 className='thumbnail__title'>MAKE IT YOURS </h2>
                <ProductCarousel setting={settings2} dataList={bestPickData}/>
            </div>
            {/* slider test */}
            <div className="brands-menu-area">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={currentSlideIndex === index ? 'active' : ''}
                  onClick={() => handleButtonClick(index)}
                >
                  Button {slide.id}
                </button>
              ))}
            </div>
            <Slider {...settings} ref={sliderRef}>
            {slides.map((slide) => (
              <div key={slide.id}>
                <h3>{slide.text}</h3>
              </div>
            ))}
            </Slider>
            </div>
        
    </div>
    
  )
}

export default BeautyLayout;