const Section5 = ({ title, desc }) => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Text Content */}
          <div className="lg:w-2/3">
            <h2 className="font-bold text-4xl text-slate-600">
              Details & Info
            </h2>
            <h1 className="my-5 font-bold text-3xl text-slate-600">{title}</h1>
            <p className=" text-slate-600 text-lg  leading-relaxed">{desc}</p>
          </div>

          {/* Right Column: Metadata */}
          <div className=" flex flex-col gap-4">
            <div>
              <span className="text-gray-500 font-medium">Category: </span>
              <span className="text-gray-900">Photography</span>
            </div>
            <div>
              <span className="text-gray-500 font-medium">Client: </span>
              <span className="text-gray-900">ThemeForest</span>
            </div>
            <div>
              <span className="text-gray-500 font-medium">Share: </span>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-lg transition"
                  aria-label="Share on Facebook"
                >
                  F
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-lg transition"
                  aria-label="Share on Twitter"
                >
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
