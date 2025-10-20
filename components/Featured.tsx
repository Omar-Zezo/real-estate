"use client";

import { featured } from "@/constans";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

const Featured = () => {
  return (
    <Swiper
      // slidesPerView={3}
      spaceBetween={30}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {featured.map((item) => (
        <SwiperSlide>
          <div
            key={item.title}
            className="flex flex-col gap-4 lg:gap-5 p-6 lg:p-[30px] inner-stroke rounded-[12px]"
          >
            <div className="relative h-[210px] lg:h-[255px] rounded-[10px] overflow-hidden">
              <Image
                fill
                src={item.img}
                alt={item.title}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 lg:gap-6">
              <div className="flex flex-col gap-0.5 lg:gap-1">
                <h4 className="text-lg lg:text-xl text-white font-semibold">
                  Seaside Serenity Villa
                </h4>
                <div className="text-sm lg:text-base text-gray60 font-medium flex items-center gap-1">
                  <p className="line-clamp-2">
                    A stunning 4-bedroom, 3-bathroom villa in a peacefu Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, ipsa.
                  </p>
                  <Link
                    href="#"
                    className="text-white underline lg:ml-1 shrink-0 self-end"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {item.options.map((option) => (
                  <div
                    key={option.title}
                    className="flex shrink-0 items-center gap-1 px-3.5 py-1.5 inner-stroke rounded-[28px]"
                  >
                    <Image
                      width={20}
                      height={20}
                      src={option.icon}
                      alt={option.title}
                    />
                    <p className="text-white text-sm font-medium">
                      {option.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-end justify-between gap-10">
                <div className="flex flex-col">
                  <p className="text-sm text-gray60 font-medium">Price</p>
                  <p className="text-lg lg:text-xl text-white font-semimedium">
                    $550,000
                  </p>
                </div>

                <Link
                  href="#"
                  className="px-5 py-3.5 text-white text-sm font-medium rounded-lg bg-purple60"
                >
                  View Property Details
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="py-5 max-lg:mt-[30px] mt-10 flex items-center justify-between shadow-[inset_0_1px_0_0_rgb(38,38,38)]">
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

export default Featured;
