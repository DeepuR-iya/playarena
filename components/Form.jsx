import { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const cardsData = [
  {
    id: 1,
    image: "/perfect.png",
    title: "The Perfect Shot",
    text: "Join our Photography Workshop from 7th-11th April & a special kids' session on 12th April, 4 PM onwards.",
    btnText: "Explore",
  },
  {
    id: 2,
    image: "/paw.png",
    title: "Paw-someday out",
    text: "Bring your furry friend for a fun-filled day on 11th April, 12 PM onwards! Enjoy games, treats, and tail-wagging fun because every pet deserves a special day out!",
    btnText: "Jump In",
  },
  {
    id: 3,
    image: "/grow.png",
    title: "Glow it & Grow it",
    text: "Join us for a fun-filled day of planting and painting on 14th April, 12 PM onwards! Unleash your creativity and nurture nature with us!",
    btnText: "Roll Now",
  },
  {
    id: 4,
    image: "/egg.png",
    title: "Egg & Seek",
    text: "Let the Easter adventure begin on 18th April, 12 PM onwards! Hunt for eggs, meet the Easter Bunny, and enjoy a day filled with surprises, laughter & festive fun!",
    btnText: "Play Now",
  },
  {
    id: 5,
    image: "/talent.png",
    title: "Little Legends got Talent",
    text: "Retro and modern arcade madness awaits you!",
    btnText: "Game On",
  },
];

function Card({ data, index, setIndex, frontCard, drag }) {
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };

  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 30, opacity: 0.5 },
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100 || info.offset.x > 100) {
      setExitX(info.offset.x > 0 ? 150 : -150);
      setIndex(index + 1);
    }
  };

  return (
    <motion.div
      style={{
        width: 400,
        height: 500,
        position: "absolute",
        top: 0,
        x,
        rotate,
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={drag}
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      variants={frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          scale,
        }}
        className="shadow-lg border-2 bg-red-200"
      >
        <img
          src={data.image}
          alt={data.title}
          draggable={false}
          className="w-full h-56 object-fill rounded"
        />
        <h3 className="text-xl font-raj font-bold">{data.title}</h3>
        <p className="text-sm text-gray-600 text-center">{data.text}</p>
        <button className="px-4 py-1 border-2 bg-black  border-black text-white rounded hover:bg-transparent hover:text-black cursor-pointer transition">
          {data.btnText}
        </button>
      </motion.div>
    </motion.div>
  );
}

export function Example() {
  const [index, setIndex] = useState(0);

  const currentCard = cardsData[index % cardsData.length];
  const nextCard = cardsData[(index + 1) % cardsData.length];

  return (
    <motion.div
      style={{ width: 250, height: 300, position: "relative", margin: "auto" }}
    >
      <AnimatePresence initial={false}>
        <Card key={nextCard.id} data={nextCard} frontCard={false} />
        <Card
          key={currentCard.id}
          data={currentCard}
          frontCard={true}
          index={index}
          setIndex={setIndex}
          drag="x"
        />
      </AnimatePresence>
    </motion.div>
  );
}
