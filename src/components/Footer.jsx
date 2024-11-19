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
        <div className="grid grid-cols-1 md:grid-cols-3 text-center text-slate-600 gap-10">
          <div>
            <p className=" my-3 md:text-left text-slate-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              architecto reprehenderit illum voluptatem sit cum at quas repellat
              ipsum dicta?
            </p>
            <div className=" flex justify-center items-center md:justify-start">
              <Image
                src="/colorful_logo_svgweb.svg"
                width={50}
                height={50}
                alt="logo"
                loading="lazy"
              />
            </div>
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
          <div className="md:text-start">
            <h2 className="text-4xl capitalize my-3">contact info</h2>
            <ul className=" flex flex-col justify-center md:items-start gap-3 text-slate-600 capitalize">
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
        <div className="mt-10">
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
