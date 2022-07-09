import React from 'react';
import transmission from '../../images/Icons/transmission.svg';
import suitcase from '../../images/Icons/bag.svg';
import snowflake from '../../images/Icons/snowflake.svg';
import fuel from '../../images/Icons/fuel.svg';
import door from '../../images/Icons/door.svg';
import plane from '../../images/Icons/plane.svg';
import alamo from '../../images/Vendors/alamo.svg';
import './Fleet.css';

const Fleet = () => {
  return (
    <div className='paper'>
      <div className='grid-container'>
            <div className='grid-item'>
                <img height='100px' src="https://www.centauro.net/_next/image/?url=https%3A%2F%2Fcdn.centauro.net%2Fweb%2FA_400738ceb4.jpg&w=384&q=90" alt="car" />
                <div>
                    <p className='price'>$453.00 <span>Per day</span></p>
                    <img alt="vendor" src={alamo} height="36" />
                </div>
            </div>
            <div className='grid-item center features'>
                <div className='item'>
                    <p>Transmission</p>
                    <div>
                        <img height="20px" src={transmission} alt="transmission" />
                        <span>Manual</span>
                    </div>
                </div>
                <div className='item'>
                    <p>Fuel</p>
                    <div>
                        <img height="20px" src={fuel} alt="transmission" />
                        <span>Petrol</span>
                    </div>
                </div>
                <div className='item'>
                    <p>Suitcases</p>
                    <div>
                        <img height="20px" src={suitcase} alt="transmission" />
                        <span>2</span>
                    </div>
                </div>
            </div>
            <div className='grid-item features'>
                <div className='item'>
                    <p>Doors</p>
                    <div>
                        <img height="20px" src={door} alt="transmission" />
                        <span>4</span>
                    </div>
                </div>
                <div className='item'>
                    <p>Air Conditioning</p>
                    <div>
                        <img height="20px" src={snowflake} alt="transmission" />
                        <span></span>
                    </div>
                </div>
                <div className='item'>
                    <p>Pick-Up Location</p>
                    <div>
                        <img height="20px" src={plane} alt="transmission" />
                        <span>In Terminal</span>
                    </div>
                </div>
            </div>
      </div>
      <div className='button-component'>
        <button className='btn-primary'>Book Nissan CRV</button>
      </div>
    </div>
  )
}

export default Fleet
