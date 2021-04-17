import { IconButton, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';

const ManageServiceRow = ({ service, handleDelete }) => {
    
    return (
        <TableRow key={service.serviceTitle}>
            <TableCell component="th" scope="row">
                {service.serviceTitle}
            </TableCell>
            <TableCell align="center">{service.location}</TableCell>
            <TableCell align="center">$ {service.totalPrice}</TableCell>
            <TableCell align="center">
                <IconButton onClick={() => handleDelete(service._id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton>
                    <EditIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default ManageServiceRow;