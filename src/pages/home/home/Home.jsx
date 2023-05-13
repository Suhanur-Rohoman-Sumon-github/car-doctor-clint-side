import React from 'react';
import Navbar from '../shered/navbar/Navbar';
import Banner from '../banner/Banner';
import AboutUs from '../aboutUs/AboutUs';
import ServiseArea from '../serviseArea/ServiseArea';
import Contact from '../contactInFormation/Contact';
import PopularProducts from '../popularProducts/PopularProducts';
import OurTeam from '../OurTeam/OurTeam';
import WhatOurCustomerSay from '../whatOurCustomarSay/WhatOurCustomerSay';
import Footer from '../shered/footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <AboutUs />
            <ServiseArea />
            <Contact />
            <PopularProducts />
            <OurTeam />
            <WhatOurCustomerSay />
            <Footer />
        </div>
    );
};

export default Home;