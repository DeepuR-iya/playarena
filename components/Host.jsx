import React from "react";
import { Cake } from "lucide-react";

const Host = () => {
  return (
    <div>
      <div className="flex flex-col  h-full gap-2">
        <div className="col-span-2 row-span-6">
          <div className="flex items-center justify-center h-full gap-4">
            <h1 className="text-4xl font-semibold font-raj flex items-center gap-2">
              {" "}
              <Cake className="h-16 w-16" />
              Birthday Bashes
            </h1>
            <img
              src="../src/assets/birth.jpg"
              className="h-[30vh] w-[56] rounded-md"
            />
            <p className="text-lg text-gray-600 text-center">
              Thrilling activities, exciting games, and delicious food— <br />
              our custom packages ensure unforgettable experiences for all ages!
            </p>
            <button>Findout More </button>
          </div>
        </div>
        <div className="  bg-red-100">
          <h1 className="text-4xl font-semibold font-raj">Birthday Bashes</h1>
          <div className="flex  items-center justify-center h-full gap-4">
            <img
              src="../src/assets/date.jpg"
              className="h-[30vh] w-[56] rounded-md"
            />
            <p className="text-lg text-gray-600 text-center">
              Thrilling activities, exciting games, and delicious food—our
              custom packages ensure unforgettable experiences for all ages!
            </p>
            <button>Findout More </button>
          </div>
        </div>
        <div className=" bg-red-100">4</div>
      </div>
    </div>
  );
};

export default Host;
