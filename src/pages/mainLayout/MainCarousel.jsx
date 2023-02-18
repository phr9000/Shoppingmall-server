import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MainCarousel() {

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slideToScroll: 1
    };

    
    return (
      <div className='main-carousel'>
        <Slider {...settings}>
          <div><img src="src/assets/pc_visual01.jpg" alt="" /></div>
        </Slider>
      </div>
    
  )
}
