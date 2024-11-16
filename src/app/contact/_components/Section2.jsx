import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Section2 = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <div className="flex capitalize text-slate-700 justify-center md:justify-start mb-4">
              <h2 className=" text-4xl mr-2 font-bold">what set us</h2>
              <span className="relative z-10 text-4xl font-bold">
                apart
                <span className=" absolute h-1/2 bg-[#0A6ED3] bottom-0 -z-10 left-0 w-full"></span>
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* Address and Info */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-2">Address</h3>
                <p className="text-gray-600">
                  78 Ohio Dr.
                  <br />
                  Patchogue, NY 11772
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Working Hours</h3>
                <p className="text-gray-600">
                  Monday to Friday: 9AM - 8PM
                  <br />
                  Week-End: 10AM - 5PM
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Contact</h3>
                <p className="text-gray-600">
                  email@milu.COM
                  <br />
                  +88 (0) 101 0000 000
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Socials</h3>
                <div className="flex space-x-4 text-gray-600">
                  <a href="#" className="hover:text-blue-600">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="hover:text-pink-500">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
