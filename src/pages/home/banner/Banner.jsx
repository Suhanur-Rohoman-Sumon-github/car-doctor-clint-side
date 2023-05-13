import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import igm1 from '../../../assets/images/banner/1.jpg'
import igm2 from '../../../assets/images/banner/2.jpg'
import igm3 from '../../../assets/images/banner/3.jpg'
import igm4 from '../../../assets/images/banner/4.jpg'
import igm5 from '../../../assets/images/banner/5.jpg'
import igm6 from '../../../assets/images/banner/6.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=''>
                        <img src={igm1} className='h-screen w-full' alt="" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className='absolute top-0 left-0 mt-32 ml-20  opacity-70 w-full text-left'>
                            <h1 className='text-5xl  text-white'>Car Servicing</h1>
                            <p className='my-6 text-white'>We provide expert car servicing to keep your car running smoothly.</p>
                            <button className="btn btn-error">Error</button>
                            <button className="btn btn-outline btn-error ml-4">Error</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img src={igm2} className='h-screen w-full' alt="" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className='absolute top-0 left-0 mt-32 ml-20  opacity-70 w-full text-left'>
                            <h1 className='text-5xl  text-white'>Car Servicing</h1>
                            <p className='my-6 text-white'>We provide expert car servicing to keep your car running smoothly.</p>
                            <button className="btn btn-error">view dtails</button>
                            <button className="btn btn-outline btn-error ml-4">explore more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img src={igm3} className='h-screen w-full' alt="" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className='absolute top-0 left-0 mt-32 ml-20  opacity-70 w-full text-left'>
                            <h1 className='text-5xl  text-white'>Car Servicing</h1>
                            <p className='my-6 text-white'>We provide expert car servicing to keep your car running smoothly.</p>
                            <button className="btn btn-error">Error</button>
                            <button className="btn btn-outline btn-error ml-4">Error</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img src={igm4} className='h-screen w-full' alt="" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className='absolute top-0 left-0 mt-32 ml-20  opacity-70 w-full text-left'>
                            <h1 className='text-5xl  text-white'>Car Servicing</h1>
                            <p className='my-6 text-white'>We provide expert car servicing to keep your car running smoothly.</p>
                            <button className="btn btn-error">Error</button>
                            <button className="btn btn-outline btn-error ml-4">Error</button>
                        </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img src={igm5} className='h-screen w-full' alt="" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className='absolute top-0 left-0 mt-32 ml-20  opacity-70 w-full text-left'>
                            <h1 className='text-5xl  text-white'>Car Servicing</h1>
                            <p className='my-6 text-white'>We provide expert car servicing to keep your car running smoothly.</p>
                            <button className="btn btn-error">Error</button>
                            <button className="btn btn-outline btn-error ml-4">Error</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img src={igm6} className='h-screen w-full' alt="" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className='absolute top-0 left-0 mt-32 ml-20  opacity-70 w-full text-left'>
                            <h1 className='text-5xl  text-white'>Car Servicing</h1>
                            <p className='my-6 text-white'>We provide expert car servicing to keep your car running smoothly.</p>
                            <button className="btn btn-error">Error</button>
                            <button className="btn btn-outline btn-error ml-4">Error</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img src={igm1} className='h-screen w-full' alt="" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className='absolute top-0 left-0 mt-32 ml-20  opacity-70 w-full text-left'>
                            <h1 className='text-5xl  text-white'>Car Servicing</h1>
                            <p className='my-6 text-white'>We provide expert car servicing to keep your car running smoothly.</p>
                            <button className="btn btn-error">Error</button>
                            <button className="btn btn-outline btn-error ml-4">Error</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;