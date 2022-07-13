import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div id='footer'>
      <p>CarTrawler</p>
      <p id="copy"> &copy; {new Date().getFullYear()} All rights reserved</p>
    </div>
  )
}

export default Footer
