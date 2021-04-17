import { Container, Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-camping-white.png';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Grid container spacing={2} className="grid">
                    <Grid item lg={3} md={3} sm={6} xs={12} className="icon-container">
                        <img src={logo} alt="logo" className="logo" />
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, doloremque.</p>
                        <IconButton><TwitterIcon className="iconStyle" /></IconButton>
                        <IconButton><FacebookIcon className="iconStyle" /></IconButton>
                        <IconButton><InstagramIcon className="iconStyle" /></IconButton>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <h1 className="link-header">Discover</h1>
                        <p><Link className='link'>Rental Tips</Link></p>
                        <p><Link className='link'>News and Update</Link></p>
                        <p><Link className='link'>Low-Cost Rent</Link></p>
                        <p><Link className='link'>Car Adventures</Link></p>
                        <p><Link className='link'>Insurance</Link></p>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <h1 className="link-header">Customer Info</h1>
                        <p><Link className='link'>FAQ</Link></p>
                        <p><Link className='link'>Our Features</Link></p>
                        <p><Link className='link'>Our Benefits</Link></p>
                        <p><Link className='link'>Rent a Yacht</Link></p>
                        <p><Link className='link'>Testimonials</Link></p>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <h1 className="link-header">Contact Us</h1>
                        <p className="text-brand">OUR ADDRESS:</p>
                        <p className="link">4 Goldfield Rd. Honolulu, HI 96815</p>
                        <hr />
                        <p className="text-brand">PHONE NUMBER:</p>
                        <p className="link">0 800 555 22 33, 0 811 777 81 91</p>
                        <hr />
                        <p className="text-brand">EMAIL ADDRESS:</p>
                        <p className="link">yourmail@information.com</p>
                    </Grid>
                </Grid>
            </Container>
            <div className="copyrightContainer">
                <p className="copyright-text">&copy; {new Date().getFullYear()}. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;