import {
  ArchiveBoxIcon,
  CheckCircleIcon,
  UserCircleIcon,
  VariableIcon,
} from "@heroicons/react/16/solid";
import { workLineD } from "./Utils/workLine.data";
import { Tittle } from "@/app/ui/Global/tittle";

const WorkLine = () => {
  return (
    <section className=" bg-whiteBg flex flex-col items-center justify-center py-[100px] px-[25px] gap-[40px]">
      <Tittle subTittle="Key features" tittle="Work Line" />
      <div className="w-full flex flex-col gap-[35px] mt-[20px]">
        {workLineD.map((item, i) => (
          <div
            className="w-full h-[300px] bg-lightRose rounded-[12px] flex flex-col shadow-cards items-center justify-center gap-2 mt-[20px]"
            key={i}
          >
            <item.icon className="size-[50px] text-hardRose"/>
            <p className="text-textTitle text-[30px] font-bold ">
              {item.tittle}
            </p>
            <p className="text-textParagraph text-[18px] text-center leading-[35px]">{item.subTittle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export { WorkLine };
