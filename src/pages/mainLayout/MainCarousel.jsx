import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MainCarousel() {

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slideToScroll: 1,
    };

    
    return (
      <div className='main-carousel'>
        <Slider {...settings}>
          <div><img src={require('../../assets/images/pc_visual01.jpg')} alt="" /></div>
          <div><img src={require('../../assets/images/pc_visual02.jpg')} alt="" /></div>
          <div><img src={require('../../assets/images/pc_visual03.jpg')} alt="" /></div>
          <div><img src={require('../../assets/images/pc_visual04.jpg')} alt="" /></div>
        </Slider>
      </div>
    
  )
}
