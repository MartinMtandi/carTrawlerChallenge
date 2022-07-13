import React from 'react';
import './Header.css';
import logo from '../../images/partner.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='nav'>
            <div>
                <img height="45" src={logo} alt="logo" />
            </div>
            <div id="nav-links">
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
