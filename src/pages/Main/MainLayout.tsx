// import React, {useEffect, useState} from 'react'
import React from 'react'
import MainCarousel from './MainCarousel';
// import TestPage from './test';
import ProductIntro from '../../components/ProductIntro';
import styleStory from 'assets/data/styleStory.json';
import ProductCarousel from '../../components/ProductCarousel';
import whatsNew from 'assets/data/whatsNew.json';

const MainLayout:React.FC = ()=>{
  const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
  };
  return (
    <div className='main-layout-container'>
        <MainCarousel/>
        {/* style story */}
        <div className='thumbnail__container style-story-contianer'>
          <h2 className='thumbnail__title'>style story</h2>
          <ul className='thumbnail__area'>
              {
                styleStory.map((list)=>
                <li key={list.id}>
                   <a href="#!" className='style-story-area'>
                    <div className='img'><img src={list.url} alt={list.alt} /></div>
                    <em className='title'>{list.title}</em>
                    <p className='des'>
                      {list.des1}<br/>
                      {list.des2}
                    </p>
                  </a>
                </li>
                )
              }
          </ul>
        </div>
        {/* banner */}
        <div className='banner__container'>
            <ul>
              <li>
                <a href="#!">
                  <img src="images/main_banner01.jpg" alt="뉴 컨셉 챌린지" />
                </a>
              </li>
              <li>
                  <a href="#!">
                    <img src="images/main_banner02.jpg" alt="w컨셉토스" />
                  </a>
              </li>
            </ul>
        </div>
        {/* what's new */}
        <div className='thumbnail__container whats-new-container'>
          <h2 className='thumbnail__title'>WHAT'S NEW</h2>
            <ProductCarousel setting={settings} dataList={whatsNew}/>
        </div>
        
        <ProductIntro/>
    </div>
  )
}

export default MainLayout;