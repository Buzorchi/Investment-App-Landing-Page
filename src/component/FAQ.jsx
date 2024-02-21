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
    faq5: false,
    faq6: false,
    faq7: false,
    faq8: false,
    faq9: false,
    faq10: false,
  });

  const toggleFaqVisibility = (faqKey) => {
    setFaqVisibility((prevState) => ({
      ...prevState,
      [faqKey]: !prevState[faqKey],
    }));
  };

  return (
    <>
      <section className="text-center" id="faq">
        <div className="py-20">
          {" "}
          <h2>Frequently Asked Question</h2>
          <img className="m-auto" src={line} alt="line" />{" "}
        </div>
        <div
          onClick={() => toggleFaqVisibility("faq1")}
          className="border-b-2 py-8"
        >
          <div className="flex justify-between ">
            <h3 className="mb-4 text-left text-base font-bold  ">
              What is Raiser by ALAT ?
            </h3>
            {faqVisibility.faq1 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq1 ? "" : "hidden"}`}>
            Raiser by ALAT is a digital product that allows users to invest in
            pre-vetted, low-medium risk, primary and secondary investment
            opportunities.
          </p>
        </div>
        <div className=" border-b-2 py-8">
          <div
            onClick={() => toggleFaqVisibility("faq2")}
            className="flex justify-between"
          >
            <h3 className="text-left text-base font-bold">
              What is the minimum amount I can invest with?
            </h3>
            {faqVisibility.faq2 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq2 ? "" : "hidden"}`}>
            The minimum amount for investments vary by investment opportunities.
          </p>
        </div>
        <div className=" border-b-2 py-8">
          <div
            onClick={() => toggleFaqVisibility("faq3")}
            className="flex justify-between "
          >
            <h3 className="text-left text-base font-bold">
              What is the insurance coverage on the investment?
            </h3>
            {faqVisibility.faq3 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq3 ? "" : "hidden"}`}>
            Insurance coverage varies by investment opportunities.
          </p>
        </div>
        <div className=" border-b-2 py-8">
          <div
            onClick={() => toggleFaqVisibility("faq4")}
            className="flex justify-between "
          >
            <h3 className="text-left text-base font-bold">
              How can I fund my investment?
            </h3>
            {faqVisibility.faq4 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq4 ? "" : "hidden"}`}>
            You can fund your investment using your debit card and Raiser Flexi
            wallet.
          </p>
        </div>
        <div className=" border-b-2 py-8">
          <div
            onClick={() => toggleFaqVisibility("faq5")}
            className="flex justify-between "
          >
            <h3 className="text-left text-base font-bold">
              How safe is my money?
            </h3>
            {faqVisibility.faq5 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq5 ? "" : "hidden"}`}>
            All investment opportunities listed on Raiser by ALAT are pre-vetted
            for maximum safety.
          </p>
        </div>
        <div className=" border-b-2 py-8">
          <div
            onClick={() => toggleFaqVisibility("faq6")}
            className="flex justify-between "
          >
            <h3 className="text-left text-base font-bold">
              How is my interest paid?
            </h3>
            {faqVisibility.faq6 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq6 ? "" : "hidden"}`}>
            It varies on the opportunity you're choosing to invest in. Your
            interest could be paid daily, monthly, quartely or at the end of the
            investment period into your Raiser Flexi wallet.
          </p>
        </div>
        <div className=" border-b-2 py-8">
          <div
            onClick={() => toggleFaqVisibility("faq7")}
            className="flex justify-between "
          >
            <h3 className="text-left text-base font-bold">
              Is the investment taxed?
            </h3>
            {faqVisibility.faq7 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq7 ? "" : "hidden"}`}>
            We don't handle taxation. You, however, are liable to disclose your
            earnings and pay your taxes as stipulated by the government.
          </p>
        </div>
        <div className=" border-b-2 py-8">
          <div
            onClick={() => toggleFaqVisibility("faq8")}
            className="flex justify-between "
          >
            <h3 className="text-left text-base font-bold">
              What is Raiser Vault Wallet?
            </h3>
            {faqVisibility.faq8 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq8 ? "" : "hidden"}`}>
            The Raiser Vault wallet ia a fixed, targeted savings wallet. The
            Raiser Flexi wallet can be funded with funds from the Raiser Vault
            wallet. Withdrawals can only be done once the target period is over.
            Any withdrawal other than that attracts a breaking fee.
          </p>
        </div>
        <div className=" border-b-2 py-8">
          <div
            onClick={() => toggleFaqVisibility("faq9")}
            className="flex justify-between "
          >
            <h3 className="text-left text-base font-bold">
              What is Raiser Flexi Wallet?
            </h3>
            {faqVisibility.faq9 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq9 ? "" : "hidden"}`}>
            The Raiser Flexi wallet is a savings wallet that allows users to
            easily withdraw their savings without any breaking fee. However, for
            security purposes, withdrawals can only be done only once a day.
          </p>
        </div>
        <div className=" border-b-2 py-8">
          <div
            onClick={() => toggleFaqVisibility("faq10")}
            className="flex justify-between "
          >
            <h3 className="text-left text-base font-bold">
              Can I make investments with funds from my Raiser Flexi Wallet?
            </h3>
            {faqVisibility.faq10 ? (
              <img className="w-[24px]" src={see_Less} alt="plus" />
            ) : (
              <img className="w-[24px]" src={see_More} alt="plus" />
            )}
          </div>
          <p className={`text-left ${faqVisibility.faq10 ? "" : "hidden"}`}>
            Yes, you can! Investments can be funded from your Raiser Flexi
            Wallets.
          </p>
        </div>
      </section>
    </>
  );
};

export default FAQ;
