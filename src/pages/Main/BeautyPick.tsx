import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductIntro from 'components/ProductIntro';

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
                <div className='product-container'>
                    <ul className='product-inner'>
                        <li>
                            <a className='display-block' href='./new'>
                                <div className='img-area'>
                                    <img src={process.env.PUBLIC_URL + '/images/pro_app01.png'} alt="app01" />
                                </div>
                                <div className="text-container">
                                    <div className="text-area">
                                        <div className="brand">oursaalty</div>
                                        <div className="product-name">Iconic Zip-up / Melangegray</div>
                                        <div className="sub-heading">Shrring Unbainanced</div>
                                    </div>
                                    <div className="price-area">
                                        <div className="price">
                                            <span className='price__bargain'>95.000</span>
                                            <span className='price__origin'></span>
                                        </div>
                                        <div className="percent">10%</div>
                                    </div>
                                    <div className="label-area">
                                        <div className='line'>뉴시즌</div>
                                        <div className='multi-line'>단독</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='display-block' href='./new'>
                                <div className='img-area'>
                                    <img src={process.env.PUBLIC_URL + '/images/pro_app02.jpg'} alt="app02" />
                                </div>
                                <div className="text-container">
                                    <div className="text-area">
                                        <p className="brand">oursaalty</p>
                                        <p className="product-name">Iconic Zip-up / Melangegray</p>
                                        <p className="sub-heading">Shrring Unbainanced</p>
                                    </div>
                                    <div className="price-area">
                                        <p className="price">
                                            <span className='price__bargain'>95.000</span>
                                            <span className='price__origin'></span>
                                        </p>
                                        <p className="percent">10%</p>
                                    </div>
                                    <div className="label-area">
                                        <p className='line'>뉴시즌</p>
                                        <p className='multi-line'>단독</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='display-block' href='./new'>
                                <div className='img-area'>
                                    <img src={process.env.PUBLIC_URL + '/images/pro_app03.jpg'} alt="app03" />
                                </div>
                                <div className="text-container">
                                    <div className="text-area">
                                        <p className="brand">oursaalty</p>
                                        <p className="product-name">Iconic Zip-up / Melangegray</p>
                                        <p className="sub-heading">Shrring Unbainanced</p>
                                    </div>
                                    <div className="price-area">
                                        <p className="price">
                                            <span className='price__bargain'>95.000</span>
                                            <span className='price__origin'></span>
                                        </p>
                                        <p className="percent">10%</p>
                                    </div>
                                    <div className="label-area">
                                        <p className='line'>뉴시즌</p>
                                        <p className='multi-line'>단독</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='display-block' href='./new'>
                                <div className='img-area'>
                                    <img src={process.env.PUBLIC_URL + '/images/pro_app04.jpg'} alt="app04" />
                                </div>
                                <div className="text-container">
                                    <div className="text-area">
                                        <p className="brand">oursaalty</p>
                                        <p className="product-name">Iconic Zip-up / Melangegray</p>
                                        <p className="sub-heading">Shrring Unbainanced</p>
                                    </div>
                                    <div className="price-area">
                                        <p className="price">
                                            <p className="price">
                                                <span className='price__bargain'>95.000</span>
                                                <span className='price__origin'></span>
                                            </p>
                                            <span className='price__origin'></span>
                                        </p>
                                        <p className="percent">10%</p>
                                    </div>
                                    <div className="label-area">
                                        <p className='line'>뉴시즌</p>
                                        <p className='multi-line'>단독</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='display-block' href='./new'>
                                <div className='img-area'>
                                    <img src={process.env.PUBLIC_URL + '/images/pro_app05.jpg'} alt="app05" />
                                </div>
                                <div className="text-container">
                                    <div className="text-area">
                                        <p className="brand">oursaalty</p>
                                        <p className="product-name">Iconic Zip-up / Melangegray</p>
                                        <p className="sub-heading">Shrring Unbainanced</p>
                                    </div>
                                    <div className="price-area">
                                    <p className="price">
                                            <span className='price__bargain'>95.000</span>
                                            <span className='price__origin'></span>
                                        </p>
                                        <p className="percent">10%</p>
                                    </div>
                                    <div className="label-area">
                                        <p className='line'>뉴시즌</p>
                                        <p className='multi-line'>단독</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul className='product-inner'>
                        <li>
                            <a className='display-block' href='./new'>
                                <div className='img-area'>
                                    <img src={process.env.PUBLIC_URL + '/images/pro_app01.png'} alt="app01" />
                                </div>
                                <div className="text-container">
                                    <div className="text-area">
                                        <div className="brand">oursaalty</div>
                                        <div className="product-name">Iconic Zip-up / Melangegray</div>
                                        <div className="sub-heading">Shrring Unbainanced</div>
                                    </div>
                                    <div className="price-area">
                                        <div className="price">
                                            <span className='price__bargain'>95.000</span>
                                            <span className='price__origin'></span>
                                        </div>
                                        <div className="percent">10%</div>
                                    </div>
                                    <div className="label-area">
                                        <div className='line'>뉴시즌</div>
                                        <div className='multi-line'>단독</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='display-block' href='./new'>
                                <div className='img-area'>
                                    <img src={process.env.PUBLIC_URL + '/images/pro_app02.jpg'} alt="app02" />
                                </div>
                                <div className="text-container">
                                    <div className="text-area">
                                        <p className="brand">oursaalty</p>
                                        <p className="product-name">Iconic Zip-up / Melangegray</p>
                                        <p className="sub-heading">Shrring Unbainanced</p>
                                    </div>
                                    <div className="price-area">
                                        <p className="price">
                                            <span className='price__bargain'>95.000</span>
                                            <span className='price__origin'></span>
                                        </p>
                                        <p className="percent">10%</p>
                                    </div>
                                    <div className="label-area">
                                        <p className='line'>뉴시즌</p>
                                        <p className='multi-line'>단독</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='display-block' href='./new'>
                                <div className='img-area'>
                                    <img src={process.env.PUBLIC_URL + '/images/pro_app03.jpg'} alt="app03" />
                                </div>
                                <div className="text-container">
                                    <div className="text-area">
                                        <p className="brand">oursaalty</p>
                                        <p className="product-name">Iconic Zip-up / Melangegray</p>
                                        <p className="sub-heading">Shrring Unbainanced</p>
                                    </div>
                                    <div className="price-area">
                                        <p className="price">
                                            <span className='price__bargain'>95.000</span>
                                            <span className='price__origin'></span>
                                        </p>
                                        <p className="percent">10%</p>
                                    </div>
                                    <div className="label-area">
                                        <p className='line'>뉴시즌</p>
                                        <p className='multi-line'>단독</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='display-block' href='./new'>
                                <div className='img-area'>
                                    <img src={process.env.PUBLIC_URL + '/images/pro_app04.jpg'} alt="app04" />
                                </div>
                                <div className="text-container">
                                    <div className="text-area">
                                        <p className="brand">oursaalty</p>
                                        <p className="product-name">Iconic Zip-up / Melangegray</p>
                                        <p className="sub-heading">Shrring Unbainanced</p>
                                    </div>
                                    <div className="price-area">
                                        <p className="price">
                                            <p className="price">
                                                <span className='price__bargain'>95.000</span>
                                                <span className='price__origin'></span>
                                            </p>
                                            <span className='price__origin'></span>
                                        </p>
                                        <p className="percent">10%</p>
                                    </div>
                                    <div className="label-area">
                                        <p className='line'>뉴시즌</p>
                                        <p className='multi-line'>단독</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='display-block' href='./new'>
                                <div className='img-area'>
                                    <img src={process.env.PUBLIC_URL + '/images/pro_app05.jpg'} alt="app05" />
                                </div>
                                <div className="text-container">
                                    <div className="text-area">
                                        <p className="brand">oursaalty</p>
                                        <p className="product-name">Iconic Zip-up / Melangegray</p>
                                        <p className="sub-heading">Shrring Unbainanced</p>
                                    </div>
                                    <div className="price-area">
                                    <p className="price">
                                            <span className='price__bargain'>95.000</span>
                                            <span className='price__origin'></span>
                                        </p>
                                        <p className="percent">10%</p>
                                    </div>
                                    <div className="label-area">
                                        <p className='line'>뉴시즌</p>
                                        <p className='multi-line'>단독</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BeautyPick;