
const Heading = ({ h2 }) => {
  return (
    <div className="flex justify-center items-center mb-5">
      <h2 className="text-5xl relative w-fit text-slate-50 uppercase font-bold">
        {h2}
      </h2>
    </div>
  );
};

export default Heading;
