import React from 'react';
import './Legend.css';

const Legend = (props) => {
 
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
 
    const formatDate = (date) => {
        let dt = new Date(date);
        return (
            [
                dt.getFullYear(),
              padTo2Digits(dt.getMonth() + 1),
              padTo2Digits(dt.getDate()),
            ].join('-') +
            ' ' +
            [
              padTo2Digits(dt.getHours()),
              padTo2Digits(dt.getMinutes()),
              padTo2Digits(dt.getSeconds()),
            ].join(':')
          );
    }

    return (
        <div className='legend'>
            <div className='container'>
                <div className='grid-container'>
                    <div>
                        <label>Pick-up Location</label>
                        <input className='form-control' defaultValue={props.vehicles.VehRentalCore.PickUpLocation['@Name']} />
                    </div>
                    <div>
                        <label>Return Location</label>
                        <input className='form-control' defaultValue={props.vehicles.VehRentalCore.ReturnLocation['@Name']} />
                    </div>
                    <div>
                        <label>Pick-up date</label>
                        <input className='form-control' type="datetime-local" defaultValue={formatDate(props.vehicles.VehRentalCore['@PickUpDateTime'])} />
                    </div>
                    <div>
                        <label>Drop-off date</label>
                        <input className='form-control' type="datetime-local" defaultValue={formatDate(props.vehicles.VehRentalCore['@ReturnDateTime'])} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Legend;
