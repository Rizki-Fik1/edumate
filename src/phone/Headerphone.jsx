import React from "react";
import "../AddItem.css";

export default function Headerphone() {
  const descOne = `
  Our support team is available around the clock to address any concerns or queries you may have`;

  const descTwo = `
  We value your feedback and are continuously working to improve Edumate. Your input is crucial in shaping
  the future of Edumate`;

  const descThree = `
  For media-related questions or press inquiries, please contact us at media@edumateofc`;

  return (
    <div className="mt-10 md:px-20 px-5">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* LEFT DIV */}
        <div className="lg:w-1/2 w-full">
          {/* Top Element */}
          <div className="flex flex-col">
            <p className="montserrat text-4xl md:text-5xl text-white font-semibold mb-7">
              Contact Us
            </p>

            <p className="montserrat text-base md:text-lg text-white font-light md:pr-60 mb-7">
              Email, Call, or complete to learn how Edumate can solve your messaging problem
            </p>

            <p className="montserrat text-base md:text-lg text-white font-light mb-7">
              <a href="#">edumateofc@gmail.com</a>
            </p>

            <p className="montserrat text-base md:text-lg text-white font-light mb-7">
              0812-3456-7890
            </p>

            <p className="montserrat text-base md:text-lg text-white font-semibold underline">
              Terms Service
            </p>
          </div>

          {/* Bottom Element */}
          <div className="flex flex-col md:flex-row gap-y-7 md:gap-x-7 mt-12 md:pr-10">
            <div className="flex flex-col w-full md:w-1/3">
              <p className="montserrat text-base md:text-lg text-white font-semibold mb-2">
                User Support
              </p>
              <p className="montserrat text-sm text-white font-light text-left">
                {descOne}
              </p>
            </div>

            <div className="flex flex-col w-full md:w-1/3">
              <p className="montserrat text-base md:text-lg text-white font-semibold mb-2">
                Feedback and Suggestions
              </p>
              <p className="montserrat text-sm text-white font-light text-left">
                {descTwo}
              </p>
            </div>

            <div className="flex flex-col w-full md:w-1/3">
              <p className="montserrat text-base md:text-lg text-white font-semibold mb-2">
                Media Inquiries
              </p>
              <p className="montserrat text-sm text-white font-light text-left">
                {descThree}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT DIV */}
        <div className="lg:w-1/2 w-full flex justify-center items-center mt-10 lg:mt-0">
          <div className="bg-white w-full h-auto md:h-[70vh] rounded-2xl px-5 md:px-10 py-5">
            <p className="montserrat text-2xl md:text-3xl text-black font-semibold mb-2">
              Get in Touch
            </p>
            <p className="montserrat text-base md:text-lg text-black font-normal">
              You can reach Us anytime
            </p>

            <form className="mt-8 space-y-5">
              <div className="flex flex-col md:flex-row justify-between gap-5">
                <input
                  type="text"
                  placeholder="First name"
                  id="first_name"
                  className="w-full md:w-1/2 border border-gray-500 rounded-3xl px-4 py-2 text-base md:text-xl outline-none placeholder:font-semibold"
                />

                <input
                  type="text"
                  placeholder="Last name"
                  id="last_name"
                  className="w-full md:w-1/2 border border-gray-500 rounded-3xl px-4 py-2 text-base md:text-xl outline-none placeholder:font-semibold"
                />
              </div>

              <input
                type="email"
                placeholder="Enter Your Email"
                id="email"
                className="w-full border border-gray-500 rounded-3xl px-4 py-2 text-base md:text-xl outline-none placeholder:font-semibold"
              />

              <input
                type="number"
                placeholder="Enter Your Phone Number"
                id="number"
                className="w-full border border-gray-500 rounded-3xl px-4 py-2 text-base md:text-xl outline-none placeholder:font-semibold"
              />

              <div className="">
                <textarea
                  id="description"
                  placeholder="How I can help?"
                  className="w-full border border-gray-500 rounded-3xl px-4 py-2 text-base md:text-xl outline-none placeholder:font-semibold"
                  style={{ maxHeight: "200px", overflowY: "auto" }}
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white text-xl font-semibold py-3 rounded-3xl hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}