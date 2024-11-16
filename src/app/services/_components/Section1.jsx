import Image from "next/image";

const Section1 = () => {
  return (
    <section className="h-screen bg-blue-200">
      <div className="max-w-screen-xl p-4 mx-auto h-full flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between">
        <div className="text-slate-50 flex justify-center items-center flex-col lg:justify-start lg:items-start">
          <h1 className="text-7xl mb-5 font-bold capitalize">our services</h1>
          <p className="text-slate-500 text-2xl md:w-3/4 lg:text-start">
            At BrSoft, we are dedicated to delivering innovative, tailor-made
            software solutions that empower businesses to thrive in today’s
            digital landscape. Our expertise spans a wide range of services,
            ensuring we meet your unique business needs with precision and
            excellence.
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
