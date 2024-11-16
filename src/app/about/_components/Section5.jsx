import Link from "next/link";
import Heading from "./Heading";
import Image from "next/image";

const Section5 = () => {
  return (
    <section className="py-24 p-4">
      <div className=" flex flex-col justify-center items-center gap-10 text-center text-slate-50 md:text-start md:justify-between md:flex-row">
        <div className="md:w-1/2">
          <Heading h2="modern" span="Solutions" />
          <p className=" my-5 text-slate-300 leading-relaxed"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            href="/contact"
            className="uppercase bg-[#0A6ED3] px-6 py-2 rounded-full"
          >
            contact us
          </Link>
        </div>
        <div>
          <Image
            src="/Asset 3.png"
            width={500}
            height={500}
            alt="about"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Section5;
