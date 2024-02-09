import React, { useState } from "react";

import line from "../assets/landingPage/line.svg";
import see_More from "../assets/landingPage/seeMore.svg";
import see_Less from "../assets/landingPage/seeLess.svg";
const FAQ = () => {
  const [faqVisibility, setFaqVisibility] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
  });

  const toggleFaqVisibility = (faqKey) => {
    setFaqVisibility((prevState) => ({
      ...prevState,
      [faqKey]: !prevState[faqKey],
    }));
  };

  return (
    <>
      <section className="text-center">
        <div className="my-12">
          {" "}
          <h2>Frequently Asked Question</h2>
          <img className="m-auto" src={line} alt="line" />{" "}
        </div>
        <div
          onClick={() => toggleFaqVisibility("faq1")}
          className="border-b-2 py-8"
        >
          <div className="flex justify-between ">
            <h3 className="text-base font-bold text-left mb-4 ">
              What makes this investment app ideal for young Nigerians?
            </h3>
            {faqVisibility.faq1 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq1 ? "" : "hidden"}`}>
            Our app is designed for simplicity and relevance, providing
            user-friendly features and diverse investment options suited to the
            dynamic preferences of young Nigerians.
          </p>
        </div>
        <div className=" border-b-2 py-8">
          <div
            onClick={() => toggleFaqVisibility("faq2")}
            className="flex justify-between"
          >
            <h3 className="text-base font-bold text-left">
              Can I customize my investment portfolio?
            </h3>
            {faqVisibility.faq2 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq2 ? "" : "hidden"}`}>
            Our app is designed for simplicity and relevance, providing
            user-friendly features and diverse investment options suited to the
            dynamic preferences of young Nigerians.
          </p>
        </div>
        <div className=" border-b-2 py-8">
          <div
            onClick={() => toggleFaqVisibility("faq3")}
            className="flex justify-between "
          >
            <h3 className="text-base font-bold text-left">
              Are there low-risk investment options for beginners?
            </h3>
            {faqVisibility.faq3 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq3 ? "" : "hidden"}`}>
            Our app is designed for simplicity and relevance, providing
            user-friendly features and diverse investment options suited to the
            dynamic preferences of young Nigerians.
          </p>
        </div>
        <div className=" border-b-2 py-8">
          <div
            onClick={() => toggleFaqVisibility("faq4")}
            className="flex justify-between "
          >
            <h3 className="text-base font-bold text-left">
              Are there any hidden fees?s
            </h3>
            {faqVisibility.faq4 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq4 ? "" : "hidden"}`}>
            Our app is designed for simplicity and relevance, providing
            user-friendly features and diverse investment options suited to the
            dynamic preferences of young Nigerians.
          </p>
        </div>
      </section>
    </>
  );
};

export default FAQ;
