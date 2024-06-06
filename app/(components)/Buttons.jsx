import React from "react";

const Buttons = () => {
  return (
    <>
      <h1>Buttons</h1>
     <div className="flex gap-1 items-center">
     <button className="btn btn-sm btn-primary uppercase">
        Button Primary
      </button>
      <button className="btn btn-accent btn-circle">+</button>
      <button className="btn">
        <span className="loading loading-spinner"></span>
        loading...
      </button>
     </div>
    </>
  );
};

export default Buttons;
