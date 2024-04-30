//import React library to use React.Fragment 
import React from "react";
//import components
import { WhoWeAre } from "./ui/Components/Home/WhoWeAre/WhoWeAre";


export default function Home() {
  return (
    <React.Fragment>
      <main className="w-full h-screen bg-whiteBg flex justify-start items-center flex-col">
        <div className="w-full flex flex-col mt-7 gap-6 text-center">
          <h1 className="text-hardRose font-bold text-2xl">
            Carrtes
            <span className="text-textTitle">
              {" "}
              ¡con un toque de amor y creatividad!{" "}
            </span>
          </h1>
          <p className="text-textParagraph">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl
            nunc mi ipsum.{" "}
          </p>
        </div>
        <div className="flex flex-col mt-16 items-center gap-5">
          <img src="./assetsHome/MainLogo.svg"></img>
          <button className="w-[100%] h-12 bg-hardRose text-textTitle cursor-pointer rounded-lg">
            View services
          </button>
        </div>
      </main>
      <WhoWeAre/>
    </React.Fragment>
  );
}
