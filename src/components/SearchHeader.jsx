import React, {useState}  from 'react'
import { Link } from "react-router-dom";

export default function SearchHeader() {
    const [search, setSearch] = useState('');
    const handleSearch = () => {
        console.log(search);
      };

    return (
    <div className='search-header-container'>
        <h1>
            <a href='/'>
                <span className='logo-black'></span>
            </a>
        </h1>
        <div className='search-container'>
            <div className='search-area'>
                <div className='flex align-center'>
                    <input 
                        type="text"
                        placeholder='지금 바로 [프리쇼]'
                        onChange={e=>setSearch(e.target.value)}
                    />
                    <button className='icon search-icon' onClick={()=> handleSearch()}></button>
                </div>
                <div className='search-more'>see more</div>
            </div>
        </div>
        <div className='util-area'>
            <Link to="/join">
                <button className='join-area'>
                    <i className='icon join-icon'></i>
                    <span>Join</span>
                </button>
            </Link>
            <Link to="/login">
                <button className='login-area'>
                    <i className='icon login-icon'></i>
                    <span>Login</span>
                </button>
            </Link>
            <button className='basket-area'>
                <i className='icon basket-icon'></i>
                <span>0</span>
            </button>
        </div>
    </div>
  )
}
