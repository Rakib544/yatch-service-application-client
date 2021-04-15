
import { Container, Grid } from '@material-ui/core';
import React from 'react';
import ser1 from '../../../images/dragos-gontariu-a2lnfGo8T-g-unsplash.jpg';
import ser2 from '../../../images/brian-yurasits-1xAOTnlyJjE-unsplash.jpg';
import ser3 from '../../../images/b-r-d-l-e-y-Ph7s3mc5aIk-unsplash.jpg';
import ServiceCart from './ServiceCart';

const ServiceData = [
    {
        name: 'Alexandra',
        img: ser1,
        location: ' MEDITERRANEAN SEA',
        price: '9800',
        type: 'per month',
        person: 8,
        bed: 5
    },
    {
        name: 'Anna Maria',
        img: ser2,
        location: 'CARIBBEAN',
        price: '80',
        type: 'per day',
        person: 3,
        bed: 2
    },
    {
        name: 'Blue Moon Cruising',
        img: ser3,
        location: 'INDIAN OCEAN',
        price: '230',
        type: 'per week',
        person: 5,
        bed: 4
    }
]

const Service = () => {
    return (
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
            <h4 >SERVICE</h4>
            <h1>Featured Boats</h1>
            <Container maxWidth="md" style={{ marginBottom: '80px' }}>
                <Grid container spacing={3}>
                    {
                        ServiceData.map(service => <ServiceCart key={service.name} service={service} />)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Service;