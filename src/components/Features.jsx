import Image from "next/image";
import Heading from "./utils/Heading";

const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-screen-lg mx-auto">
        <Heading h2={"features"} />
        <p className=" mt-5 text-center text-slate-300">
          All You Need to Create a Pro Website
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-slate-50 mt-10 gap-5">
          <div className="border border-slate-50 border-opacity-35 shadow hover:scale-110 transition-all text-center p-4">
            <div className="flex justify-center">
              <Image
                src="/Asset 3.png"
                alt="feature1"
                width={200}
                height={200}
              />
            </div>
            <h3 className="my-2 font-bold text-lg">AI-Powered Analytics</h3>
            <p className="text-sm leading-relaxed">
              Gain real-time insights with advanced AI-driven analytics.
            </p>
          </div>

          <div className="border border-slate-50 border-opacity-35 shadow hover:scale-110 transition-all text-center p-4">
            <div className="flex justify-center">
              <Image
                src="/Asset 3.png"
                alt="feature2"
                width={200}
                height={200}
              />
            </div>
            <h3 className="my-2 font-bold text-lg">Seamless Integrations</h3>
            <p className="text-sm leading-relaxed">
              Easily integrate with tools like Slack, GitHub, and Trello.
            </p>
          </div>

          <div className="border border-slate-50 border-opacity-35 shadow hover:scale-110 transition-all text-center p-4">
            <div className="flex justify-center">
              <Image
                src="/Asset 3.png"
                alt="feature3"
                width={200}
                height={200}
              />
            </div>
            <h3 className="my-2 font-bold text-lg">Customizable Dashboards</h3>
            <p className="text-sm leading-relaxed">
              Create intuitive dashboards tailored to your needs.
            </p>
          </div>

          <div className="border border-slate-50 border-opacity-35 shadow hover:scale-110 transition-all text-center p-4">
            <div className="flex justify-center">
              <Image
                src="/Asset 3.png"
                alt="feature4"
                width={200}
                height={200}
              />
            </div>
            <h3 className="my-2 font-bold text-lg">Advanced Security</h3>
            <p className="text-sm leading-relaxed">
              Protect your data with top-notch security measures.
            </p>
          </div>

          <div className="border border-slate-50 border-opacity-35 shadow hover:scale-110 transition-all text-center p-4">
            <div className="flex justify-center">
              <Image
                src="/Asset 3.png"
                alt="feature5"
                width={200}
                height={200}
              />
            </div>
            <h3 className="my-2 font-bold text-lg">API Access</h3>
            <p className="text-sm leading-relaxed">
              Unlock powerful API endpoints for developers.
            </p>
          </div>

          <div className="border border-slate-50 border-opacity-35 shadow hover:scale-110 transition-all text-center p-4">
            <div className="flex justify-center">
              <Image
                src="/Asset 3.png"
                alt="feature6"
                width={200}
                height={200}
              />
            </div>
            <h3 className="my-2 font-bold text-lg">Scalable Solutions</h3>
            <p className="text-sm leading-relaxed">
              Adapt as your business grows with scalable tech.
            </p>
          </div>

          <div className="border border-slate-50 border-opacity-35 shadow hover:scale-110 transition-all text-center p-4">
            <div className="flex justify-center">
              <Image
                src="/Asset 3.png"
                alt="feature7"
                width={200}
                height={200}
              />
            </div>
            <h3 className="my-2 font-bold text-lg">Data Encryption</h3>
            <p className="text-sm leading-relaxed">
              Keep sensitive information secure with encryption.
            </p>
          </div>

          <div className="border border-slate-50 border-opacity-35 shadow hover:scale-110 transition-all text-center p-4">
            <div className="flex justify-center">
              <Image
                src="/Asset 3.png"
                alt="feature8"
                width={200}
                height={200}
              />
            </div>
            <h3 className="my-2 font-bold text-lg">24/7 Support</h3>
            <p className="text-sm leading-relaxed">
              Access customer support anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;