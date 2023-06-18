import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductIntro from "components/ProductIntro";
import ProductList from "assets/data/mainBeauty.json";

const BeautyPick: React.FC = (data)=>{
    const setting = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        autoplay:true,
        autoplaySpeed: 3000,
      };

    return (
        <div className='beauty-pick-container'>
            {/* left */}
            <div className='product-carousel left'>
                <Slider {...setting}>
                    <li className='product-item'>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/beauty_slide01.jpg'} alt="beauty01" />
                        </div>
                    </li>
                    <li className='product-item'>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/beauty_slide02.jpg'} alt="beauty02" />
                        </div>
                    </li>
                    <li className='product-item'>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/beauty_slide03.jpg'} alt="beauty03" />
                        </div>
                    </li>
                    <li className='product-item'>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/beauty_slide02.jpg'} alt="beauty04" />
                        </div>
                    </li>
                </Slider>
            </div>
            {/* right */}
            <div className='right'>
                <ProductIntro datalist={ProductList} />
            </div>
        </div>
    )
}

export default BeautyPick;