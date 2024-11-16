import Image from "next/image";
import Heading from "./utils/Heading";

const Services = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-screen-lg mx-auto">
        <Heading h2={"services"} />
        <div className="w-full bg-slate-100 text-center rounded-3xl grid grid-cols-1 md:grid-cols-3 p-12 gap-20 md:gap-12 items-center mt-24">
          <div className="flex flex-col gap-3">
            <div className=" flex justify-center items-center">
              <h3 className=" relative w-fit capitalize text-3xl font-semibold text-slate-900">
                any data
                <Image
                  src="/services1.webp"
                  width={110}
                  height={110}
                  alt="services1"
                  loading="lazy"
                  className=" absolute -top-12 -left-12"
                />
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              libero!
            </p>
          </div>
          <div className="flex flex-col gap-3">
          <div className=" flex justify-center items-center">
              <h3 className=" relative w-fit capitalize text-3xl font-semibold text-slate-900">
                any data
                <Image
                  src="/services2.webp"
                  width={110}
                  height={110}
                  alt="services1"
                  loading="lazy"
                  className=" absolute -top-12 -left-12"
                />
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              libero!
            </p>
          </div>
          <div className="flex flex-col gap-3">
          <div className=" flex justify-center items-center">
              <h3 className=" relative w-fit capitalize text-3xl font-semibold text-slate-900">
                any data
                <Image
                  src="/services3.png"
                  width={110}
                  height={110}
                  alt="services1"
                  loading="lazy"
                  className=" absolute -top-12 -left-12"
                />
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              libero!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
