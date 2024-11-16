import Image from "next/image";

const Section2 = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-slate-50 text-center md:text-left">
          <div className=" text-center border border-slate-700 rounded hover:scale-105 transition-all shadow-white shadow-sm p-4">
            <div className="flex justify-center mb-3">
              <Image
                src="/sevices1.webp"
                alt="services"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
            <h2 className="capatalize text-3xl font-bold mb-3">Data Analyis</h2>
            <p className=" leading-relaxed text-slate-300">
              Turn raw data into actionable insights with our advanced analytics
              solutions. We help you uncover trends, predict outcomes, and make
              data-driven decisions that drive your business forward. Let your
              data tell a story that leads to success.
            </p>
          </div>
          <div className=" text-center border border-slate-700 rounded hover:scale-105 transition-all shadow-white shadow-sm p-4">
            <div className="flex justify-center mb-3">
              <Image
                src="/servicesPage2.webp"
                alt="services"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
            <h2 className="capatalize text-3xl font-bold mb-3">
              SEO Optimization
            </h2>
            <p className=" leading-relaxed text-slate-300">
              Building stunning, responsive websites is our forte. From
              intuitive designs to robust functionality, we craft digital
              experiences that captivate your audience and elevate your brand.
              Your online presence starts here, stronger than ever.
            </p>
          </div>
          <div className=" text-center border border-slate-700 rounded hover:scale-105 transition-all shadow-white shadow-sm p-4">
            <div className="flex justify-center mb-3">
              <Image
                src="/servicesPage3.webp"
                alt="services"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
            <h2 className="capatalize text-3xl font-bold mb-3">
              App Development
            </h2>
            <p className=" leading-relaxed text-slate-300">
              Transform your ideas into powerful applications with our
              end-to-end development services. Whether it&apos;s iOS, Android,
              or cross-platform, we deliver sleek, user-friendly apps that keep
              your customers engaged and your business thriving.
            </p>
          </div>
          <div className=" text-center border border-slate-700 rounded hover:scale-105 transition-all shadow-white shadow-sm p-4">
            <div className="flex justify-center mb-3">
              <Image
                src="/servicesPage4.webp"
                alt="services"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
            <h2 className="capatalize text-3xl font-bold mb-3">Web Design</h2>
            <p className=" leading-relaxed text-slate-300">
              Transform your ideas into powerful applications with our
              end-to-end development services. Whether it&apos;s iOS, Android,
              or cross-platform, we deliver sleek, user-friendly apps that keep
              your customers engaged and your business thriving.
            </p>
          </div>
          <div className=" text-center border border-slate-700 rounded hover:scale-105 transition-all shadow-white shadow-sm p-4">
            <div className="flex justify-center mb-3">
              <Image
                src="/servicesPage5.webp"
                alt="services"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
            <h2 className="capatalize text-3xl font-bold mb-3">Branding</h2>
            <p className=" leading-relaxed text-slate-300">
              Transform your ideas into powerful applications with our
              end-to-end development services. Whether it&apos;s iOS, Android,
              or cross-platform, we deliver sleek, user-friendly apps that keep
              your customers engaged and your business thriving.
            </p>
          </div>
          <div className=" text-center border border-slate-700 rounded hover:scale-105 transition-all shadow-white shadow-sm p-4">
            <div className="flex justify-center mb-3">
              <Image
                src="/servicesPage6.webp"
                alt="services"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
            <h2 className="capatalize text-3xl font-bold mb-3">
              Marketing Plan
            </h2>
            <p className=" leading-relaxed text-slate-300">
              Transform your ideas into powerful applications with our
              end-to-end development services. Whether it&apos;s iOS, Android,
              or cross-platform, we deliver sleek, user-friendly apps that keep
              your customers engaged and your business thriving.
            </p>
          </div>
          <div className=" text-center border border-slate-700 rounded hover:scale-105 transition-all shadow-white shadow-sm p-4">
            <div className="flex justify-center mb-3">
              <Image
                src="/servicesPage7.webp"
                alt="services"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
            <h2 className="capatalize text-3xl font-bold mb-3">
              Speed Optimization
            </h2>
            <p className=" leading-relaxed text-slate-300">
              Transform your ideas into powerful applications with our
              end-to-end development services. Whether it&apos;s iOS, Android,
              or cross-platform, we deliver sleek, user-friendly apps that keep
              your customers engaged and your business thriving.
            </p>
          </div>
          <div className=" text-center border border-slate-700 rounded hover:scale-105 transition-all shadow-white shadow-sm p-4">
            <div className="flex justify-center mb-3">
              <Image
                src="/servicesPage8.webp"
                alt="services"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
            <h2 className="capatalize text-3xl font-bold mb-3">
              Content Managment
            </h2>
            <p className=" leading-relaxed text-slate-300">
              Transform your ideas into powerful applications with our
              end-to-end development services. Whether it&apos;s iOS, Android,
              or cross-platform, we deliver sleek, user-friendly apps that keep
              your customers engaged and your business thriving.
            </p>
          </div>
          <div className=" text-center border border-slate-700 rounded hover:scale-105 transition-all shadow-white shadow-sm p-4">
            <div className="flex justify-center mb-3">
              <Image
                src="/servicesPage8.webp"
                alt="services"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
            <h2 className="capatalize text-3xl font-bold mb-3">Hosting</h2>
            <p className=" leading-relaxed text-slate-300">
              Transform your ideas into powerful applications with our
              end-to-end development services. Whether it&apos;s iOS, Android,
              or cross-platform, we deliver sleek, user-friendly apps that keep
              your customers engaged and your business thriving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
