"use client";

import { testimonials } from "@/constans";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

const ClientSay = () => {
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
            className="flex flex-col gap-[30px] p-10 inner-stroke rounded-[10px]"
          >
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <div
                  key={index}
                  className="px-[9px] py-2 inner-stroke rounded-full bg-gray10"
                >
                  <Image
                    width={20}
                    height={20}
                    src="/rating-star.png"
                    alt="rating-star"
                  />
                </div>
              ))}
            </div>

            <div className="text-white flex flex-col gap-2.5">
              <h3 className="text-xl font-semibold">{testimonial.title}</h3>
              <p className="text-base font-medium line-clamp-3">
                {testimonial.desc}
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Image
                src={testimonial.profile.img}
                alt={testimonial.profile.name}
              />
              <div className="flex flex-col">
                <h3 className="text-lg text-white font-medium">
                  {testimonial.profile.name}
                </h3>
                <p className="text-gray60 text-base font-medium">
                  {testimonial.profile.location}
                </p>
              </div>
            </div>
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

export default ClientSay;
