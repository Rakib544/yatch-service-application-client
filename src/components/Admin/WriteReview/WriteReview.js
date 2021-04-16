import { Button, Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

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
    }
}))

const WriteReview = () => {
    const classes = useStyles()
    const [loggedUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const reviewData = {...data, ...loggedUser}
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
                    <TextField
                        className={classes.testField}
                        type="text"
                        variant="outlined"
                        label="Write Review"
                        name="review"
                        inputRef={register}
                    />
                </Paper>
                <Button type="submit" className={classes.button}>save</Button>
            </form>

        </Grid>
    );
};

export default WriteReview;