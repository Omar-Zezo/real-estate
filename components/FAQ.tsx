"use client";

import { testimonials } from "@/constans";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

const FAQ = () => {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      spaceBetween={30}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide>
          <div
            key={testimonial.title}
            className="flex flex-col gap-6 p-10 inner-stroke rounded-[10px]"
          >
            <h3 className="text-white text-xl font-semibold">
              {testimonial.title}
            </h3>
            <p className="text-gray60 text-sm font-medium line-clamp-3">
              {testimonial.desc}
            </p>
            <Link
              href="#"
              className="w-fit px-5 py-3.5 rounded-lg bg-gray10 text-white text-sm font-medium"
            >
              Read More
            </Link>
          </div>
        </SwiperSlide>
      ))}
      <div className="max-lg:mt-[30px] mt-10 py-5 flex items-center justify-between shadow-[inset_0_1px_0_0_rgb(38,38,38)]">
        <p className="text-white text-base font-medium">01 of 60</p>
        <div className="flex gap-2.5">
          <div className="custom-prev p-2.5 rounded-full inner-stroke cursor-pointer">
            <Image
              width={24}
              height={24}
              src="/svg/left-arrow.svg"
              alt="left"
            />
          </div>
          <div className="custom-next p-2.5 rounded-full inner-stroke bg-gray10 cursor-pointer">
            <Image
              width={24}
              height={24}
              src="/svg/right-arrow.svg"
              alt="left"
            />
          </div>
        </div>
      </div>
    </Swiper>
  );
};

export default FAQ;
