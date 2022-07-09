import React from 'react';
import Filters from '../../components/filters/Filters';
import Fleet from '../../components/fleet/Fleet';
import Vendor from '../../components/vendor/Vendor';
import './Home.css';

const Home = () => {
  return (
    <div className='body'>
        <div className='container box'>
            <div className='grid-container'>
                <div>
                    <Filters />
                </div>
                <div>
                    <Fleet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
