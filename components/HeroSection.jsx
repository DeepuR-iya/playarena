import { motion } from "framer-motion";
import bgGif from "/hero.gif";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute  inset-0 z-0">
        <img
          src={bgGif}
          alt="Background Animation"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="h-full w-full flex items-center justify-center">
        <div className="h-content sm:w-[50vw] w-[80vw] bg-white  z-10 flex flex-col items-center justify-center text-center text-black p-4 rounded-sm">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="text-4xl md:text-6xl font-raj font-bold mb-4 drop-shadow-lg"
          >
            Welcome to PlayArena
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg md:text-xl z-10 max-w-2xl font-normal mb-6 text-black"
          >
            Play Arena is the ultimate gaming and adventure destination where
            thrill meets fun! Dive into action with snooker, bowling,
            trampoline, laser tag, go-karting, and a world of heart-pumping
            experiences — all under one roof. Get ready to play, compete, and
            make memories that last!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, cursor: "pointer" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1a1a1d] z-10 font-raj font-semibold text-lg hover:bg-[#1F1717] text-white px-4 py-2 rounded-md shadow-lg transition"
          >
            Play, Your Way
          </motion.button>
        </div>
      </div>
    </div>
  );
}
