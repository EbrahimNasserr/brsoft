import Image from "next/image";
import Heading from "./utils/Heading";

const About = () => {
  return (
    <section className=" mt-[30rem]">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 gap-10  text-slate-800">
        <Heading h2={"about us"} />
        <div className="flex justify-between text-slate-600 view items-center">
          <p className="w-1/2 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            deserunt, quis repellendus excepturi inventore nulla deleniti. Unde
            quas voluptatibus ipsum?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            deserunt, quis repellendus excepturi inventore nulla deleniti. Unde
            quas voluptatibus ipsum?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            deserunt, quis repellendus excepturi inventore nulla deleniti. Unde
            quas voluptatibus ipsum?
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
