import Image from "next/image";

const Section1 = () => {
  return (
    <section className="h-screen">
      <div className="max-w-screen-xl p-4 mx-auto h-full flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between">
        <div className="text-slate-800 flex justify-center items-center flex-col lg:justify-start lg:items-start">
          <h1 className="text-7xl mb-5 font-bold capitalize">About us</h1>
          <p className="text-slate-600 text-2xl md:w-3/4 lg:text-start">
            From startups to enterprises, we partner with businesses across
            industries to help them achieve their goals. We pride ourselves on
            delivering high-quality services backed by transparent
            communication, timely delivery, and exceptional support.
          </p>
        </div>
        <Image
          src="/aboutus.png"
          width={600}
          height={600}
          alt="about"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Section1;
