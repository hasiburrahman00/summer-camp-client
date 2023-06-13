import React from 'react';
import Banner from '../Banner/Banner';
import Sponsor from '../Sponsor/Sponsor';
import Feature from '../Feature/Feature';
import Footer from '../../Shared/Footer/Footer';
import TopInstructors from '../TopInstructors/TopInstructors';
import TopCourses from '../TopCourses/TopCourses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sponsor></Sponsor>
            <Feature></Feature>
            <TopCourses></TopCourses>
            <TopInstructors></TopInstructors>
            <Footer></Footer>
        </div>
    );
};

export default Home;