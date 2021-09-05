import React from 'react';
import FeatureCollection from '../Components/FeatureCollection/FeatureCollection';
import FeatureProducts from '../Components/FeatureProducts/FeatureProducts';
import Header from '../Components/Header/Header';
import KidsBanner from '../Components/KidsBanner/KidsBanner';
import Banner from '../Components/TopBanner/Banner';
import Footer from '../Components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <FeatureCollection></FeatureCollection>
            <FeatureProducts></FeatureProducts>
            <KidsBanner></KidsBanner>
            <Footer></Footer>
        </>
    );
};

export default Home;