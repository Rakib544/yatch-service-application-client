import { Button, Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
    input : {
        display: 'none'
    }
}))

const WriteReview = () => {
    const classes = useStyles()
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit } = useForm();

    const handleImageUpload = e => {
        const imageData = new FormData();
        imageData.set('key', 'd17139582dad6f2a6f60bbc19e0dbd5e');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageURL(res.data.data.display_url))
            .catch(err => console.log(err))
    }

    const onSubmit = data => {
        const reviewData = {...data, imageURL}
        fetch('http://localhost:8081/addReview', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(reviewData)
        })
    }
    return (
        <Grid container item lg={10} md={10} sm={12} xs={11} style={{margin: '50px auto', }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Paper className={classes.paper}>
                    <TextField
                        className={classes.testField}
                        variant="outlined"
                        label="Your Name"
                        name="name"
                        inputRef={register}
                    />
                    <TextField
                        className={classes.testField}
                        variant="outlined"
                        label="Organizations Name/ Company Name"
                        name="organizationsName"
                        inputRef={register}
                    />
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
                    <TextField
                        className={classes.testField}
                        type="text"
                        variant="outlined"
                        label="Write Review"
                        name="review"
                        inputRef={register}
                    />
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

export default WriteReview;