import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomeServicesPart from '../HomeServicesPart/HomeServicesPart';
import OurInstructor from '../OurInstructor/OurInstructor';
import WhyOurCourse from '../WhyOurCourse/WhyOurCourse';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyOurCourse></WhyOurCourse>
            <HomeServicesPart></HomeServicesPart>
            <OurInstructor></OurInstructor>
            <Footer></Footer>
        </div>
    );
};

export default Home;