import Link from "next/link";
import Heading from "./Heading";
import Image from "next/image";

const Section3 = () => {
  return (
    <section className="py-24 p-4">
      <div className=" flex flex-col justify-center items-center gap-10 text-center text-slate-50 md:text-start md:justify-between md:flex-row-reverse">
        <div className="md:w-1/2">
          <Heading h2="who" span="we are" />
          <p className=" my-5 text-slate-600 leading-relaxed">
            At BrSofr, we specialize in crafting innovative software solutions
            that empower businesses to thrive in a digital-first world. Founded
            with a passion for technology and a commitment to excellence, we
            combine cutting-edge tools with creative thinking to solve complex
            challenges.
          </p>
          <p className=" my-5 text-slate-600 leading-relaxed">
            Our team of expert developers, designers, and strategists work
            collaboratively to deliver scalable, secure, and user-friendly
            solutions tailored to your unique needs. Whether it&apos;s building
            bespoke applications, streamlining workflows, or driving growth
            through digital transformation, we&apos;re here to turn your vision into
            reality.
          </p>
          <Link
            href="/contact"
            className="uppercase bg-[#0A6ED3] px-6 py-2 rounded-full"
          >
            contact us
          </Link>
        </div>
        <Image
          src="/character-008.png"
          width={500}
          height={500}
          alt="about"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Section3;
