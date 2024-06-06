import React from "react";

const Drawer = () => {
  return (
    <>
      <div>
        <h1>Drawer</h1>
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toogle" />
                <div className="drawer-content">
                    lol
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open</label>
                </div>
                <div className="drawer-side">
                    <li><a href="">Sidebar 1</a></li>
                    <li><a href="">Sidebar 1</a></li>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
