import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgProfile } from "react-icons/cg";
const Reviews = () => {
  const data = [
    {
      name: "Jhon",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus magni magnam esse ipsam reprehenderit dolorem odio, autem doloremque alias. Dolorum suscipit modi harum maxime, quaerat blanditiis quas ea neque. Provident, dolore aspernatur?",
    },

    {
      name: "Jane",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus magni magnam esse ipsam reprehenderit dolorem odio, autem doloremque alias. Dolorum suscipit modi harum maxime, quaerat blanditiis quas ea neque. Provident, dolore aspernatur?",
    },

    {
      name: "Jag",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus magni magnam esse ipsam reprehenderit dolorem odio, autem doloremque alias. Dolorum suscipit modi harum maxime, quaerat blanditiis quas ea neque. Provident, dolore aspernatur?",
    },

    {
      name: "Lilly",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus magni magnam esse ipsam reprehenderit dolorem odio, autem doloremque alias. Dolorum suscipit modi harum maxime, quaerat blanditiis quas ea neque. Provident, dolore aspernatur?",
    },

    {
      name: "Cherry",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus magni magnam esse ipsam reprehenderit dolorem odio, autem doloremque alias. Dolorum suscipit modi harum maxime, quaerat blanditiis quas ea neque. Provident, dolore aspernatur?",
    },

    {
      name: "Dal",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus magni magnam esse ipsam reprehenderit dolorem odio, autem doloremque alias. Dolorum suscipit modi harum maxime, quaerat blanditiis quas ea neque. Provident, dolore aspernatur?",
    },

    {
      name: "kimmy",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus magni magnam esse ipsam reprehenderit dolorem odio, autem doloremque alias. Dolorum suscipit modi harum maxime, quaerat blanditiis quas ea neque. Provident, dolore aspernatur?",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className="w-full px-7 py-10 mx-auto lg:w-3/4" id="reviews">
      <h1 className="text-3xl font-semibold text-center lg:text-4xl">Customer Reviews</h1>
      <div className="mt-16">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white shadow-lg border-2 h-fit text-black rounded-xl">
              {/* <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={d.image} alt="" className="h-44 w-44 rounded-full" />
              </div> */}

              <div className="h-12 w-12 rounded-full m-auto my-1 mt-2 flex justify-center items-center">
                <CgProfile className="w-full mt-2 h-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
