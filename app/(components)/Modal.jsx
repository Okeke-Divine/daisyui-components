"use client";
const Modal = () => {
  return (
    <>
      <div>
        <h1>Modal</h1>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal").showModal()}
        >
          Open modal
        </button>
        <dialog id="my_modal" className="modal modal-bottom md:modal-middle">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3>Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Modal;
