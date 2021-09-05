import React from 'react';
import { useHistory } from 'react-router-dom';
import bannerImage from '../../Assets/Images/kidsBanner.png';
import './KidsBanner.scss'

const KidsBanner = () => {
    const history = useHistory();

    const handleCollection = (collectionName) => {
        history.push(`/collection/${collectionName}`)
    }
    return (
        <section className='kidsBanner'>
            <div className="container-fluid row">
                <div className="col-md-6">
                    <div className="banner-content d-flex flex-column justify-content-center align-items-center h-100">
                        <p>NEW ARRIVAL</p>
                        <h1>KIDS COLLECTION</h1>
                        <button onClick={() => handleCollection("kids")} className='btn btn-outline-dark mt-3'>SHOP NOW</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="banner-image">
                        <img src={bannerImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KidsBanner;