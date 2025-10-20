import Link from "next/link";

const Journey = () => {
  return (
    <section className="relative px-4 py-[50px] lg:px-20 lg:py-[60px] overflow-hidden shadow-[inset_0_1px_0_0_rgb(38,38,38),_inset_0_-1px_0_0_rgb(38,38,38)]">
      <img
        width={474}
        height={258}
        src="/shap-left.png"
        alt="shap-left"
        className="absolute z-[-1] -left-[21px] xl:-left-0 -top-[109px] xl:top-px"
      />
      <img
        width={474}
        height={258}
        src="/shap-right.png"
        alt="shap-right"
        className="absolute z-[-1] right-0 top-[228px] xl:-bottom-9"
      />
      <div className="container flex max-xl:flex-col items-center gap-[30px] xl:gap-[150px] justify-between">
        <div className="flex flex-col gap-1.5 lg:gap-2.5">
          <h3 className="text-white text-[28px] lg:text-[38px] font-semibold">
            Start Your Real Estate Journey Today
          </h3>
          <p className="text-sm lg:text-base text-gray60 font-medium">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <Link
          href="#"
          className="w-full lg:w-fit text-center shrink-0 px-5 py-3.5 text-sm text-white font-medium bg-purple60 rounded-lg"
        >
          Explore Properties
        </Link>
      </div>
    </section>
  );
};

export default Journey;
