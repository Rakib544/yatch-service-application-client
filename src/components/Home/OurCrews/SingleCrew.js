import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const SingleCrew = ({ crew }) => {
    return (
        <Grid item lg={4} md={4} sm={6} xs={12}>
            <div className="crew-card">
                <img src={crew.img} alt={crew.name} className="crew-img" />
                <h2 >{crew.name}</h2>
                <h5 >{crew.role}</h5>
                <IconButton><TwitterIcon className="icon" /></IconButton>
                <IconButton><FacebookIcon className="icon" /></IconButton>
                <IconButton><InstagramIcon className="icon" /></IconButton>
            </div>
        </Grid>
    );
};

export default SingleCrew;