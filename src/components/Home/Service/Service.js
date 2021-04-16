
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