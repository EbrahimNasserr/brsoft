const Section1 = () => {
  return (
    <section className=" w-full overflow-hidden">
      <div className=" h-[65vh]">
        <div className="relative h-full">
          <video
            src="/Deloitte-Tech-Trends-online-video-cutter.com_.mp4"
            muted
            autoPlay
            loop
            className="w-full h-full object-cover"
          ></video>
          <div className="absolute inset-0 h-full bg-black/40 flex justify-start items-center">
            <h1 className="text-white text-4xl font-bold z-20 px-4">
              If at first, the idea is not absurd, then <br /> there is no hope
              for it
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
