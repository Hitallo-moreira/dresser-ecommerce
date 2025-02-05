'use client';

import React from "react";
import Slider from "react-slick";
import Image from 'next/image'
const Carousel: React.FC = () => {
    const images = [
        "/banner1.jpg",
        "/banner2.jpg",
        "/banner3.jpg",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings} className="container mx-auto h-[35rem] mt-6">
            {images.map((src, index) => (
                <div key={index}>
                    <Image
                        className="h-[35rem] object-cover"
                        src={src}
                        alt="Dresser banner"
                        width={1920}
                        height={800}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;