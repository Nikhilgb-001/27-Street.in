import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarFixed from "./StarFixed";
const Products = () => {
  const ProductsData = [
    {
      name: "Usb C Magnetic Charging Cable Fast Charge 1.5m 100w ",
      img: "https://s.alicdn.com/@sc04/kf/H2cdeb3f71eae4ba8b6c24dbeb46c05391.jpg",
      desc: "Usb C Magnetic Charging Cable Fast Charge 1.5m 100w Magnetic Absorption Data Usb C To Type C Magnet Usb Cable Fast Charging Cord",
      category: "Electronics",
      disprice: "₹1900",
      price: "₹1000",
      ratings: "4.5",
    },

    {
      name: "Solar System Saturn Moon Cloud Luminous Crystal Ball  ",
      img: "https://s.alicdn.com/@sc04/kf/H63be3f78e1f845cabe376b77637a907bx.jpg",
      desc: "Solar System Saturn Moon Cloud Luminous Crystal Ball Desktop Decorations Home Decorations Ornaments Gifts LED Electric Small EMC.",
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
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="w-full bg-[#E6E6E6] mt-12 shadow-lg px-8  py-10 mx-auto lg:w-5/4 lg:px-28"
      id="products"
    >
      <h1 className="text-4xl font-semibold text-center">Best Sellers</h1>
      <div className="mt-16 ">
        <Slider {...settings}>
          {ProductsData.map((p, index) => (
            <div className="w-full h-fit rounded-lg bg-white text-zinc-900">
              <div className="image w-full h-fit rounded-t-lg overflow-hidden">
                <img
                  src={p.img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 duration-300 ease-in-out"
                />

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
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
