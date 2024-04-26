//import components
import { ButtonTest } from "./ui/Global/buttonTest";

export default function Home() {
  return (
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
    </main>
  );
}
