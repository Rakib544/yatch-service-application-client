import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import './AddAdmin.css';
import { useForm } from "react-hook-form";
import admin from '../../../images/admin.jpg';

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
        <>
            <Grid container justify="center" alignItems="center">

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <img src={admin} alt="admin" className="admin-img" />
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <h2 className="admin-section-title">Add Admin Here</h2>
                    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                        <TextField className="input" variant="outlined" label="Enter Admin Email" name="email" inputRef={register} />
                        <button className="addAdminButton" type="submit">Submit</button>
                    </form>
                </Grid>

            </Grid>
        </>
    );
};

export default AddAdmin;