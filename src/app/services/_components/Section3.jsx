import Heading from "@/app/about/_components/Heading";
import Image from "next/image";
import Link from "next/link";

const Section3 = () => {
  return (
    <section className="py-24 p-4">
      <div className="max-w-screen-xl mx-auto">
        <div className=" flex flex-col justify-center items-center gap-10 text-center text-slate-50 md:text-start md:justify-between md:flex-row-reverse">
          <div className="md:w-1/2">
            <Heading h2="start" span="working with us" />
            <p className=" my-5 text-slate-300 leading-relaxed">
              At BrSofr, we specialize in crafting innovative software solutions
              that empower businesses to thrive in a digital-first world.
              Founded with a passion for technology and a commitment to
              excellence, we combine cutting-edge tools with creative thinking
              to solve complex challenges.
            </p>
            <Link
              href="/contact"
              className="uppercase bg-[#0A6ED3] px-6 py-2 rounded-full"
            >
              contact us
            </Link>
          </div>
          <Image
            src="/servicesSection.jpg"
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

export default Section3;
