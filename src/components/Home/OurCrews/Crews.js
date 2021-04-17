import { Container, Grid } from '@material-ui/core';
import React from 'react';
import crew1 from '../../../images/crew1.jpg';
import crew2 from '../../../images/crew2.jpg';
import crew3 from '../../../images/crew3.jpg';
import SingleCrew from './SingleCrew';
import './Crew.css';

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

const Crews = () => {
    return (
        <section className="crew-section">
            <Container className="crew-container">
                <h1 className="title">Meet Your Crew</h1>
                <Grid container spacing={2} justify="center">
                    {
                        crewData.map((crew, index) => <SingleCrew crew={crew} key={index} />)
                    }
                </Grid>
            </Container>
        </section>
    );
};

export default Crews;