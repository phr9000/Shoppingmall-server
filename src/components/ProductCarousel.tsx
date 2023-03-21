import React, {useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styleStory from 'assets/data/styleStory.json';

const ProductCarousel: React.FC = ()=>{

    return (
      <div className='main-carousel'>
        {/* <Slider {...settings}>
            {
                styleStory!.map((carousel) => 
                <li key={styleStory.}><img src={carousel.url} alt="test" /></li>
                )
          }
        </Slider> */}
      </div>
    
  )
}

export default ProductCarousel;