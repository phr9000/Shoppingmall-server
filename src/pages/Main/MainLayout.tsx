// import React, {useEffect, useState} from 'react'
import React from 'react'
import MainCarousel from './MainCarousel';
// import TestPage from './test';
import ProductIntro from '../../components/ProductIntro';

const MainLayout:React.FC = ()=>{
  return (
    <div className='main-layout-container'>
        <MainCarousel/>
        {/* style story */}
        <div className='thumbnail__container style-story-contianer'>
          <h2 className='thumbnail__title'>style story</h2>
          <ul className='thumbnail__area'>
            <li>
              <a href="#!" className='style-story-area'>
                <div className='img'></div>
                <h3 className='title'>NOTHING WRITTEN</h3>
                <p className='des'>
                  기다렸던 낫띵리튼의 브랜드데이!<br/>
                  3/20-21, 단 2일! 최대 40%세일의 혜택을 놓치지 마세요.
                </p>
              </a>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <ProductIntro/>
    </div>
  )
}

export default MainLayout;