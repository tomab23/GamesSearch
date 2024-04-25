import React from "react";

const InProgress = () => {
  return (
    <div className="flex flex-col items-center 3xl:mt-52 xl:mt-32 max-xl:mt-52 max-sm:mt-40 gap-3 text-2xl uppercase font-jersey ">
      <p className=" ">Loading...</p>
      <progress className="progress w-[30vw] max-sm:w-[60vw]"></progress>
      <p>Please wait</p>
    </div>
  );
};

export default InProgress;
