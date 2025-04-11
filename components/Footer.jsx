import React from "react";
import { Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="md:flex md:h-10/12 justify-center mt-8  text-white">
      <div className="md:h-[55vh] md:mt-12 bg-[#1a1a1d] pt-5 md:w-9/12 w-full md:rounded-t-3xl">
        <div className="md:mt-10 my-4 flex justify-around">
          <div className=" hover:cursor-pointer">
            <img src="../src/assets/logo.svg" />
          </div>
          <div className="md:w-4/12 w-6/12">
            <ul className="flex justify-evenly ">
              <li className="bg-white rounded-full p-2 hover:cursor-pointer">
                <Facebook className="text-black" />
              </li>
              <li className="bg-white rounded-full p-2 hover:cursor-pointer">
                <Instagram className="text-black" />
              </li>
              <li className="bg-white rounded-full p-2 hover:cursor-pointer">
                <Youtube className="text-black" />
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex justify-around items-center md:h-2/5 md:mt-8">
          <div className="md:w-2/6 md:h-[28vh] md:flex flex-col items-start justify-evenly mb-4 ml-2">
            <h1 className="bg-white inline-block text-black rounded-full px-4 md:py-1 mt-2 text-xl">
              Contact us:
            </h1>
            <p>Email:info@playarena.in</p>
            <p>Phone: 99000 999 22</p>
            <p>
              Address: Sy#75, Hosa Road, off Sarjapur Road, opp Silverwood
              Regency Apartments, Kasavanahalli, Bangalore 560035
            </p>
          </div>
          <div className="md:h-[24vh] md:w-3/6 rounded-2xl flex justify-around items-center mb-4">
            <ul>
              <span className="text-lg font-bold">PLaY</span>
              <li>Prime</li>
              <li>Pixel</li>
              <li>Studio</li>
              <li>Union</li>
              <li>Junior</li>
            </ul>
            <ul>
              <li className="text-lg font-bold cursor-pointer">Events</li>
              <li className="text-lg font-bold cursor-pointer">Host</li>
              <li className="text-lg font-bold cursor-pointer">
                Food & Beverages
              </li>
            </ul>
          </div>
        </div>
        <hr className="md:w-11/12 mx-auto md:mt-10 mb-4" />
        <div className="md:h-1/6 md:flex items-end text-xl ml-2">
          <p className="md:ml-10">© 2024 PLaY-arena All Rights Reserved.</p>
          <p className="md:ml-10">Privacy Policy</p>
          <p className="md:ml-10 decoration-solid">Credits</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
