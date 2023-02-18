import React, {useEffect, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MainCarousel() {
    const [carousels, setCarousel] = useState([]);

    useEffect(()=>{
      fetch('data/mainCarousel.json')
      .then(res=>res.json())
      .then(data=> {
        console.log('ok');
        setCarousel(data);
      });
      return () => {
        console.log('unmount 될 때 청소하는 일을 담당');
      };
    }, []);

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
