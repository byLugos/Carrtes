import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { whoWeAreD } from "./Utils/whoWeAre.data";
import { Tittle } from "@/app/ui/Global/tittle";

const WhoWeAre = () => {
  return (
    <section className=" bg-mediumRose flex flex-col items-center justify-center py-[100px] px-[25px] gap-[40px]">
      <Tittle subTittle="Who we are" tittle="Our Mission and Values" />
      <p className="text-textParagraph text-[18px] font-medium leading-[35px] text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi similique
        harum, nam quos labore architecto minus ex est, omnis voluptate, fugiat
        vero cumque sint amet rerum eius perspiciatis commodi animi.
      </p>
      <div className="w-full flex flex-col gap-[35px] mt-[20px]">
        {whoWeAreD.map((item, i) => (
          <div
            className="w-full h-[94px] bg-lightRose rounded-[12px] shadow-cards flex justify-between items-center px-[60px]"
            key={i}
          >
            <CheckCircleIcon className="size-[43px] text-hardRose"/>
            <p className="text-textParagraph text-[18px] ">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export { WhoWeAre };
