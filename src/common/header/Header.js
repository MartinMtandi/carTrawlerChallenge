import React from 'react';
import './Header.css';
import logo from '../../images/CarTrawler_Logo.jpg';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='nav'>
            <div>
                <img height="70" src={logo} alt="logo" />
            </div>
            <div>
                <ul className='nav-item font-semibold'>
                  <li className='list-item'>Fleet</li>
                  <li className='list-item'>Services</li>
                  <li className='list-item'>Offices</li>
                  <li className='list-item'>My Account</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
