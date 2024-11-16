const Heading = ({ h2, span }) => {
  return (
    <div className="flex capitalize text-slate-50 justify-center md:justify-start">
      <h2 className=" text-5xl mr-2"> {h2}</h2>
      <span className="relative text-5xl">
        {span}
        <span className=" absolute h-1/2 bg-[#0A6ED3] bottom-0 left-0 -z-10 w-full"></span>
      </span>
    </div>
  );
};

export default Heading;
