import { Container, Grid } from '@material-ui/core';
import React from 'react';
import blog1 from '../../../images/joseph-barrientos-eUMEWE-7Ewg-unsplash.jpg';
import blog2 from '../../../images/pietro-de-grandi-6U4wogjLArk-unsplash.jpg'
import blog3 from '../../../images/vidar-nordli-mathisen-zqgOkt7sQlY-unsplash.jpg';
import BlogCard from './BlogCard/BlogCard';

const blogData = [
    {
        title: 'Try Living A Simple Life',
        img: blog1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos quidem rerum.',
        date: 'December 11, 2019',
        name: 'Rakib',
    },
    {
        title: 'Start Writing A Journal',
        img: blog2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos quidem rerum.',
        date: 'July 24, 2019',
        name: 'John',
    },
    {
        title: 'Try Living A Simple Life',
        img: blog3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos quidem rerum.',
        date: 'January 11, 2020',
        name: 'Ramos',
    }
]

const Blog = () => {
    return (
        <section className="blog-section">
            <Container className="blog-container">
                <h2 className="title">Recent from Blog</h2>
                <p className="blog-subtitle">Find out our latest news, promotions and professional tips.</p>
                <Grid container spacing={3}>
                    {
                        blogData && blogData.map(blog => <BlogCard kry={blog.title} blog={blog} />)
                    }
                </Grid>
            </Container>
        </section>
    );
};

export default Blog;