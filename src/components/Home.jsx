import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="w-full h-full bg-black text-white flex justify-between items-center flex-col-reverse md:flex-row">
      <div className="w-full h-1/2 flex justify-center items-center md:w-1/2">
        <div className="text  text-center md:w-full py-12">
          <h1 className="text-3xl font-['Mochiy_Pop_One'] md:text-4xl mb-5 uppercase leading-relaxed tracking-wide font-semibold">
            Find digital accessories that are one-of-a-kind.
          </h1>
          <h2 className="text-2xl leading-relaxed ">
            Explore the coolest gadgets at 27street.in!
          </h2>
        </div>
      </div>
      <div className="w-full h-1/2 flex justify-center items-center lg:w-1/2 lg:h-full p-20 ">
        {/* <img
          className="w-1/2 h-fit object-cover mt-12 md:w-full"
          src="/src/assets/images/enlarge_main-logo-enhanced1.png"
          alt=""
        /> */}

        <video
          className="w-full h-full object-cover md:w-full"
          src="/src/assets/videos/Your paragraph text (1080 x 1350 px).mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Home;
