import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Setting = {
  dots: boolean,
  infinite: boolean,
  speed: number,
  slidesToShow: number,
  slidesToScroll: number,
  spaceBetween: number,
}

type NewData = {
  id: number,
  url: string,
  alt:string,
  title: string,
  des:string,
  discount: string,
  originalPrice?: string,
  percent?:string,
  cart: boolean
}

type PropsData = {
  setting: Setting,
  dataList: NewData[]
}

const ProductCarousel: React.FC<PropsData> = (data)=>{
    return (
      <div className='product-carousel'>
        <Slider {...data.setting}>
            {
                data.dataList.map((carousel) => 
                <li key={carousel.id} className='product-item'>
                  <div>
                    <p className='img-area'>
                        <img src={carousel.url} alt={carousel.alt} />
                        <span className={'heart-icon ' + (carousel.cart ? 'active' : 'nonActive') } ></span>
                    </p>
                    <div className='title'>
                      {carousel.title}
                    </div>
                    <div className='des-area'>
                      {carousel.des}
                    </div>
                    <div className='price-area'>
                      <div className='flex align-center'>
                        <p className='discount'>{carousel.discount}</p>
                        <p className='original-price w-ml5'>{carousel.originalPrice}</p>
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