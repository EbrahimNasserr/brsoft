import Heading from "@/app/about/_components/Heading";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineLocationOn } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { CiPhone } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-24 bg-blue-300 relative bg-opacity-15 px-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-footer absolute inset-0 bg-no-repeat -z-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center text-slate-600">
          <div>
            <Heading span="BrSoft" />
            <p className=" my-3 md:text-left text-slate-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              architecto reprehenderit illum voluptatem sit cum at quas repellat
              ipsum dicta?
            </p>
            <Image
              src="/colorful_logo_svgweb.svg"
              width={50}
              height={50}
              alt="logo"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-4xl capitalize my-3">quickLinks</h2>
            <ul className=" flex flex-col justify-center gap-3 text-slate-600 capitalize">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">about</Link>
              </li>
              <li>
                <Link href="contact">contact</Link>
              </li>
              <li>
                <Link href="/services">services</Link>
              </li>
            </ul>
          </div>
          <div className="text-start">
            <h2 className="text-4xl capitalize my-3">contact info</h2>
            <ul className=" flex flex-col justify-center items-start gap-3 text-slate-600 capitalize">
              <li className="flex justify-center gap-4 items-center">
                <MdOutlineLocationOn /> <p>mumbai, indai 400104</p>
              </li>
              <li className="flex justify-center gap-4 items-center">
                <SiGmail />
                <p>example@gmail.com</p>
              </li>
              <li className="flex justify-center gap-4 items-center">
                <CiPhone />
                <p> +111-222-333</p>
              </li>
            </ul>
          </div>
        </div>
        <div className=" absolute top-0 right-0">
          <svg
            className="w-96 h-96"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#0F62FE"
              d="M36.2,-52.4C48.1,-48.6,59.9,-40.7,63.4,-29.9C66.9,-19.1,61.9,-5.5,61.3,9.8C60.6,25,64.2,41.9,57.7,50.8C51.2,59.6,34.6,60.6,18.8,66.2C2.9,71.9,-12.2,82.4,-26.4,81.9C-40.7,81.4,-54.1,70,-65.8,56.8C-77.6,43.7,-87.7,28.9,-82.7,16.2C-77.8,3.6,-57.9,-6.9,-46.5,-16.8C-35,-26.7,-32.1,-36,-25.7,-42.4C-19.4,-48.8,-9.7,-52.4,1.2,-54.3C12.1,-56.2,24.2,-56.3,36.2,-52.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div>
          <ul className=" flex justify-center text-slate-600 items-center gap-10 text-3xl">
            <li>
              <FaFacebook className="hover:text-blue-500 transition-all duration-200" />
            </li>
            <li>
              <FaInstagram className="hover:text-blue-500 transition-all duration-200" />
            </li>
            <li>
              <FaTwitter className="hover:text-blue-500 transition-all duration-200" />
            </li>
          </ul>
        </div>
        <div className=" flex justify-center absolute bottom-10 right-0 left-0">
          <p>© 2025 BrSoft. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
