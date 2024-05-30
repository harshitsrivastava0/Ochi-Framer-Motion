import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState } from "react";

function Feactured() {
  const cards = [useAnimation(), useAnimation()];
  // const [isHovering, setHovering] = useState(false);
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div data-scroll data-scroll-section className="w-full py-20 bg-black">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-['src\FoundersGrotesk-Semibold.ttf'] tracking-tighter">
          Feactured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards flex gap-10 w-full mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex left-full -translate-x-1/2 overflow-hidden -translate-y-1/2 top-1/2 text-[#CDEA68] z-10 font-['src\FoundersGrotesk-Semibold.ttf'] text-8xl leading-none tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full bg-green-500 rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh] "
          >
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-10 font-['src\FoundersGrotesk-Semibold.ttf'] text-8xl leading-none tracking-tighter">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full bg-green-500 rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Feactured;
