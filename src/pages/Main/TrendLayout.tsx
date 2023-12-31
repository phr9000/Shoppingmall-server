import React from 'react'

const TrendLayout:React.FC = ()=>{
  return (
    <div className='trend-container'>
        {/* women */}
        <div className='trend-list'>
            {/* left */}
            <div className='product-carousel left'>
                <em>WOMEN</em>
                <a href="!#">more <span className='arrow-right-icon'></span></a>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* men */}
        <div className='trend-list'>
            {/* left */}
            <div className='product-carousel left'>
                <em>MEN</em>
                <a href="!#">more <span className='arrow-right-icon'></span></a>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* life */}
        <div className='trend-list'>
            {/* left */}
            <div className='product-carousel left'>
                <em>LIFE</em>
                <a href="!#">more <span className='arrow-right-icon'></span></a>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* beauty */}
        <div className='trend-list'>
            {/* left */}
            <div className='product-carousel left'>
                <em>MEN</em>
                <a href="!#">more <span className='arrow-right-icon'></span></a>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
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
                                        <p>
                                            <span className='line clearance'>뉴시즌</span>
                                            <span className='line make_reservation'>예약</span>
                                        </p>
                                        <p>
                                            <span className='multi-line general_info'>단독</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrendLayout;