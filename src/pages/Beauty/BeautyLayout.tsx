import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import beautyData from 'assets/data/beautyData.json'
const BeautyLayout:React.FC = ()=>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slideToScroll: 1,
      };
    
      const beautylist = ["스킨케어", "메이크업", "헤어&바디", "센트", "맨뷰티", "이너뷰티", "디바이스", "뷰티툴"]

  return (
    <div className='beauty-container'>
        <div className='beauty-container__inner'>
            <h2 className='beauty-container__title'>BEAUTY</h2>
            {/* carousel */}
            <div className='main-carousel beauty-container__top-banner'>
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
        </div>
    </div>
    
  )
}

export default BeautyLayout;