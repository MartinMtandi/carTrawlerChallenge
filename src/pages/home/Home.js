import React, { useCallback } from 'react';
import cars from '../../utils/cars.json';
import Filters from '../../components/filters/Filters';
import Fleet from '../../components/fleet/Fleet';
import Vendor from '../../components/vendor/Vendor';
import './Home.css';

const Home = () => {
    const [fleet, setFleet] = React.useState();
    const [priceFilter, setPriceFilter] = React.useState('')
    let vehicles = cars[0].VehAvailRSCore.VehVendorAvails;

    console.log(fleet);

    const formatPayload = () => {
        const state = [];

        vehicles.forEach((e) => {
            e.VehAvails.forEach(item => {
                item.Vendor = e.Vendor;
                state.push(item);
            });
        });

        const result = state.sort(function(a, b) { // SORT BY PRICE (LOWER TO HIGHER)
            return Number(a.TotalCharge['@EstimatedTotalAmount']) - Number(b.TotalCharge['@EstimatedTotalAmount']);
        });

        setFleet(result);
    };
 
    React.useEffect(() => {
        formatPayload();
    }, []);

    return (
        <div className='body'>
            <div className='container box'>
                <div className='grid-container'>
                    <div className='grid-left'>
                        <Filters />
                    </div>
                    <div>
                        <Fleet fleet={fleet} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
