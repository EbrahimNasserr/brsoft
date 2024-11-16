import { IoDiamondOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";

const Section4 = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-slate-50 gap-10">
          <div className=" text-center">
            <h3 className="text-3xl">Modern & Clean</h3>
            <div className=" flex justify-center items-center my-3">
              <IoDiamondOutline className=" text-3xl" />
            </div>
            <ul className="flex flex-col gap-3 text-slate-300">
              <li>Top Quality</li>
              <li>Clean Design</li>
              <li>Bug Free</li>
              <li>Premium Support</li>
            </ul>
          </div>
          <div className=" text-center">
            <h3 className="text-3xl">Responsive</h3>
            <div className=" flex justify-center items-center my-3">
              <CiMobile3 className=" text-3xl" />
            </div>
            <ul className="flex flex-col gap-3 text-slate-300">
              <li>Top Quality</li>
              <li>Clean Design</li>
              <li>Bug Free</li>
              <li>Premium Support</li>
            </ul>
          </div>
          <div className=" text-center">
            <h3 className="text-3xl">Highly Customizable</h3>
            <div className=" flex justify-center items-center my-3">
              <MdOutlineRocketLaunch className=" text-3xl" />
            </div>
            <ul className="flex flex-col gap-3 text-slate-300">
              <li>Top Quality</li>
              <li>Clean Design</li>
              <li>Bug Free</li>
              <li>Premium Support</li>
            </ul>
          </div>
          <div className=" text-center">
            <h3 className="text-3xl">Top Notch Support</h3>
            <div className=" flex justify-center items-center my-3">
              <FaRegSmileBeam className=" text-3xl" />
            </div>
            <ul className="flex flex-col gap-3 text-slate-300">
              <li>Top Quality</li>
              <li>Clean Design</li>
              <li>Bug Free</li>
              <li>Premium Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
