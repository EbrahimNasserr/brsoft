import Image from "next/image";

const Section2 = ({ src }) => {
  return (
    <section className="px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <Image
              src={src}
              width={500}
              height={500}
              alt="projectImage"
              loading="lazy"
            />
          </div>
          <div>
            <Image
              src={src}
              width={500}
              height={500}
              alt="projectImage"
              loading="lazy"
            />
          </div>
          <div>
            <Image
              src={src}
              width={500}
              height={500}
              alt="projectImage"
              loading="lazy"
            />
          </div>
        </div>
    </section>
  );
};

export default Section2;
