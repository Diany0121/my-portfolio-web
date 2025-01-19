"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from "swiper/modules";
import { serviceData } from "@/data";


const SliderTechnologies = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[240px] md:h-[240px] w-[270px] md:w-[600px]"
        >

            {serviceData.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className="flex flex-col px-6 py-8 h-auto md:h-[170px] rounded-lg cursor-pointer bg-[rgba(55,123,47,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(105,150,100,0.15)] transition-all duration-300 hover:border-secondary border-2 ">
                    <div className="mb-4 text-4xl">{item.logo}</div>
                        <div>
                            <h3 className="mb-4 text-sm md:text-lg">{item.title}</h3>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}


export default SliderTechnologies;