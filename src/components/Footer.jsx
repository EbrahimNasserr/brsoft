import Heading from "@/app/about/_components/Heading";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" py-24 bg-blue-300 relative bg-opacity-15">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-footer absolute inset-0 bg-no-repeat -z-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-center text-slate-50">
          <div>
            <Heading span="BrSoft" />
            <p className=" my-3 md:text-left text-slate-300 leading-relaxed">
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
            <ul className=" flex flex-col justify-center gap-3 text-slate-300 capitalize">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
