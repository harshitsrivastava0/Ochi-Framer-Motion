import { motion } from "framer-motion";
import React from "react";

function Marque() {
  return (
    <div className=" marquee bg-zinc-900 is-inview">
      <div className=" w-full text-white py-10 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]">
        <div className="text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden  whitespace-nowrap">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            data-scroll
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            data-scroll-speed=".2"
            className=" inital text-[15vw] leading-none pr-10 font-['ochiclone\src\NeueMontreal-Regular.ttf'] font-semibold uppercase -mb-[3vw] pb-10"
          >
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className=" inital text-[15vw] pr-10 leading-none font-['ochiclone\src\NeueMontreal-Regular.ttf'] font-semibold uppercase -mb-[3vw] pb-10"
          >
            We are ochi
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Marque;
