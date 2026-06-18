import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="p-8 flex relative h-full w-full snap-start overflow-hidden">
      <span className="absolute top-10 right-50 w-fit h-fit bg-[#1E1E1E] z-10 text-white font-roboto text-sm px-4 py-2 rounded border border-gray-400/60">
        <p>
          <span className="text-[#FF4C4C]">● LIVE</span> : Episode 14 .
          Bengaluru Regionals{" "}
          <span className="text-[#FF4C4C] ml-2">WATCH LIVE</span>
        </p>
      </span>
      <div className="absolute top-0 left-0 w-5/10 h-full gradient z-5"></div>
      <div className="absolute top-0 left-0 w-full h-full z-4 flex">
        <img
          src="/hero.png"
          className="h-full ml-auto object-cover"
          alt="Hero"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-start z-10 text-white font-orbitron space-y-6 p-12 max-w-420 mx-auto">
        <h1 className="text-4xl md:text-[calc(1.3rem+2.8vw)] font-semibold text-balance w-8/10 uppercase">
          INDIA’S ULTIMATE ROBOTICS ARENA
        </h1>
        <p className="text-lg md:text-3xl text-gray-400 text-balance w-5/10 font-roboto">
          Build.Compete.Rank.The National Ecosystem for Robotics Arena
        </p>
        <div className="flex space-x-4 font-roboto mt-0 md:mt-6 font-semibold text-xl">
          <Link
            to="/register"
            className="bg-linear-to-r from-[#FF4C4C] to-[#A52626] text-white px-6 py-3 rounded hover:from-[#d63232] hover:to-[#881f1f] transition-colors duration-200  cursor-pointer"
          >
            CREATE ACCOUNT
          </Link>
          <Link
            to="/"
            className="text-white hover:text-gray-400 px-6 py-3 rounded border border-white hover:border-gray-400"
          >
            EXPLORE EVENTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
