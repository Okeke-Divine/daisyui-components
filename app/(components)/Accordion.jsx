import React from "react";

const Accordion = () => {
  return (
    <>
      <div>
        <h1>Accordion (FAQs)</h1>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow bg-base-200 join-item border border-base-300">
            <input type="radio" name="accord" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Why is these done
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis saepe eos necessitatibus et ea, veniam laboriosam
                dolore porro vel aperiam quia assumenda similique at temporibus
                ex culpa numquam explicabo aliquam!
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200 join-item border border-base-300">
            <input type="radio" name="accord" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Why is these done
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis saepe eos necessitatibus et ea, veniam laboriosam
                dolore porro vel aperiam quia assumenda similique at temporibus
                ex culpa numquam explicabo aliquam!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 join-item border border-base-300">
            <input type="radio" name="accord" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Why is these done
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis saepe eos necessitatibus et ea, veniam laboriosam
                dolore porro vel aperiam quia assumenda similique at temporibus
                ex culpa numquam explicabo aliquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
