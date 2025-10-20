import Image from "next/image";
import Link from "next/link";
import { heroCards, heroCardsBottom } from "@/constans";

const Hero = () => {
  return (
    <div className="relative max-lg:mt-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-[60px]">
        <div className="w-full max-xl:order-2 lg:pl-20 flex flex-col justify-center gap-[50px]">
          <div className="flex flex-col gap-4 lg:gap-5">
            <h1 className="text-white text-[28px] lg:text-[46px] font-semibold">
              Discover Your Dream Property with Estatein
            </h1>
            <p className="text-sm lg:text-base text-gray60 font-medium">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <div className="flex max-md:flex-col items-center gap-4">
              <Link
                href="#"
                className="max-lg:w-full text-center p-5 px-3.5 rounded-lg text-white text-sm font-medium inner-stroke"
              >
                Learn More
              </Link>
              <Link
                href="#"
                className="max-lg:w-full text-center bg-purple60 p-5 px-3.5 rounded-lg text-white text-sm font-medium"
              >
                Browse Properties
              </Link>
            </div>
          </div>

          <div className="gap-3 xl:gap-4 grid grid-cols-2 xl:grid-cols-3">
            {heroCards.map((card) => (
              <div
                key={card.title}
                className="flex max-xl:last-of-type:col-span-2 flex-col max-lg:items-center gap-[2px] p-4 lg:px-5 lg:py-3.5 bg-gra10 inner-stroke rounded-[10px]"
              >
                <h3 className="text-white text-2xl lg:text-3xl font-bold">
                  {card.num}
                </h3>
                <p className="text-sm lg:text-base text-gray60 font-medium">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <div className="bg-gray10 w-full h-[302px] xl:h-[622px] relative px-[162px] flex flex-col justify-center gap-[60px] max-md:rounded-xl overflow-hidden">
          <Image fill src="/hero-img.png" alt="hero" className="object-cover" />
        </div>
        <Image
          width={129}
          height={129}
          src="/hero-badg.png"
          alt="badge"
          className="absolute hidden lg:block lg:top-[95px] lg:left-1/2 lg:-translate-[35px] z-10"
        />
      </div>

      <div className="max-xl:mt-10 max-lg:border border-gray15 rounded-[12px] shadow-[0_0_0_4px_#191919] grid grid-cols-2 xl:grid-cols-4 items-center gap-2.5 p-2.5 max-lg:bg-gray8">
        {heroCardsBottom.map((card) => (
          <div
            key={card.title}
            className="px-3.5 lg:px-4 py-5 lg:py-[30px] flex flex-col justify-center items-center gap-5 inner-stroke bg-gray10 rounded-[10px]"
          >
            <img width={60} height={60} src={card.img.src} alt={card.title} />
            <h3 className="text-sm lg:text-base max-lg:text-center text-white font-semibold">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
