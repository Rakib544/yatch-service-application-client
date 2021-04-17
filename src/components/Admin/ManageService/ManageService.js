import React, { useEffect, useState } from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import ManageServiceRow from './ManageServiceRow';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-earth-80571.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])

    const handleDelete = (id) => {
        fetch('https://mysterious-earth-80571.herokuapp.com/delete', {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ id })
        })
    }
    return (
        <Grid container item lg={11} md={11} sm={12} xs={12} style={{ margin: '30px 10px' }}>
            <TableContainer component={Paper}>
                <Table style={{ minWidth: '450px' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Service Name</TableCell>
                            <TableCell align="center">Location</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map(service => <ManageServiceRow key={service._id} service={service} handleDelete={handleDelete} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default ManageService;