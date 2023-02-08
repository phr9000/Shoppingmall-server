import React from 'react'
import {Outlet} from 'react-router-dom';
import Header from 'components/Header';
import '../assets/styles/index.scss';

export default function Root() {
  return (
    <div>
      <Header/>
      <div className='main-layout-container'>
        <Outlet/>
      </div>
    </div>
  )
}
