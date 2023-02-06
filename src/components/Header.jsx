import React from 'react'
import {Link} from 'react-router-dom';
import '../assets/styles/index.scss';

export default function Header() {
  return (
    <header className='header-container'>
      <Link to='/join'>Join</Link>
    </header>
  )
}
