import Image from "next/image";
import Heading from "./utils/Heading";

const About = () => {
  return (
    <section className=" py-24 px-4">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 gap-10  text-slate-800">
        <Heading h2={"about us"} />
        <div className="flex justify-between text-slate-600 view items-center">
          <p className="w-1/2 leading-loose">
            Empowering businesses to thrive in the digital age with cutting-edge
            software solutions, tailored to transform your vision into reality.
          </p>
          <div className="w-1/3">
            <Image
              src="/computer-work-4.png"
              width={300}
              height={300}
              alt="computer work"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex justify-between view items-center flex-row-reverse">
          <p className="w-1/2 leading-loose">
            Our team of experts brings innovation to life, developing seamless
            applications and robust systems designed to optimize your workflow.
          </p>
          <div className="w-1/3">
            <Image
              src="/character-008.png"
              width={300}
              height={300}
              alt="computer work"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex justify-between view items-center">
          <p className="w-1/2 leading-loose">
            From ideation to execution, we craft technology solutions that
            inspire growth, efficiency, and success for modern enterprises.
          </p>
          <div className="w-1/3">
            <Image
              src="/background-015.png"
              width={300}
              height={300}
              alt="computer work"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
