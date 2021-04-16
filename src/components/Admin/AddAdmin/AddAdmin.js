import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import './AddAdmin.css';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section>
            <Grid container className="header">
                <h2>Add Admin</h2>
                <h5>Image</h5>
            </Grid>
            <Paper>
                <div className="form-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="input" type="text" placeholder="Enter Email" name="email" ref={register({ required: true })} />
                        <button className="addAdminButton" type="submit">Submit</button>
                    </form>
                </div>
            </Paper>
        </section>
    );
};

export default AddAdmin;