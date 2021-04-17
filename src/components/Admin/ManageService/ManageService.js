import React, { useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
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
                        {services.map(service => (
                            <TableRow key={service.serviceTitle}>
                                <TableCell component="th" scope="row">
                                    {service.serviceTitle}
                                </TableCell>
                                <TableCell align="center">{service.location}</TableCell>
                                <TableCell align="center">$ {service.totalPrice}</TableCell>
                                <TableCell align="center">
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default ManageService;