import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import crew1 from '../../../images/crew1.jpg';
import crew2 from '../../../images/crew2.jpg';
import crew3 from '../../../images/crew3.jpg';
import SingleCrew from './SingleCrew';

const crewData = [
    {
        name: 'John Doe',
        role: 'Captain',
        img: crew1
    },
    {
        name: 'Kiron Pollard',
        role: 'Skipper',
        img: crew2
    },
    {
        name: 'Cris Morries',
        role: 'Skipper',
        img: crew3
    }

]
const useStyles = makeStyles({
    container: {
        margin: '50px 0',
        textAlign: 'center',
        padding: '10px 50px',
        backgroundColor: '#EEF7FD'
    }
})

const Crews = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <h1>Meet Your Crew</h1>
            <Grid container spacing={2} justify="center">
                {
                    crewData.map((crew, index) => <SingleCrew crew={crew} key={index}/>)
                }
            </Grid>
        </Container>
    );
};

export default Crews;