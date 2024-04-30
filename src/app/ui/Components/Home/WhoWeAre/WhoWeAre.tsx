import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { whoWeAreD } from "./Utils/whoWeAre.data";
import { Tittle } from "@/app/ui/Global/tittle";

const WhoWeAre = () => {
  return (
    <section className=" bg-mediumRose flex flex-col items-center justify-center">
        <Tittle subTittle="Who we are" tittle="Our Mission and Values"/>
      {whoWeAreD.map((item, i) => (
        <div className="" key={i}>
          <CheckCircleIcon />
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};
export { WhoWeAre };
