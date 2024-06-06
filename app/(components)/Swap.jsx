import React from "react";

const Swap = () => {
  return (
    <>
      <div>
        <h1>Swap</h1>
        <div>
          <label className="swap swap-rotate text-6xl">
            <input type="checkbox" />
            <div className="swap-on">😈</div>
            <div className="swap-off">😇</div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Swap;
