import React, { useEffect } from "react";
import "./AboutUs.css";

//Icons
import { IoInfiniteOutline } from "react-icons/io5";
import { FaInternetExplorer } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

//Animation
import { motion } from "framer-motion";

const AboutUs = () => {
  //push page to top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Homepage";
  }, []);

  const transition = { duration: 3, type: "spring" };

  return (
    <div className="flex items-center justify-center w-full h-auto mb-4">
      <div className="flex item-center justify-center flex-col md:w-10/12 ">
        <div className="map flex items-center justify-center w-full h-auto bg-center bg-cover bg-no-repeat">
          <div className="flex item-center justify-center flex-col gap-8 rounded-xl p-6">
            <h1 className="text-center text-slate-100 text-3xl font-bold">
              About Us
            </h1>
            <p className="text-center text-md font-medium text-slate-300 md:w-10/12 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
              purus viverra accumsan in nisl nisi Arcu cursus vitae congue
              mauris rhoncus aenean vel elit scelerisque In egestas erat
              imperdiet sed euismod nisi porta lorem mollis Morbi tristique
              senectus et netus Mattis pellentesque id nibh tortor id aliquet
              lectus proin Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget Dictum varius duis at consectetur lorem Nisi
              vitae suscipit tellus mauris a diam maecenas sed enim
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1">
              <div className="gap-2 flex item-center justify-center text-lg font-semibold">
                <SiGmail className=" mt-1 text-red-600" />
                <span className="text-slate-100">mhrddmhrdd0@gmail.com</span>
              </div>
              <div className="gap-2 flex item-center justify-center text-lg font-semibold">
                <BsTelephoneFill className="mt-1 text-red-600" />
                <span className="text-slate-100">09123456789</span>
              </div>
              <div className="gap-2 flex item-center justify-center text-lg font-semibold">
                <BiCurrentLocation className="mt-1 text-red-600" />
                <span className="text-slate-100">
                  Tehran-TehranPars-Shahed blv
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
          <motion.div
            initial={{ left: "-4rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            class="rounded-xl flex items-center justify-center md:col-span-2 bg-zinc-800 relative"
          >
            <div className="flex item-center justify-center p-4 flex-col text-center">
              <FaInternetExplorer className="text-3xl mx-auto font-semibold text-slate-100 my-2" />
              <h1 className="text-xl font-bold text-slate-100">Optimized</h1>
              <p className="text-md font-normal text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                Egestas purus viverra accumsan in nisl nisi
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ right: "-4rem" }}
            whileInView={{ right: "0rem" }}
            transition={transition}
            class="rounded-xl flex items-center justify-center bg-zinc-800 relative"
          >
            <div className="flex item-center justify-center p-4 flex-col text-center">
              <IoInfiniteOutline className="text-3xl mx-auto font-semibold text-slate-100 my-2" />
              <h1 className="text-xl font-bold text-slate-100">Unlimited</h1>
              <p className="text-md font-normal text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ left: "-4rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            class="rounded-xl flex items-center justify-center bg-zinc-800 relative"
          >
            <div className="flex item-center justify-center p-4 flex-col text-center">
              <BiSupport className="text-3xl mx-auto font-semibold text-slate-100 my-2" />
              <h1 className="text-xl font-bold text-slate-100">Support</h1>
              <p className="text-md font-normal text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ right: "-4rem" }}
            whileInView={{ right: "0rem" }}
            transition={transition}
            class="rounded-xl flex items-center justify-center md:col-span-2 bg-zinc-800 relative"
          >
            <div className="flex item-center justify-center p-4 flex-col text-center">
              <AiFillSetting className="text-3xl mx-auto font-semibold text-slate-100 my-2" />
              <h1 className="text-xl font-bold text-slate-100">setting</h1>
              <p className="text-md font-normal text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                Egestas purus viverra accumsan in nisl nisi
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
