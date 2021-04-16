import { Button, makeStyles, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

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
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

    }
    return (
        <div>
            This is review page
            <form onSubmit={handleSubmit(onSubmit)}>
                <Paper className={classes.paper}>
                    <TextField
                        className={classes.testField}
                        variant="outlined"
                        label="Your Name"
                        name="Name"
                        inputRef={register}
                    />
                    <TextField
                        className={classes.testField}
                        variant="outlined"
                        label="Organizations Name/ Company Name"
                        name="organizations-name"
                        inputRef={register}
                    />
                    <TextField
                        className={classes.testField}
                        type="number"
                        variant="outlined"
                        label="Write Review"
                        name="review"
                        inputRef={register}
                    />
                </Paper>
                <Button type="submit" className={classes.button}>save</Button>
            </form>

        </div>
    );
};

export default WriteReview;