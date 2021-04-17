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
            <Grid container className="header">
                <h2>Add Admin</h2>
                <h5>Image</h5>
            </Grid>
            <Grid item lg={8} md={8} sm={11} xs={11} style={{margin: '30px auto'}}>
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