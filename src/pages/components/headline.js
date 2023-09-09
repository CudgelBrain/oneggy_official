import React from "react";

const headline = (props) => {
  return (
    <div>
      <div className={`flex sm:flex-row flex-col sm:item-start items-center mt-16 w-[${props.width}]`}>
        <h2 className=" bg-blue font-semibold px-2 py-2 text-center mt-8 rounded-md text-3xl" >
          {props.title}
        </h2>
        <p className="mt-8 text-center sm:text-left sm:w-[30rem] sm:ml-10">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default headline;
