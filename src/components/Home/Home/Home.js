import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Crews from '../OurCrews/Crews';
import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <Review />
            <Crews />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;