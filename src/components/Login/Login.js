import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo@2x.png'
import { googleSignIn, initializedLoginFramework } from './LoginManager';

const useStyles = makeStyles(() => ({
    img: {
        display: 'block',
        margin: '40px auto',
        height: '80px'
    },
    loginContainer: {
        textAlign: 'center',
        marginTop: '70px'
    },
    button: {
        padding: '13px 20px',
        borderRadius: '30px',
        border: '0',
        outline: 'none',
        cursor: 'pointer',
        backgroundColor: 'black',
        color: '#fff',
        fontWeight: 'bold'
    }
}))

const Login = () => {
    const classes = useStyles()
    initializedLoginFramework()

    const handleGoogleSignIn = () => {        
        googleSignIn()
    }
    return (
        <div>
            <Link to="/">
                <img src={logo} alt="logo" className={classes.img} />
            </Link>
            <div className={classes.loginContainer}>
                <h2>Login With</h2>
                <button className={classes.button} onClick={handleGoogleSignIn}>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;