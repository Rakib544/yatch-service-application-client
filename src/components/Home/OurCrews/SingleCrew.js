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
                <h2 className="crew-name">{crew.name}</h2>
                <h5 className="crew-role">{crew.role}</h5>
                <IconButton><TwitterIcon className="crew-icon" /></IconButton>
                <IconButton><FacebookIcon className="crew-icon" /></IconButton>
                <IconButton><InstagramIcon className="crew-icon" /></IconButton>
            </div>
        </Grid>
    );
};

export default SingleCrew;