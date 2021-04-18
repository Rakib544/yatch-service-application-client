import { Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import './AddAdmin.css';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://mysterious-earth-80571.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
    }

    return (
        <Grid container>
            <h2 className="title">Add Admin</h2>
            <Grid item lg={12} md={12} sm={12} xs={12} style={{padding: '10px'}}>
                <Paper className="p-5">
                    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                        <TextField className="input" variant="outlined" label="Enter Email" name="email" inputRef={register} />
                        <button className="addAdminButton" type="submit">Submit</button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddAdmin;