import React from "react";

const Tittle = ({
  subTittle,
  tittle,
}: {
  subTittle: String;
  tittle: String;
}) => {
  return (
    <div className="flex flex-col justify-center w-full text-center">
      <h6 className="text-textTitle text-[12px] font-semibold">{subTittle}</h6>
      <h3 className="text-textTitle text-[30px] font-bold">{tittle}</h3>
    </div>
  );
};
export { Tittle };
