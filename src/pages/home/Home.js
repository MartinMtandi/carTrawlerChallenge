import React from 'react';
import cars from '../../utils/cars.json';
import Filters from '../../components/filters/Filters';
import Fleet from '../../components/fleet/Fleet';
import './Home.css';
import Legend from '../../components/location/Legend';
import CarDetails from '../../components/fleet/CarDetails';

const Home = () => {
    const [fleet, setFleet] = React.useState();
    const [priceFilter, setPriceFilter] = React.useState('lower-to-higher');
    const [sortedCars, setSortedCars] = React.useState(null);
    const [page, setPage] = React.useState('details');
    const [cardetail, setCarDetail] = React.useState(null);
    let vehicles = cars[0].VehAvailRSCore.VehVendorAvails;

    const sortLowestToHighest = () => {
        setPage('home');
        setCarDetail(null);
        return fleet?.sort(function(a, b) { // SORT BY PRICE (LOWER TO HIGHER)
            return Number(a.TotalCharge['@EstimatedTotalAmount']) - Number(b.TotalCharge['@EstimatedTotalAmount']);
        });
    }

    const sortHighestToLowest = () => {
        setPage('home');
        setCarDetail(null);
        return fleet?.sort(function(a, b) { // SORT BY PRICE (HIGHEST TO LOWEST)
            return Number(b.TotalCharge['@EstimatedTotalAmount']) - Number(a.TotalCharge['@EstimatedTotalAmount']);
        });
    }    

    const formatPayload = () => {
        const state = [];

        vehicles.forEach((e) => {
            e.VehAvails.forEach(item => {
                item.Vendor = e.Vendor;
                state.push(item);
            });
        });

        setFleet(state);
    };
 
    React.useEffect(() => {
        formatPayload(); // FORMAT JSON PAYLOAD
    }, []);

    React.useEffect(() => { // RUN THIS USEEFFECT TO RUN THE DEFAULT SORT OF PRICE
        if(fleet){
            let result = (priceFilter === 'lower-to-higher') ? sortLowestToHighest() : sortHighestToLowest();
            setSortedCars(result);
        }
    }, [fleet]);


    let content;

    switch (page) {
        case 'home':
            content = <Fleet setPage={setPage} sortedCars={sortedCars} setCarDetail={setCarDetail} />
            break;
        case 'details':
            content = <CarDetails setPage={setPage} cardetail={cardetail} />
            break;
        default:
            break;
    }

    return (
        <div className='body'>
            <Legend vehicles={cars[0].VehAvailRSCore} />
            <div className='container box'>
                <div className='grid-container'>
                    <div className='grid-left'>
                        <Filters  
                            sortHighestToLowest={sortHighestToLowest}
                            sortLowestToHighest={sortLowestToHighest}
                            setPriceFilter={setPriceFilter} 
                            setSortedCars={setSortedCars}
                            priceFilter={priceFilter} 
                        />
                    </div>
                    <div>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
