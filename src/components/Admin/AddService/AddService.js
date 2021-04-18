import React, { useState } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, TextField } from '@material-ui/core';
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
        "@media (max-width: 900px)": {
            display: 'block'
        }
    },
    testField: {
        width: '100%',
        margin: '10px 0'
    },
    button: {
        display: 'block',
        marginLeft: 'auto',
        marginTop: '10px',
        backgroundColor: '#1B4F72',
        color: '#fff',
        "&:hover": {
            backgroundColor: '#1B4F72'
        }
    },
    input: {
        display: 'none'
    }
}))

const AddProduct = () => {
    const classes = useStyles()
    const { register, handleSubmit, control } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleImageUpload = e => {
        const imageData = new FormData();
        imageData.set('key', 'd17139582dad6f2a6f60bbc19e0dbd5e');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageURL(res.data.data.display_url))
            .catch(err => console.log(err))
    }
    const onSubmit = data => {
        if (imageURL !== null) {
            let productData = { imageURL, ...data }
            fetch('https://mysterious-earth-80571.herokuapp.com/addService', {
                method: "POST",
                headers: { "Content-type": 'application/json' },
                body: JSON.stringify(productData)
            })
        }
    };
    return (
        <Grid container item lg={12} md={12} sm={12} xs={12} style={{padding: '10px'}}>
            <div>
                <h2 className="title"> Add Service</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Paper className={classes.paper}>
                    <TextField
                        className={classes.testField}
                        variant="outlined"
                        label="Enter service Title"
                        name="serviceTitle"
                        inputRef={register}
                    />
                    <TextField
                        className={classes.testField}
                        variant="outlined"
                        label="Enter Description"
                        name="description"
                        inputRef={register}
                    />
                    <TextField
                        className={classes.testField}
                        type="number"
                        variant="outlined"
                        label="Total Bed"
                        name="totalBed"
                        inputRef={register}
                    />
                    <TextField
                        className={classes.testField}
                        type="text"
                        variant="outlined"
                        label="Location"
                        name="location"
                        inputRef={register}
                    />
                    <TextField
                        className={classes.testField}
                        type="number"
                        variant="outlined"
                        label="Total person"
                        name="totalPerson"
                        inputRef={register}
                    />
                    <TextField
                        className={classes.testField}
                        type="number"
                        variant="outlined"
                        label="Price"
                        name="totalPrice"
                        inputRef={register}
                    />
                    <FormControl className={classes.testField}>
                            <InputLabel>Service Type</InputLabel>
                            <Controller
                                as={
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="per-week">Per Week</MenuItem>
                                        <MenuItem value="per-month">Per Month</MenuItem>
                                        <MenuItem value="per-day">Per Day</MenuItem>
                                    </Select>
                                }
                                name="serviceType"
                                control={control}
                                defaultValue=""
                            ></Controller>
                        </FormControl>

                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={handleImageUpload}
                    />
                    <label htmlFor="contained-button-file">
                        <Button
                            startIcon={<CloudUploadIcon />}
                            variant="outlined"
                            component="span"
                        >
                            Upload photo
                            </Button>
                    </label>
                </Paper>
                {
                    imageURL === null
                        ? <Button type="submit" disabled className={classes.button}>save</Button>
                        : <Button type="submit" className={classes.button}>save</Button>
                }
            </form>

        </Grid>
    );
};

export default AddProduct;