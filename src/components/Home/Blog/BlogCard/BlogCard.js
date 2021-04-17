import { Grid } from '@material-ui/core';
import React from 'react';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import './BlogCard.css'

const BlogCard = ({ blog }) => {
    const { title, img, description, date, name } = blog;
    return (
        <Grid item lg={4} md={4} sm={6} xs={12}>
            <div className="blog">
                <img src={img} alt={title} className="blog-img" />
                <h5 className="blog-card-title">{title}</h5>
                <p className="blog-time"><EventAvailableIcon className="mr-2" /> {date}</p>
                <p className="blog-description">{description}</p>
                <h5 className="blog-writer"><AccountCircleOutlinedIcon className="mr-2" />{name}</h5>
            </div>
        </Grid>
    );
};

export default BlogCard;