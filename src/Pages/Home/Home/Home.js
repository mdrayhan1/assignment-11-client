import React from 'react';
import Banner from '../../Banner/Banner';
import Services from '../../Services/Services';
import Biography from '../Biography/Biography';
import Benifits from './Benifits/Benifits';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Benifits></Benifits>
            <Biography></Biography>
        </div>
    );
};

export default Home;