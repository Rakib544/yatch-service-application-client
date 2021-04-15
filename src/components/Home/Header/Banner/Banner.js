import { Button } from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar/Navbar'
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <Navbar />
            <div className="banner-text">
                <div>
                    <h4>Starting from $200 per day</h4>
                    <h1 className="text-title">Fast and Effective <br /> Service</h1>
                    <p className="text-subtitle">Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Ea accusamus veritatis qui architecto, ipsa.</p>
                    <button className="button">Rent a yacht now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;