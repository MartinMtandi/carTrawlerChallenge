import React from 'react';
import './Filters.css';
import {VscFilter} from 'react-icons/vsc';

const Filters = (props) => {

  const handleChange = (e) => {
    let result = (e.target.value === 'lower-to-higher') ? props.sortLowestToHighest() : props.sortHighestToLowest();
    props.setSortedCars(result);
    props.setPriceFilter(e.target.value);
  }

  return (
    <div className='paper'>
      <div className='filter-paper'>
        <div className='filter-header'>
          <h1 className='title'>Filters</h1>
          <div>
            <VscFilter style={{fontSize: '18px'}} />
          </div>
        </div>
        <section>
          <h2 className='subtitle'>Sort by price:</h2>
          <div className="wrapper">
            <select onChange={handleChange} defaultValue={props.priceFilter} className='select' name="sort">
              <option value="lower-to-higher">Lowest to highest</option>
              <option value="higher-to-lower">Highest to lowest</option>
            </select>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Filters
