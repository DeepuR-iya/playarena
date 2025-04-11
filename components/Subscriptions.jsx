import React from "react";
import { ChevronRight } from "lucide-react";

const FeatureBlock = () => {
  const data = [
    {
      id: "01",
      title: "Prime",
      description: "Strategy and action sports for the squad",
      videoSrc: "/prime.mp4",
      img: "/prime.png",
      color: "bg-[#FFB7B7]",
      Activities: 5,
      headtext: "text-white",
    },
    {
      id: "02",
      title: "Studio",
      description: "Short format, big thrills served a la carte",
      videoSrc: "/studio.mp4",
      img: "studio.png",
      color: "bg-[#EDFFB3]",
      Activities: 8,
      headtext: "text-[#1a1a1d]",
    },
    {
      id: "03",
      title: "Union",
      description: "Classic favourites for the recreational sport",
      videoSrc: "/union.mp4",
      img: "/union.png",
      color: "bg-[#98D8EF]",
      Activities: 7,
      headtext: "text-white",
    },
    {
      id: "04",
      title: "Junior",
      description: "Toddler-sized fun for little champs",
      videoSrc: "/junior.mp4",
      img: "junior.png",
      color: "bg-[#FFD89C]",
      Activities: 2,
      headtext: "text-[#1a1a1d]",
    },
    {
      id: "05",
      title: "Pixel",
      description: "Shoot, race and more in the gamer’s den",
      videoSrc: "/pixel.mp4",
      img: "/pixel.png",
      color: "bg-[#D4BEE4]",
      Activities: 9,
      headtext: "text-white",
    },
  ];
  return (
    <>
      {data.map((e) => (
        <div
          className={`flex flex-col lg:flex-row items-center sm:justify-center gap-10 px-6 py-10 
            ${e.color} ${console.log(e.color)}`}
          key={e.id}
        >
          <div className=" md:w-3/7 w-full flex flex-col gap-4   sm:items-start items-center">
            <div className="flex flex-row items-center gap-4  w-full">
              <div
                className={`sm:text-8xl text-5xl font-raj font-extrabold ${e.headtext} mx-4`}
              >
                {e.id}
              </div>
              <div>
                <span className="text-3xl font-raj flex gap-2 font-bold text-black mb-2">
                  <img src={e.img} className="h-8" />
                  {e.title}
                </span>
                <p className="text-gray-600 text-lg">{e.description}</p>
              </div>
            </div>
            <button className="w-44 rounded-md sm:ml-15 font-raj h-12 bg-[#1a1a1d] text-white cursor-pointer flex justify-center items-center">
              View All {e.Activities} Activities <ChevronRight />
            </button>
          </div>

          <div className="w-full lg:w-2/7">
            <video
              className="w-full h-auto rounded-xl shadow-lg"
              muted
              loop
              controls
              playsInline
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              src={e.videoSrc}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureBlock;
