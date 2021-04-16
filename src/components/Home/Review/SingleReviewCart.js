import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Scrollbar, A11y, Pagination, Autoplay } from 'swiper';
import { Grid } from '@material-ui/core';
SwiperCore.use([Navigation, Scrollbar, A11y, Pagination, Autoplay]);

const SingleReviewCart = ({reviewData}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                                <div style={{padding: '15px'}}>
                                    <p>{review.review}</p>
                                    <img src={review.img} alt={review.name} />
                                    <h3>{review.name}</h3>
                                    <h6>{review.organizationsName}</h6>
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