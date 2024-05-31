import React from "react";

const Footer = () => {
  return (
    // <div classNameName="w-full flex flex-wrap border-t-[1px] border-t-zinc-700">
    //   <div classNameName="px-20 mx-auto py-10 flex justify-between items-center gap-40 ">
    //     <div classNameName="basis-2/6 flex gap-4">
    //       <h1 classNameName="text-[8vw] tracking-tight font-semibold leading-none ">
    //         27Streets.in
    //       </h1>
    //     </div>
    //     <div classNameName="basis-1/2 flex gap-4">
    //       <div classNameName="basis-1/3">
    //         <h4 classNameName="mb-10 text-zinc-500 capitalize">Socials</h4>
    //         {["instagram", "facebook", "twitter"].map((item, index) => (
    //           <a
    //             href="#"
    //             classNameName="mt-2 block text-zinc-600 text-sm capitalize "
    //           >
    //             {item}
    //           </a>
    //         ))}
    //       </div>

    //       <div classNameName="basis-1/3">
    //         <h4 classNameName="mb-10 text-zinc-500 capitalize">Quich Links</h4>
    //         {["instagram", "twitter", "linkedin"].map((item, index) => (
    //           <a
    //             key={index}
    //             classNameName="mt-2 block text-zinc-600 text-sm capitalize "
    //           >
    //             {item}
    //           </a>
    //         ))}
    //       </div>

    //       <div classNameName="basis-1/3">
    //         <h4 classNameName="mb-10 text-zinc-500 capitalize">Get in touch</h4>
    //         <div classNameName="mail mb-4">
    //           <h2>Email</h2>
    //           <h4>For Support : support@27street.in</h4>
    //         </div>

    //         <div classNameName="contact ">
    //           <h2>Contact</h2>
    //           <h4>Call us for Support: +91 1010101010</h4>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full flex flex-wrap border-t-[1px] border-t-zinc-700">
      <div className="px-10 md:px-20 mx-auto py-5 md:py-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-40">
        <div className="flex justify-center md:justify-start">
          <h1 className="text-[10vw] md:text-[8vw] tracking-tight font-semibold leading-none">
            27Street.in
          </h1>
        </div>
        <div className="flex flex-col  md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <h4 className="mb-2 md:mb-5 text-zinc-500 capitalize">Socials</h4>
            {["instagram", "facebook", "twitter"].map((item, index) => (
              <a href="#" key={index} className="mt-2 block text-zinc-400 text-sm capitalize">
                {item}
              </a>
            ))}
          </div>

          <div className="w-full md:w-1/3">
            <h4 className="mb-2 md:mb-5 text-zinc-500 capitalize">Quick Links</h4>
            {["Home", "Products", "About", "Reviews"].map((item, index) => (
              <a
                key={index}
                className="mt-2 block text-zinc-400 text-sm capitalize"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="w-full md:w-1/3">
            <h4 className="mb-2 md:mb-5 text-zinc-500 capitalize">Get in touch</h4>
            <div className="mail mb-4 text-zinc-400">
              <h2>Email</h2>
              <h4>For Support: support@27street.in</h4>
            </div>

            <div className="contact text-zinc-400">
              <h2>Contact</h2>
              <h4>Call us for Support: +91 1010101010</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
