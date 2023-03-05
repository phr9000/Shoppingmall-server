import React from 'react'

export default function ProductIntro() {
  return (
    <div className='product-container'>
      <ul className='product-inner'>
          <li>
            <a className='display-block' href='./new'>
                <div className='img-area'>
                    <img src={process.env.PUBLIC_URL + '/images/pro_app01.png'} alt="app01" />
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
  )
}
