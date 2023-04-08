import React from "react";

//Images
import BreakingBad from "../../assets/breaking-bad.png";

const Commercial = () => {
  return (
    <div className="flex item-center justify-center w-full h-auto py-6 px-2 my-4 bg-red-400">
      <div className="w-4/12">
        <img alt="breaking bad" src={BreakingBad} className="w-full"/>
      </div>

      <div>
        <h1>Joining Us</h1>
        <h3>and add you're favorite movie's to list</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
          purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque
        </p>
      </div>
    </div>
  );
};

export default Commercial;
