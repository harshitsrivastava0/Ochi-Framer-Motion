import React from "react";

function Cards() {
  return (
    <div className="w-full items-center px-32 h-screen flex gap-5 bg-zinc-900">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
            &copy;hey
          </button>
        </div>
      </div>
      <div className="cardContainer w-1/2 flex gap-5 h-[50vh]">
        <div className="card relative items-center justify-center flex w-1/2 rounded-xl h-full bg-[#77c4ba]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
            &copy;hey
          </button>
        </div>
        <div className="card relative items-center justify-center flex w-1/2 rounded-xl h-full bg-[#77c4ba]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
            &copy;hey
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
