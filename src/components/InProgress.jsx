import React from "react";

const InProgress = () => {
  return (
    <div className="flex flex-col items-center mt-56 gap-3 text-2xl uppercase font-jersey">
      <p>Loading...</p>
      <progress className="progress w-[40vw] max-sm:w-[60vw]"></progress>
      <p>Please wait</p>
    </div>
  );
};

export default InProgress;
