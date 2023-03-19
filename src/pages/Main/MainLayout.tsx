// import React, {useEffect, useState} from 'react'
import React from 'react'
import MainCarousel from './MainCarousel';
import ProductIntro from 'components/ProductIntro';

const MainLayout:React.FC = ()=>{
  return (
    <div className='main-layout-container'>
      <MainCarousel/>
      {/* <ul>
        {
          products.map((product) => 
            <li key={product.id}>{product.name}</li>
          )
        }
      </ul> */}
    </div>
  )
}

export default MainLayout;