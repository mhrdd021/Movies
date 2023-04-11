import React from "react";

//Images
import FooterLogo from "../../assets/footer.jpg";

//Link
import { Link } from "react-router-dom";

//Icons
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div
      className="flex-row sm:flex items-center p-8 w-full h-auto bg-cover bg-no-repeat text-slate-100 relative bottom-0"
      style={{ backgroundImage: `url(${FooterLogo})` }}
    >
      <div className="w-full md:w-1/4">
        <div className="flex items-center justify-center flex-col gap-3">
          <h1 className="text-2xl font-bold">Movie Site</h1>
          <p className="text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
            purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque In egestas erat
          </p>
        </div>
      </div>

      <div className="w-full my-5 md:my-auto md:w-1/2 flex items-center justify-evenly">
        <div className="w-full md:w-1/2">
          <ul className="flex items-center justify-center flex-col gap-3">
            <li className="text-xl font-bold ">Links</li>
            <Link to={"/"}>
              <li>Home Page</li>
            </Link>
            <li>Movies</li>
            <Link to={"/categories"}>
              <li>Category</li>
            </Link>
            <Link to={"/SignUp"}>
              <li>Sign Up</li>
            </Link>
            <Link to={"/AboutUs"}>
              <li>About Us</li>
            </Link>
          </ul>
        </div>

        <div className="w-full md:w-1/2">
          <ul className="flex items-center justify-center flex-col gap-3">
            <li className="text-xl font-bold ">Pages</li>
            <Link to={"/"}>
              <li>Home Page</li>
            </Link>
            <li>Movies</li>
            <Link to={"/categories"}>
              <li>Category</li>
            </Link>
            <Link to={"/SignUp"}>
              <li>Sign Up</li>
            </Link>
            <Link to={"/AboutUs"}>
              <li>About Us</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="w-full md:w-1/4">
        <div className="flex items-center justify-center flex-col relative top-0 gap-3">
          <h1 className="text-xl font-bold">Contact us</h1>
          <input
            className="outline-none border-none text-slate-900 rounded-xl w-full px-2 py-1.5 mb-2"
            placeholder="Email Addresses"
          />
          <div>
            <div className="flex items-center justify-start gap-4 my-1.5">
              <SlLocationPin className="text-white" />
              <span>Tehran-Tajrish avenue - Sabet alley</span>
            </div>

            <div className="flex items-center justify-start gap-4 my-1.5">
              <BsTelephone className="text-white" />
              <span>09123456789</span>
            </div>

            <div className="flex items-center justify-start gap-4 my-1.5">
              <FiMail className="text-white" />
              <span>mhrddmhrdd0@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
