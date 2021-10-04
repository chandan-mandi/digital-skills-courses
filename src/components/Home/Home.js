import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomeServicesPart from '../HomeServicesPart/HomeServicesPart';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServicesPart></HomeServicesPart>
            <Footer></Footer>
        </div>
    );
};

export default Home;