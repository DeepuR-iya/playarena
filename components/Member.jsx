import React from "react";
import {
  Cake,
  BriefcaseBusiness,
  Gem,
  Heart,
  UtensilsCrossed,
  TicketPercent,
} from "lucide-react";
import { button, desc } from "framer-motion/client";

const Member = () => {
  const data = [
    {
      id: 1,
      icon: <Cake />,
      title: "BIRTHDAY BASHES",
      description:
        "Thrilling activities, exciting games, and delicious food—our custom packages ensure unforgettable experiences for all ages!",
      button: "Find out more!",
      color: "bg-[#FFB7B7]",
    },
    {
      id: 2,
      icon: <BriefcaseBusiness />,
      title: "Corporate Events",
      description:
        "Nothing like a game to get the teamwork going. Talk to us to find out more about our corporate packages for offsites, team building activities, leadership meets, outbound learning and more.",
      button: "Find out more!",
      color: "bg-[#EDFFB3]",
    },
    {
      id: 3,
      icon: <Heart />,
      title: "WONDERFUL DATES",
      description:
        "Experience Play Dates, any day of the week, enjoy this special offer and quality time with your partner. Perfect for fun and connection!",
      button: "Find out more!",
      color: "bg-[#98D8EF]",
    },
    {
      id: 4,
      icon: <Gem />,
      title: "SKIP THE QUEUE",
      description: "No ticketing. Just load your card and go play.",
      button: "Become a Member!",
      color: "bg-[#FFD89C]",
    },
    {
      id: 5,
      icon: <UtensilsCrossed />,
      title: "TREATS ON US",
      description: "Get exclusive offers across our F&B outlets",
      button: "Become a Member!",
      color: "bg-[#D4BEE4]",
    },
    {
      id: 6,
      icon: <TicketPercent />,
      title: "BIG DISCOUNTS",
      description: "The more you load the bigger your discounts",
      button: "Become a Member!",
      color: "bg-[#BDE8CA]",
    },
  ];
  return (
    <div className="h-full w-full md:flex my-5">
      <div className="md:w-1/4  flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold font-raj">Play it Cool</h2>
        <p className="text-lg text-gray-800">
          Our Speciality and Royal Programme
        </p>
        <button className="px-2 py-1 border-2 border-black mt-5 rounded-md hover:bg-black hover:text-white cursor-pointer">
          Become a Member
        </button>
      </div>
      <div className=" w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
        {data.map((e) => (
          <div key={e.id} className={`${e.color} p-4 rounded-md`}>
            <div className="flex items-center gap-2 mb-4">
              {e.icon}
              <h2 className="text-xl font-semibold font-raj">{e.title}</h2>
            </div>
            <p className="text-sm text-gray-500">{e.description}</p>
            <button className="w-content px-2 py-1 font-semibold font-raj mt-5 cursor-pointer rounded-md h-12 border-b-2">
              {e.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
