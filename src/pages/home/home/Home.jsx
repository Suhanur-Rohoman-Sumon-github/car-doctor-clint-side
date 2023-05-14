import React from 'react';
import Banner from '../banner/Banner';
import AboutUs from '../aboutUs/AboutUs';
import ServiseArea from '../serviseArea/ServiseArea';
import Contact from '../contactInFormation/Contact';
import PopularProducts from '../popularProducts/PopularProducts';
import OurTeam from '../OurTeam/OurTeam';
import WhatOurCustomerSay from '../whatOurCustomarSay/WhatOurCustomerSay';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <ServiseArea />
            <Contact />
            <PopularProducts />
            <OurTeam />
            <WhatOurCustomerSay />
        </div>
    );
};

export default Home;