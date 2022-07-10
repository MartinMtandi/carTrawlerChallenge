import React from 'react';
import cars from '../../utils/cars.json';
import Filters from '../../components/filters/Filters';
import Fleet from '../../components/fleet/Fleet';
import Vendor from '../../components/vendor/Vendor';
import './Home.css';

const Home = () => {
    const [fleet, setFleet] = React.useState();
    let vehicles = cars[0].VehAvailRSCore.VehVendorAvails;
    console.log(fleet)
    React.useEffect(() => {
        const state = [];

        vehicles.forEach((e) => {
            e.VehAvails.forEach(item => {
                item.Vendor = e.Vendor;
                state.push(item);
            });
        })

        setFleet(state);
    }, []);

    return (
        <div className='body'>
            <div className='container box'>
                <div className='grid-container'>
                    <div>
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
