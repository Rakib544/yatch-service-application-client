import React from 'react';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Button,Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './ServiceCart.css';

const ServiceCart = ({ service }) => {
    const history = useHistory();
    const handleAddToOrder = () => {
        history.push(`/admin/book/${service._id}`)
    }

    const { serviceTitle, imageURL, location, serviceType, totalPrice, totalPerson, totalBed } = service;

    return (
        <Grid lg={4} md={4} sm={6} xs={12} onClick={handleAddToOrder} className="serviceContainer">
            <div className="service">
                <div className="img-container">
                    <img src={imageURL} alt={serviceTitle} className="service-img" />
                </div>
                <div className="service-body">
                    <div className="price-container">
                        <div className="left">
                            <h2 className="service-title">{serviceTitle}</h2>
                        </div>
                        <div className="right">
                            <p className="service-price">$ {totalPrice}</p>
                            <div className="duration">
                                <AccessTimeIcon className="service-icon" fontSize="small" /><span className="service-type">{serviceType}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button startIcon={<LocationOnOutlinedIcon className="service-icon" />}><small className="location">{location}</small></Button>
                    </div>
                    <Button startIcon={<PersonOutlineOutlinedIcon className="service-icon" />}>{totalPerson}</Button>
                    <Button startIcon={<KingBedOutlinedIcon className="service-icon" />}> {totalBed}</Button>
                </div>
            </div>
        </Grid>
    );
};

export default ServiceCart;