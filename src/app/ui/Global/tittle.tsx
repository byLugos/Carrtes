import React from "react";

const Tittle = ({subTittle, tittle}:{subTittle:String,tittle:String})=> {
  return (
    <React.Fragment>
      <h6>{subTittle}</h6>
      <h3>{tittle}</h3>
    </React.Fragment>
  );
};
export { Tittle };
