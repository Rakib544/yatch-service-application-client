import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Scrollbar, A11y, Pagination, Autoplay } from 'swiper';
import { Grid } from '@material-ui/core';
import './Review.css';
SwiperCore.use([Navigation, Scrollbar, A11y, Pagination, Autoplay]);

const SingleReviewCart = ({reviewData}) => {
    return (
        <div className="review-container">
            <Grid container item lg={6} justify='center'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        reviewData && reviewData.map(review => (
                            <SwiperSlide>
                                <div className="text-container">
                                    <p className="review-text">{review.review}</p>
                                    <img src={review.img} alt={review.name} className="reviewer-img" />
                                    <h3 className="reviewer-name">{review.name}</h3>
                                    <p className="review-organization">{review.organizationsName}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Grid>
        </div>
    );
};

export default SingleReviewCart;