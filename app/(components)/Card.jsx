import React from "react";

const Card = () => {
  return (
    <>
      <div>
        <h1>Card</h1>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl glass">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <span className="badge badge-primary upper">New</span>
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                impedit perferendis quam sit beatae et? Quibusdam, labore est
                sint sed quia fugiat unde aut quaerat ipsam, commodi consequatur
                perferendis distinctio!
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <span className="badge badge-primary upper">New</span>
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                impedit perferendis quam sit beatae et? Quibusdam, labore est
                sint sed quia fugiat unde aut quaerat ipsam, commodi consequatur
                perferendis distinctio!
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
