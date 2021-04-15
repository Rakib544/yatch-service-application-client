import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Scrollbar, A11y, Pagination, Autoplay } from 'swiper';
import { Grid } from '@material-ui/core';
SwiperCore.use([Navigation, Scrollbar, A11y, Pagination, Autoplay]);

const reviewData = [
    {
        name: 'EDDILE WALECE',
        country: 'USA',
        img: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex dolorem provident blanditiis iure facere voluptatibus incidunt debitis corporis officiis.'
    },
    {
        name: 'EDDILE WALECE',
        country: 'USA',
        img: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex dolorem provident blanditiis iure facere voluptatibus incidunt debitis corporis officiis.'
    },
    {
        name: 'EDDILE WALECE',
        country: 'USA',
        img: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex dolorem provident blanditiis iure facere voluptatibus incidunt debitis corporis officiis.'
    },
    {
        name: 'EDDILE WALECE',
        country: 'USA',
        img: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex dolorem provident blanditiis iure facere voluptatibus incidunt debitis corporis officiis.'
    },
]

const SingleReviewCart = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container item lg={6} justify='center'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        reviewData.map(review => (
                            <SwiperSlide>
                                <div style={{padding: '15px'}}>
                                    <p>{review.description}</p>
                                    <h3>{review.name}</h3>
                                    <h6>{review.country}</h6>
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