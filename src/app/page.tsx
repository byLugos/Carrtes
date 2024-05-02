//import React library to use React.Fragment
import React from "react";
//import components
import { WhoWeAre } from "./ui/Components/Home/WhoWeAre/WhoWeAre";
import { WorkLine } from "./ui/Components/Home/WorkLine/workLine";

export default function Home() {
  return (
    <React.Fragment>
      <main className="w-full h-auto py-[40px] bg-whiteBg flex justify-start items-center flex-col px-[25px]">
        <div className="w-full flex flex-col mt-7 gap-6 text-center">
          <h1 className="text-hardRose font-bold text-2xl">
            Carrtes
            <span className="text-textTitle">
              {" "}
              ¡con un toque de amor y creatividad!{" "}
            </span>
          </h1>
          <p className="text-textParagraph leading-[35px] font-medium text-[18px]">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl
            nunc mi ipsum.{" "}
          </p>
        </div>
        <div className="flex flex-col mt-16 items-center gap-5 w-full">
          <figure>
            <img src="./assetsHome/MainLogo.svg" alt="Logo de Carrtes"/>
          </figure>
          <button className="w-[100%] h-12 mb-9 bg-hardRose text-textTitle cursor-pointer rounded-lg mt-5">
            View services
          </button>
        </div>
      </main>
      <WhoWeAre />
      <WorkLine/>
    </React.Fragment>
  );
}
