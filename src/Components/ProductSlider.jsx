import React, { useRef, useEffect } from 'react';
import './Landing.css'; // Import the CSS file for typing animation
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // For Swiper styles (if using v9 or earlier)
import 'swiper/css'; // For Swiper styles (if using v10 or later)
import 'swiper/css/effect-coverflow'; // For effect styles
import 'swiper/css/pagination'; // For pagination styles
import 'swiper/css/autoplay'; // For autoplay styles

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'; // Import necessary modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Import the left and right icons

// Import your images
import code_mig_img from '../Asset/code.jpg';
import mech_img from '../Asset/8.png';
import civil_img from '../Asset/civil.jpg';
import address_img from '../Asset/address.jpg';
import bill_img from '../Asset/bill.jpg';
import data_visual from '../Asset/datavisualization.jpg';
import project_convo_img from '../Asset/10.png';
import data_profile_img from '../Asset/9.png';
import obj_deduct_img from '../Asset/OBJ.PNG.jpg';
import newspaper from '../Asset/newspaper.jpg';

// Product data
const products = [
    { id: 1, image: code_mig_img, name: 'CODE MIGRATION' },
    { id: 2, image: mech_img, name: 'MECHANICAL: VISION ANALYTICS' },
    { id: 3, image: civil_img, name: 'CIVIL PLAN - MATERIAL BREAKDOWN' },
    { id: 4, image: address_img, name: 'ADDRESS NORMALIZATION' },
    { id: 5, image: bill_img, name: 'BILL EXTRACTION AND AGGREGATION' },
    { id: 6, image: data_visual, name: 'DATA VISUALIZATION' },
    { id: 7, image: project_convo_img, name: 'PROJECT CONVERSION' },
    { id: 8, image: data_profile_img, name: 'DATA PROFILING' },
    { id: 9, image: obj_deduct_img, name: 'IMAGE RECOGNITION AND OBJECT DETECTION' },
    { id: 10, image: newspaper, name: 'NEWSPAPER EXTRACTION' },
];

const ProductSlider = () => {
    const swiperRef = useRef(null);
    const scrollRef = useRef(null); // Ref for the scroll container
    const autoScrollIntervalRef = useRef(null); // Ref to store the interval for auto-scrolling

    const depthValue = window.innerWidth <= 768 ? 50 : 200; // Set depth to 50 for mobile


    return (
        <div className="h-screen w-full flex flex-col justify-center bg-gray-100 relative">
            {/* Main container, hidden on small screens */}
            <div className="hidden md:block w-full h-full">
                {/* Product Heading */}
                <h1 className="text-5xl font-bold text-center mt-12 mb-24 product_heading">
                    Our <span className='text-[#FFCC3E]'>Products</span>
                </h1>

                {/* Swiper container */}
                <Swiper
                    effect={'coverflow'}
                    grabCursor={false} // Remove hand-picking cursor
                    centeredSlides={true}
                    slidesPerView={3} // Display 3 slides at once
                    spaceBetween={0} // Reduces space between slides
                    coverflowEffect={{
                        rotate: 0, // No rotation
                        stretch: -50, // Circular layout for depth
                        depth: depthValue, // Use the calculated depth value
                        modifier: 2,
                        slideShadows: false, // Disable shadows
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                    }}
                    autoplay={{
                        delay: 2000, // Smooth transition
                        disableOnInteraction: false,
                    }}
                    loop={true} // Enable infinite loop
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper w-full h-[100%]"
                    onSwiper={(swiper) => (swiperRef.current = swiper)} // Attach swiper instance to the ref
                >
                    {products.map(product => (
                        <SwiperSlide key={product.id}>
                            <div className="flex flex-col items-center h-[88%] img_container">
                                <div className="relative group h-[100%]">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product_img w-[95%] h-[95%] object-cover rounded-2xl mt-4 mb-2 transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-gray-500 cursor-pointer"
                                    />
                                </div>
                                <h2 className="mt-4 text-xl font-bold product_name">{product.name}</h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Left and Right Arrow Buttons */}
                <div className='flex justify-center'>
                    <div className='arrows-container'>
                        <button
                            className="arrow-button text-black bg-[#FFCC3E] border rounded-2xl cursor-pointer left-arrow hover:transform transition-transform hover:scale-110 duration-500"
                            onClick={() => swiperRef.current.slidePrev()}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} size="xs" />
                        </button>
                        <div className="custom-pagination text-center"></div>
                        <button
                            className="arrow-button text-black bg-[#FFCC3E] border rounded-2xl cursor-pointer right-arrow hover:transform transition-transform hover:scale-110 duration-500"
                            onClick={() => swiperRef.current.slideNext()}
                        >
                            <FontAwesomeIcon icon={faChevronRight} size="xs" />
                        </button>
                    </div>
                </div>
            </div>

            {/* display in small screen */}
            <div className="block md:hidden h-screen w-full mt-2 bg-gray-100 relative">
                {/* Product Heading */}
                <h1 className="text-5xl font-bold text-center mb-20 product_heading">
                    Our <span className='text-[#FFCC3E]'>Products</span>
                </h1>
                <div className='small_imgs'>
                    <div className='smallScreen_scroll flex flex-row overflow-hidden' ref={scrollRef}>
                        {products.map(product => (
                            <img
                                key={product.id}
                                className='w-[90%] h-[100%] mx-2'
                                src={product.image}
                                alt={product.name}
                            />
                        ))}
                    </div>
                </div>
                <div className='flex'>
                    <h1 className=' bg-[#FFCC3E] w-fit mt-8 px-4 py-1 border rounded-xl font-medium'>View more...</h1>
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;
