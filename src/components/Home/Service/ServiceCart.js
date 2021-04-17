import React from 'react';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import './ServiceCart.css';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 190,
    },
    serviceContainer: {
        padding: '10px 20px'
    }
});

const ServiceCart = ({ service }) => {
    const classes = useStyles();

    const history = useHistory();
    const handleAddToOrder = () => {
        history.push(`/admin/book/${service._id}`)
    }

    const { serviceTitle, imageURL, location, serviceType, price, totalPerson, totalBed } = service;
    return (
        <Grid item lg={4} onClick={handleAddToOrder} className="serviceContainer">
            {/* <Card>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={imageURL}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {serviceTitle}
                        </Typography>
                        <Button startIcon={<LocationOnOutlinedIcon color="secondary" />}>{location}</Button>
                    </CardContent>
                </CardActionArea>
                <hr />
                <div className={classes.serviceContainer}>
                    <Button startIcon={<PersonOutlineOutlinedIcon />}>{totalPerson}</Button>
                    <Button startIcon={<KingBedOutlinedIcon />}> {totalBed}</Button>
                </div>
            </Card> */}
            <img src={service.imageURL} alt={serviceTitle} className="img-fluid" />
            <div className="price-container">
                <p>$ {price}</p>
                <p>{serviceType}</p>
            </div>
            <h2>{serviceTitle}</h2>
            <Button startIcon={<LocationOnOutlinedIcon color="secondary" />}>{location}</Button>
            <hr />
            <div>
                <Button startIcon={<PersonOutlineOutlinedIcon />}>{totalPerson}</Button>
                <Button startIcon={<KingBedOutlinedIcon />}> {totalBed}</Button>
            </div>
        </Grid>
    );
};

export default ServiceCart;