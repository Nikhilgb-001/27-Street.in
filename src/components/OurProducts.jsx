import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarFixed from "./StarFixed";

const OurProducts = () => {
  // {
  //   name: "Usb C Magnetic Charging Cable Fast Charge 1.5m 100w",
  //   img: "https://s.alicdn.com/@sc04/kf/H2cdeb3f71eae4ba8b6c24dbeb46c05391.jpg",
  //   desc: "Usb C Magnetic Charging Cable Fast Charge 1.5m 100w Magnetic Absorption Data Usb C To Type C Magnet Usb Cable Fast Charging Cord",
  //   category: "Electronics",
  //   disprice: "₹1900",
  //   price: "₹1000",
  //   ratings: "4.5",
  // },

  const ProductsData = [
    {
      name: "Usb C Magnetic Charging Cable Fast Charge 1.5m 100w Magnetic Absorption",
      img: "https://s.alicdn.com/@sc04/kf/H2cdeb3f71eae4ba8b6c24dbeb46c05391.jpg",
      desc: "Usb C Magnetic Charging Cable Fast Charge 1.5m 100w Magnetic Absorption Data Usb C To Type C Magnet Usb Cable Fast Charging Cord",
      category: "Electronics",
      disprice: "₹1900",
      price: "₹1000",
      ratings: "4.5",
    },

    {
      name: "Solar System Saturn Moon Cloud Luminous Crystal Ball Desktop And Room",
      img: "https://s.alicdn.com/@sc04/kf/H63be3f78e1f845cabe376b77637a907bx.jpg",
      desc: "Solar System Saturn Moon Cloud Luminous Crystal Ball Desktop Decorations Home Decorations Ornaments Gifts LED Electric Small EMC.",
      category: "Electronics",
      disprice: "₹1900",
      price: "₹1000",
      ratings: "3.5",
    },

    {
      name: "Zogifts Decorative Mechanism Giant Auto Desk Table Alarm Clock",
      img: "https://s.alicdn.com/@sc04/kf/HTB1nSDLaHZnBKNjSZFKq6AGOVXaX.jpg",
      desc: "Zogifts Decorative Mechanism Giant Auto Desk Table Alarm Clock Automatic Flip Calendar Custom Retro With Sound Control Led Night",
      category: "Electronics",
      disprice: "₹1900",
      price: "₹1000",
      ratings: "4.5",
    },

    {
      name: "Wireless offical usb gaming back light remote control halo screenbar",
      img: "https://s.alicdn.com/@sc04/kf/H9c0092ab9d31477f84dfee1ed28ab098F.jpg",
      desc: "Wireless offical usb gaming back light remote control halo screenbar lamp pc computer led on monitor light bar for desktop room.",
      category: "Electronics",
      disprice: "₹1900",
      price: "₹1000",
      ratings: "3.5",
    },

    {
      name: "Mini 20000mah Fast Charging with 4 Cables Wireless Power Bank",
      img: "https://s.alicdn.com/@sc04/kf/Ha1fa08c2aea54bb3b08b9b6d401d53db7.jpg",
      desc: "Mini 20000mah Fast Charging with 4 Cables Wireless Power Bank Universal Gift LED Magnetic Mobile Power for IPhone Samsung Xiaomi",
      category: "Electronics",
      disprice: "₹1900",
      price: "₹1000",
      ratings: "4",
    },

    {
      name: "20000mah power bank pd 22.5w fast charger with outdoor portable",
      img: "https://s.alicdn.com/@sc04/kf/H7675e9fb5152449182d7ea1cece06bfbE.jpg",
      desc: "2023 New products 20000mah power bank pd 22.5w fast charger with outdoor portable",
      category: "Electronics",
      disprice: "₹1900",
      price: "₹1000",
      ratings: "5",
    },

    {
      name: "Tabkiddy 3 in 1 Wireless Charging Station",
      img: "https://s.alicdn.com/@sc04/kf/He21b2ee2fb7e4372bce77c7b6d0761b1r.jpg",
      desc: "Tabkiddy 3 in 1 Wireless Charging Station, Fast Wireless Charger Stand for iPhone 15/14/13 for Apple Watch for AirPods 3/2/Pro",
      category: "Electronics",
      disprice: "₹1900",
      price: "₹1000",
      ratings: "5",
    },

    {
      name: "5000mAh Power Bank Mini Super Magnet Battery Pack ",
      img: "https://s.alicdn.com/@sc04/kf/Ha1f1845745cc4d9d9661b23be39bc73bH.png",
      desc: "Trending Products 5000mAh Power Bank Mini Super Magnet Battery Pack 10000mAh Portable 15W PD22.5W Wireless Charger With LCD",
      category: "Electronics",
      disprice: "₹1900",
      price: "₹1000",
      ratings: "5",
    },

    {
      name: "Fast Charging Mobile wireless charger 10000mah",
      img: "https://s.alicdn.com/@sc04/kf/H8753d408dbe749b8af4425df3a6c1ac65.jpg",
      desc: "Wholesale Fast Charging Mobile wireless charger 10000mah universal portable power bank 10000 mah wireless powerbank",
      category: "Electronics",
      disprice: "₹1900",
      price: "₹1000",
      ratings: "5",
    },

    {
      name: "15W QC3.0 car-shaped 5in1 wireless charger",
      img: "https://s.alicdn.com/@sc04/kf/Hd9fac5bd2b514b7b95af012398d10a8eq.jpg",
      desc: "15W QC3.0 car-shaped 5in1 wireless charger desktop ornament for mobile phone earphones and watch",
      category: "Electronics",
      disprice: "₹1900",
      price: "₹1000",
      ratings: "5",
    },
  ];

  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleViewMore = () => {
    setVisibleProducts(ProductsData.length);
  };

  return (
    <div className="w-full px-1.5 lg:px-14 py-20 mx-auto" id="ourProducts">
      <h1 className="text-4xl text-center font-semibold">Our Products</h1>
      <div className="cards flex flex-wrap p-0 justify-start mt-16 md:flex md:flex-wrap gap-2 items-center md:justify-center lg:gap-10">
        {ProductsData.slice(0, visibleProducts).map((p, index) => (
          <div
            key={index}
            className="card w-44 mb-8 lg:mb-10 h-fit rounded-lg bg-white text-zinc-900 shadow-lg lg:w-72"
          >
            <div className="image w-full h-44 rounded-t-lg overflow-hidden lg:h-72">
              <img
                src={p.img}
                alt=""
                className="w-full h-full object-cover hover:scale-110 duration-300 ease-in-out"
              />
            </div>

            <div className="card-content mt-2 p-2 flex flex-col gap-2">
              <h1 className="text-l">{p.name}</h1>
              <p className="text-ellipsis whitespace-nowrap overflow-hidden">
                {p.desc}
              </p>
              <div className="ratings flex items-center">
                <p className="-mr-[5px]">{p.ratings}</p>
                <p>
                  <StarFixed />
                </p>
              </div>
              <div className="pricing flex gap-2">
                <h5 className="line-through text-zinc-600">{p.disprice}</h5>
                <h5>{p.price}</h5>
              </div>
              <button className="w-full bg-orange-500 text-white py-2 uppercase rounded">
                Add to cart
              </button>
            </div>
          </div>
        ))}
        {visibleProducts < ProductsData.length && (
          <button
            className="w-40 bg-orange-500 mx-auto text-white py-2 px-9 capitalize rounded"
            onClick={handleViewMore}
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default OurProducts;
