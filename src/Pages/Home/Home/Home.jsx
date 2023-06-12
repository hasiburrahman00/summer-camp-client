import React from 'react';
import Banner from '../Banner/Banner';
import Sponsor from '../Sponsor/Sponsor';
import Feature from '../Feature/Feature';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sponsor></Sponsor>
            <Feature></Feature>
            <Footer></Footer>
        </div>
    );
};

export default Home;