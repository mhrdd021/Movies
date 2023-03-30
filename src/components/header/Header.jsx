import React from 'react'

import { Link, useLocation } from 'react-router-dom';

//Style
import './header.scss'

//Logo
import Logo from '../../assets/tmovie.png'
import { useRef } from 'react';

const headerNav = [
  {
    display: 'Home' ,
    path: '/'
  },
  {
    display: 'Movies',
    path: '/movie'
  },
  {
    display: 'TV Series',
    path: '/tv'
  }
];

const Header = () => {

const { pathname } = useLocation();
const headerRef = useRef(null)

const active = headerNav.findIndex(e => e.path === pathname)

  return (
    <div ref={headerRef} className="header">
        <div className='header__wrap container'>
          <div className='logo'>
            <img src={Logo} alt=""/>
            <Link to="/">tMovies</Link>
          </div>
          <ul className='header__nav'>
            {
              headerNav.map((e, i) => (
                <li key={i} className={`${i === active ? 'active' : ''}`}>
                  <Link to={e.path}>
                    {e.display}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default Header