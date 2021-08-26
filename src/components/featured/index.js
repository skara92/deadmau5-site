import React from 'react';
import Carousel from './Carousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div className="featured_contaner">
            <Carousel />
            <div className="artist_name">
                <div className="wrapper">
                    DeadMau5
                </div>
            </div>
            <TimeUntil />
        </div>


    )
}
export default Featured;