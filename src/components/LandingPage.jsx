import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      className="w-full h-screen text-white bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-40 px-[5vw]">
        {["we create", "Eye opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker font-['ochiclone\src\FoundersGrotesk-Semibold.ttf']">
              <div className="w-fit flex overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" mt-2 ml-2 w-[8vw] h-[5vw] rounded-md bg-fuchsia-800 translate-1"
                  >
                    <img
                      className="rounded-md  bg-cover overflow-hidden"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="text-[7.5vw] uppercase leading-[6vw] tracking-tighter font-extralight">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-300 mt-40 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((itmes, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {itmes}
          </p>
        ))}
        <div className="start flex items-center justify-center gap-5">
          <div className="px-5 py-1.5 border-[1px] border-zinc-300 rounded-full font-md text-md uppercase">
            Start the project
          </div>
          <div className="w-9 h-9 flex items-center justify-center border-[1px] border-zinc-300 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
