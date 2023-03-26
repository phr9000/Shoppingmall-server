import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ComCarousel: React.FC = (data)=>{
    const setting = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '425px'
      };

    return (
        <div className='product-carousel'>
            <Slider {...setting}>
                <li className='product-item'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/main_exclusive01.jpg'} alt="exclude01" />
                        <div className='txt-wrap'>
                            <span className='top'>S/S 최대 50%세일+시크릿 혜택</span>
                            <span className='center'>FRONTROW</span>
                        </div>
                    </div>
                </li>
                <li className='product-item'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/main_exclusive02.jpg'} alt="exclude02" />
                        <div className='txt-wrap'>
                            <span className='top'>스프링 슈즈 오픈!</span>
                            <span className='center'>LOVEDEWY</span>
                        </div>
                    </div>
                </li>
                <li className='product-item'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/main_exclusive03.jpg'} alt="exclude03" />
                        <div className='txt-wrap'>
                            <span className='top'>SPRING COLLECTION OPEN 5%세일</span>
                            <span className='center'>SOFT SEOUL</span>
                        </div>
                    </div>
                </li>
                <li className='product-item'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/main_exclusive04.jpg'} alt="exclude04" />
                        <div className='txt-wrap'>
                            <span className='top'>앤유의 뮤즈 김나영 PICK! 최대 20% 세일</span>
                            <span className='center'>AND YOU</span>
                        </div>
                    </div>
                </li>
            </Slider>
        </div>
    )
}

export default ComCarousel;