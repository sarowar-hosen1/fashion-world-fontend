import React from 'react';
import {useHistory} from "react-router-dom";
import summer from '../../Assets/Images/Feature/summer.jpg';
import girl from '../../Assets/Images/Feature/girls.jpg';
import man from '../../Assets/Images/Feature/man.jpg';

import './FeatureCollection.scss'

const FeatureCollection = () => {

    const history = useHistory();
    const handleCollection = (collectionName) => {
        history.push(`/collection/${collectionName}`)
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="top-collection">
                            <img src={summer} alt="" />
                            <h5>SUMMER</h5>
                            <button onClick={() => handleCollection("summer")} className="btn-brand">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="top-collection">
                            <img src={girl} alt="" />
                            <h5>GIRLS COLLECTION</h5>
                            <button onClick={() => handleCollection("girl")} className="btn-brand">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="top-collection">
                            <img src={man} alt="" />
                            <h5>MEN COLLECTION</h5>
                            <button onClick={() => handleCollection("man")} className="btn-brand">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCollection;