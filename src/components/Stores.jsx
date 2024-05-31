import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
const Stores = () => {
  const iconsData = [
    {
      image: <FaAmazon />,
      href: "https://www.amazon.in/",
      colo: "#FF9900",
    },

    {
      image: <SiFlipkart />,
      href: "https://www.flipkart.in/",
      colo: "2874F0",
    },

    {
      image: <FaMeta />,
      href: "https://www.facebook.com/",
      color: "#1877F2",
    },

    {
      image: <FaInstagram />,
      href: "https://www.instagram.com/",
      color: "#C13584",
    },
  ];
  const paymentData = [
    {
      img: "",
    },
  ];
  return (
    <div className="text-center relative md:w-full h-1/2 px-5 py-8">
      <h1 className="text:2xl md:text-3xl font-semibold flex justify-center items-center">
        For exclusive content and updates, follow us on our social platforms.
      </h1>
      <div className=" w-full h-fit flex gap-10 mt-10 justify-center items-center">
        {iconsData.map((item, index) => (
          <a
            className={`bg-transparent border-2 px-3 py-3 rounded-full`}
            href={item.href}
            key={index}
          >
            {item.image}
          </a>
        ))}
      </div>
      <div className="p-2 gap-10 md:h-fit items-center flex-wrap flex justify-center md: py-10 md:gap-14">
        <div className="text text:2xl md:text-3xl">
          <h3 className="tracking-wide font-semibold">
            We accept all major credit cards and UPI
          </h3>
        </div>
        <img
          className="w-fit sm:h-fit md:w-1/2 h-1/2"
          src="/src/assets/images/payment_new-01.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Stores;
