import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "/logo.svg";

const navItems = [
  {
    label: "Play",
    type: "image",
    dropdown: [
      { title: "Prime", img: "../src/assets/prime.png" },
      { title: "Studio", img: "../src/assets/studio.png" },
      { title: "Union", img: "../src/assets/union.png" },
      { title: "Junior", img: "../src/assets/junior.png" },
      { title: "Pixel", img: "../src/assets/pixel.png" },
    ],
  },
  {
    label: "Participate",
    type: "simple",
    dropdown: ["Learn & Master", "Updates", "Team"],
  },
  {
    label: "Host",
    type: "grid",
    dropdown: [
      {
        title: "Birthdays at PLaY",
        desc: "Celebrate Memorable Birthdays Here!",
      },
      {
        title: "Corporate events at PLaY",
        desc: "Dynamic events and experiences",
      },
      {
        title: "Perfect Dates at PLaY",
        desc: "Connecting with or without a reason to celebrate",
      },
    ],
  },
  {
    label: "F&B",
    type: "simple",
    dropdown: ["Food Court", "Restaurant"],
  },
  {
    label: "AboutUs",
    type: "simple",
    dropdown: ["Email", "Support", "Location"],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const renderDropdown = (item) => {
    switch (item.type) {
      case "simple":
        return item.dropdown.map((dropItem, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, duration: 0.8 }}
            className="cursor-pointer px-2 py-1  rounded hover:bg-slate-200 transition"
          >
            {dropItem}
          </motion.div>
        ));
      case "grid":
        return (
          <div className="grid grid-cols-1 gap-2">
            {item.dropdown.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, cursor: "pointer" }}
                className="p-2 rounded-md hover:bg-slate-200 transition"
              >
                <p className="font-semibold">{service.title}</p>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        );
      case "image":
        return (
          <div className="flex flex-col gap-2">
            {item.dropdown.map((work, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, cursor: "pointer" }}
                className="flex items-center gap-3 p-2 hover:bg-slate-200 rounded"
              >
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <span>{work.title}</span>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative flex justify-center">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="fixed top-2.5 z-50 w-[90%] md:w-[90%] lg:w-[70%] rounded-2xl bg-[#1a1a1d] backdrop-blur-md shadow-xl border border-white/30 px-6 py-3"
      >
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            <img src={Logo} alt="playarena logo" className="md:h-10 h-8" />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div className="hidden md:flex gap-6 text-white relative font">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setOpenIndex(idx)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <div className="flex items-center font-raj font-normal gap-1 cursor-pointer transition hover:text-yellow-300">
                  {item.label}
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-full left-0 bg-white text-black rounded-xl shadow-md mt-2 p-3 w-64 z-50"
                    >
                      {renderDropdown(item)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4 text-white mt-4 md:hidden"
            >
              {navItems.map((item, idx) => (
                <div key={idx} className="border-t border-white/20 pt-2 ">
                  <div
                    className="flex justify-between font-raj items-center cursor-pointer"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span>{item.label}</span>
                    <motion.div
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white text-black mt-2 rounded p-2 space-y-2"
                      >
                        {renderDropdown(item)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
