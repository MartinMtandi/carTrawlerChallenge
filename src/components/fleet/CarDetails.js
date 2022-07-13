import React from 'react';
import transmission from '../../images/Icons/transmission.svg';
import suitcase from '../../images/Icons/bag.svg';
import snowflake from '../../images/Icons/snowflake.svg';
import fuel from '../../images/Icons/fuel.svg';
import door from '../../images/Icons/door.svg';
import person from '../../images/Icons/person.svg';
import { TbManualGearbox } from 'react-icons/tb';
import { MdLocationPin } from 'react-icons/md';
import { MdLocalGasStation } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import Alamo from '../../images/Vendors/alamo.svg';
import Avis from '../../images/Vendors/avis.svg';
import Hertz from '../../images/Vendors/hertz.svg';
import CurrencyFormat from 'react-currency-format';

const CarDetails = ({cardetail, setPage, vehicles}) => {

  let content;

  switch (cardetail?.Vendor['@Name']) {
    case 'AVIS':
      content = <img src={Avis} alt="vendor" />
      break;
    case 'HERTZ':
      content = <img src={Hertz} alt="vendor" />
      break;
    case 'ALAMO':
      content = <img src={Alamo} alt="vendor" />
      break;
    default:
      break;
  }
  return (
    <div className='paper'>
      <div className='contain-btn'>
        <button onClick={() => setPage('home')} className='back-btn'>Back</button>
      </div>
      <section className='inline-flex'>
        <div>
          <img height={110} src={cardetail?.Vehicle.PictureURL} alt="cars" />
        </div>
        <div className='car-desc'>
          <p className='car-name'>{cardetail?.Vehicle.VehMakeModel['@Name']}</p>
          <div className='features-container wrap'>
            <div className='feature-card list-item'>
              <img height="20px" src={suitcase} alt="suitcase" />
              <span>{cardetail?.Vehicle['@BaggageQuantity']} Bags</span>
            </div>
            <div className='feature-card list-item'>
              <TbManualGearbox style={{ fontSize: '22px' }} />
              <span>{cardetail?.Vehicle['@DriveType']}</span>
            </div>
            <div className='feature-card list-item'>
              <img height="20px" src={door} alt="door" />
              <span>{cardetail?.Vehicle['@DoorCount']} Doors</span>
            </div>
            {(cardetail?.Vehicle['@AirConditionInd'] === 'true') && 
            <div className='feature-card list-item'>
              <img height="20px" src={snowflake} alt="snowflake" />
              <span>Air Conditioning</span>
            </div>}
            <div className='feature-card list-item'>
              <img height="20px" src={transmission} alt="transmission" />
              <span>{cardetail?.Vehicle['@TransmissionType']}</span>
            </div>
            <div className='feature-card list-item'>
              <img height="20px" src={person} alt="person" />
              <span>{cardetail?.Vehicle['@PassengerQuantity']} Passengers</span>
            </div>
            <div className='feature-card list-item'>
              <img height="20px" src={fuel} alt="fuel" />
              <span>{cardetail?.Vehicle['@FuelType']}</span>
            </div>
          </div>
          <div className='code-context'>
            <button>{cardetail?.Vehicle['@CodeContext']}</button>
          </div>
        </div>
      </section>
      <section className='addons'>
        <div>
          <div className='addons-item'>
            <div>
              <MdLocalGasStation style={{ fontSize: '22px' }} />
            </div>
            <div className='addons-info'>
              <p className='addons-title'>Fuel Policy</p>
              <p className='addons-desc'>Full to Full</p>
            </div>
          </div>
          <div className='addons-item'>
            <div>
              <MdLocationPin style={{ fontSize: '22px' }} />
            </div>
            <div className='addons-info'>
              <p className='addons-title'>Pick-up Location</p>
              <p className='addons-desc'>{vehicles.VehRentalCore.PickUpLocation['@Name']}</p>
            </div>
          </div>
        </div>

        <div className='additions'>
          <div className='addons-item'>
            <BsCheck className='check' />
            <p>Unlimited mileage</p>
          </div>
          <div className='addons-item'>
            <BsCheck className='check' />
            <p>Collision Damage Waiver</p>
          </div>
          <div className='addons-item'>
            <BsCheck className='check' />
            <p>Theft Protection</p>
          </div>
        </div>

        <div className='banner-wrapper'>
          <button className='banner'>
            Free cancellation before 6:00 PM <br /> on 05 March 2020
          </button>
        </div>
      </section>
      <section className='addons-footer'>
        <div>
          {content}
        </div>
        <div>
          <p>Rental cost per day</p>
          <h1>
            <CurrencyFormat value={cardetail?.TotalCharge['@EstimatedTotalAmount']} displayType={'text'} thousandSeparator={true} prefix={cardetail?.TotalCharge['@CurrencyCode']} />
          </h1>
        </div>
      </section>
    </div>
  )
}

export default CarDetails
