import React from 'react';
import CurrencyFormat from 'react-currency-format';
import transmission from '../../images/Icons/transmission.svg';
import suitcase from '../../images/Icons/bag.svg';
import snowflake from '../../images/Icons/snowflake.svg';
import fuel from '../../images/Icons/fuel.svg';
import door from '../../images/Icons/door.svg';
import person from '../../images/Icons/person.svg';
import { TbManualGearbox } from 'react-icons/tb';
import './Fleet.css';
import Loader from '../../common/loader/Loader';

const Fleet = (props) => {

    const handleCarDetail = (car) => {
        props.setCarDetail(car);
        props.setPage('details');
    }
  
    return (
        <div className='paper'>
            {props.sortedCars ?
            <div className='grid-card'>
                 {props.sortedCars.map((el, index) => (
                    <div className='card' key={index}>
                        <img className='car-image' height='100px' src={el.Vehicle.PictureURL} alt="car" />
                        <div className='description'>
                            <p className='car-name'>{el.Vehicle.VehMakeModel['@Name']}</p>
                            <p className='car-price'><CurrencyFormat value={el.TotalCharge['@EstimatedTotalAmount']} displayType={'text'} thousandSeparator={true} prefix={el.TotalCharge['@CurrencyCode']} /></p>
                        </div>
                        <div className='grid-middle'>
                            <div className='features-container'>
                                <div className='feature-card'>
                                    <img height="20px" src={suitcase} alt="suitcase" />
                                    <span>{el.Vehicle['@BaggageQuantity']}</span>
                                </div>
                                <div className='feature-card sm-hidden'>
                                    <TbManualGearbox style={{ fontSize: '22px' }} />
                                    <span>{el.Vehicle['@DriveType']}</span>
                                </div>
                                <div className='feature-card'>
                                    <img height="20px" src={door} alt="door" />
                                    <span>{el.Vehicle['@DoorCount']}</span>
                                </div>
                                {(el.Vehicle['@AirConditionInd'] === 'true') &&
                                    <div className='feature-card'>
                                        <img height="20px" src={snowflake} alt="snowflake" />
                                    </div>
                                }
                            </div>
                            <div className='features-container features-bottom'>
                                <div className='feature-card'>
                                    <img height="20px" src={transmission} alt="transmission" />
                                    <span>{el.Vehicle['@TransmissionType']}</span>
                                </div>
                                <div className='feature-card'>
                                    <img height="20px" src={person} alt="person" />
                                    <span>{el.Vehicle['@PassengerQuantity']}</span>
                                </div>
                                <div className='feature-card'>
                                    <img height="20px" src={fuel} alt="fuel" />
                                    <span>{el.Vehicle['@FuelType']}</span>
                                </div>
                            </div>
                        </div>
                        <div className='button-component'>
                            <button disabled={el['@Status'] === 'Available' ? false : true} onClick={() => handleCarDetail(el)} className='btn-primary'>Book</button>
                            <p>With {el.Vendor['@Name'].charAt(0).toUpperCase() + el.Vendor['@Name'].slice(1).toLowerCase()}</p>
                        </div>
                    </div>
                    ))}
            </div>
            : <React.Fragment>
                <Loader />
            </React.Fragment>}
        </div>
    )
}

export default (Fleet)
