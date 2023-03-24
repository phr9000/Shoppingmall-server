import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import whatsNew from 'assets/data/whatsNew.json';

const ProductCarousel: React.FC = ()=>{
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div className='product-carousel'>
        <Slider {...settings}>
            {
                whatsNew!.map((carousel) => 
                <li key={carousel.id} className='product-item'>
                  <div>
                    <p className='img-area'><img src={carousel.url} alt={carousel.alt} /></p>
                    <div className='title'>
                      {carousel.title}
                    </div>
                    <div className='des-area'>
                      {carousel.des}
                    </div>
                    <div className='price-area'>
                      <div className='flex align-center'>
                        <p className='discount'>{carousel.discount}</p>
                        <p className='original-price ml5'>{carousel.originalPrice}%</p>
                      </div>
                      <div className='percent'>
                        {carousel.percent}
                      </div>
                    </div>
                  </div>
                </li>
                )
          }
        </Slider>
      </div>
    
  )
}

export default ProductCarousel;