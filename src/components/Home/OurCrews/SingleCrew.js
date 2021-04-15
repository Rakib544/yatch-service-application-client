import { Grid, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
    grid: {
        backgroundColor: "#fff",
        margin: '30px 10px'
    },
    title: {
        fontSize: '18px',
        fontWeight: '500'
    },
    role: {
        color: '#9baab4',
        lineHeight: '10px'
    }
})

const SingleCrew = ({ crew }) => {
    const classes = useStyles()
    return (
        <Grid item lg={3} className={classes.grid}>
            <img src={crew.img} alt={crew.name} style={{ width: '100%', height: '300px' }} />
            <h2 className={classes.title}>{crew.name}</h2>
            <h5 className={classes.role}>{crew.role}</h5>
            <IconButton><TwitterIcon className="iconStyle" /></IconButton>
            <IconButton><FacebookIcon className="iconStyle" /></IconButton>
            <IconButton><InstagramIcon className="iconStyle" /></IconButton>
        </Grid>
    );
};

export default SingleCrew;