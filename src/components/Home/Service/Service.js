
import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Service = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8081/allServices')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])
    return (
        <section>
            <h4 className="title">SERVICE</h4>
            <h1 className="blog-subtitle">Our Featured Boats</h1>
            <Container className="blog-container">
                <Grid container spacing={3}>
                    {
                        serviceData && serviceData.map(service => <ServiceCart key={service.name} service={service} />)
                    }
                </Grid>
            </Container>
        </section>
    );
};

export default Service;