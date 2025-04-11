import React from "react";
import { motion } from "framer-motion";

const data = [
  { title: "Prime", img: "../src/assets/prime.png", alt: "Prime" },
  { title: "Studio", img: "../src/assets/studio.png", alt: "Studio" },
  { title: "Union", img: "../src/assets/union.png", alt: "Union" },
  { title: "Junior", img: "../src/assets/junior.png", alt: "Junior" },
  { title: "Pixel", img: "../src/assets/pixel.png", alt: "Pixel" },
];

const MarqueeItem = () => {
  return (
    <>
      <h1 className="text-4xl font-bold font-raj ml-8 my-10" id="partners">
        Unleash the Thrill. Conquer the Arena.
      </h1>
      <div className="container mx-auto overflow-hidden mb-8">
        <div className="flex MyGradient whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "0%" }}
              animate={{ x: "-108%" }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="flex gap-25 flex-shrink-0 mx-10"
            >
              {data.map((e, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <img className="h-10" src={e.img} alt={e.alt}></img>
                  <p className="font-raj font-semibold">For the Love of PLaY</p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarqueeItem;
