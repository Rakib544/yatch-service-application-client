
import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';
import img1 from '../../../images/b-r-d-l-e-y-Ph7s3mc5aIk-unsplash.jpg'          ;
import img2 from '../../../images/brian-yurasits-1xAOTnlyJjE-unsplash.jpg'
import img3 from '../../../images/dragos-gontariu-a2lnfGo8T-g-unsplash.jpg'          ;

const serviceData = [
    {
        serviceTitle: 'Hello This us service title',
        imageURL: img1,
        location: 'New South Wels Blues',
        totalPerson: 6, 
        totalBed: 4,
        price: '120',
        serviceType: 'Per Day'
    },
    {
        serviceTitle: 'Hello This us service title',
        imageURL: img2,
        location: 'New South Wels Blues',
        totalPerson: 6, 
        totalBed: 4,
        price: '120',
        serviceType: 'Per Day'
    },
    {
        serviceTitle: 'Hello This us service title',
        imageURL: img3,
        location: 'New South Wels Blues',
        totalPerson: 6, 
        totalBed: 4,
        price: '120',
        serviceType: 'Per Day'
    },
]

const Service = () => {
    // const [serviceData, setServiceData] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:8081/allServices')
    //     .then(res => res.json())
    //     .then(data => setServiceData(data))
    // }, [])
    return (
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
            <h4 >SERVICE</h4>
            <h1>Featured Boats</h1>
            <Container maxWidth="md" style={{ marginBottom: '80px' }}>
                <Grid container spacing={3}>
                    {
                        serviceData && serviceData.map(service => <ServiceCart key={service.name} service={service} />)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Service;