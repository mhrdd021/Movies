import React from "react";

//Images
import BreakingBad from "../../assets/breaking-bad.png";

//Animation
import { motion } from "framer-motion";

//Link
import { Link } from "react-router-dom";

const Commercial = () => {
  const transition = { duration: 3, type: "spring" };
  const transition2 = { duration: 3, type: "ease" };

  return (
    <div
      className="flex item-center justify-center flex-col-reverse md:flex-row-reverse w-10/12 h-auto my-4 rounded-xl"
      style={{ background: "linear-gradient(140deg, #434343, #000000)" }}
    >
      <motion.div
        initial={{ bottom: "-4rem" }}
        whileInView={{ bottom: "0rem" }}
        transition={transition}
        className="flex item-center justify-center md:w-4/12 relative w-10/12 mx-auto"
      >
        <img alt="breaking bad" src={BreakingBad} className="w-full" />
      </motion.div>

      <div className="flex item-center justify-center md:w-8/12 w-full">
        <motion.div
          initial={{ left: "3rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition2}
          className="flex item-center justify-center flex-col py-4 px-8 gap-2 relative"
        >
          <h1 className="md:text-3xl text-xl font-bold text-slate-100">
            Joining <span className="text-yellow-500">Us</span>
          </h1>
          <h3 className="md:text-2xl text-lg font-semibold text-slate-300">
            and add you're favorite movie's to list
          </h3>
          <p className="md:text-md text-sm font-normal text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
            purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque
          </p>
          <div className="flex items-center justify-start">
            <Link to={"/SignUp"}>
              <button className="bg-yellow-500 rounded-full py-1 px-3 text-slate-100 text-sm font-bold shadow-lg shadow-yellow-400 hover:scale-105 active:scale-95 duration-300 ease-in-out">
                Join us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Commercial;
