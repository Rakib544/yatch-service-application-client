import React, { useEffect, useState } from 'react';
import SingleReviewCart from './SingleReviewCart';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:8081/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <div style={{ textAlign: 'center' }}>
            <h4>Review</h4>
            <h2>What BOATBOOKINGS SAYS</h2>
            <SingleReviewCart reviewData={reviews} />
        </div>
    );
};

export default Review;