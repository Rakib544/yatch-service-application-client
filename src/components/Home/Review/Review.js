import React, { useEffect, useState } from 'react';
import SingleReviewCart from './SingleReviewCart';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://mysterious-earth-80571.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    
    return (
        <section className="review-section">
            <h4 className="title">Review</h4>
            <p className="blog-subtitle">What Boat Booking Says</p>
            <SingleReviewCart reviewData={reviews} />
        </section>
    );
};

export default Review;