import React from "react";

import Navbar from "../Navbar/Navbar";
import Carousel from '../Carousel/Carousel'
import Tours from '../Tours/Tours'
import Footer from '../Footer/Footer'
import Info from '../Info/Info'
import Guides from '../Guides/Guides'
import BackToTop from '../BackToTop/BackToTop'
import LocationMap from "../LocationMap/LocationMap";
import Information from "../Information/Information";
import WhatsApp from "../WhatsApp/WhatsApp";

const Home = () => {

    return (
        <>
            <Navbar />
            <Carousel />
            <Tours />
            <Info />
            <Guides />
            <LocationMap />
            <Information />
            <BackToTop />
            <WhatsApp />
            <Footer />

        </>
    )
}

export default Home