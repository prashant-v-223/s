"use client";
import React, { useEffect } from "react";
import "./Supercharge.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Supercharge = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="mt-20 md:mx-36  px-3">
      <h2 className="text-center font-semibold text-[30px] my-5 text-white">
        Features of Unity Trade
      </h2>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 pt-8">
          <div
            data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1"
            className="df-item p-6 py-8 px-8 md:flex  justify-around background_box"
          >
            <div className="md:w-1/2">
              <img
                src="/top_image.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl mt-5 text-white">Unity Trade 1 Plan</h3>
              <p className=" max-w-[400px] text-white mt-3">
                Unity Trade 1 Plan will be recycled after 4th direct or indirect
                referrer. 4th User's income will be sent to an upline
              </p>
            </div>
            <div className="max-w-[150px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="/images/globe.png" className="featuresBoxsss" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item p-6 py-8 px-8 md:flex justify-around background_box"
          >
            <div className="md:w-1/2 ">
              <img
                src="/topimage2.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl  text-white  mt-5">Unity Trade 5 Plan</h3>

              <p className="max-w-[400px] mt-3 text-white">
                This is one of the unique & best plan of Unity Trade. Income
                will be distributed based on the line of 10%, 20%, 20%, 50%.
                After recycle need to unlock the next level.
              </p>
            </div>
            <div className="max-w-[150px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="/images/server.png" className="featuresBoxsss" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item  p-6 py-8 px-8 md:flex justify-around background_box "
          >
          <div className="max-w-[150px]  md:mt-0 mx-auto md:mx-0">
            <img src="/images/processor.png" className="featuresBoxsss2" />
          </div>
            <div className="md:w-1/2 ">
              <img
                src="/topimage3.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl mt-4  text-white">Unity Trade 15 Plan</h3>
              <p className="text-white mt-3 max-w-[400px]">
                15 levels for each house are activated upon the purchase. Your
                income will be stopped if any of your house plan is recycled and
                not upgraded.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item py-8 px-8 p-6 md:flex md:space-x-10 justify-around"
          >
            <div className="max-w-[250px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="/dashboard.png" />
            </div>
            <div className="md:w-1/2 ">
              <h3 className="text-3xl font-bold mt-5 md:mt-0  text-white ">
                {" "}
                <span className="text-[#b96c33]">Unity Trade </span>dashboard
              </h3>
              <p className="text-white mt-3 max-w-[400px]">
                Easy to use and user friendly dashboard to keep the track of
                your team, purchase, incomes and much more.
              </p>
              <button className="border  text-white border-[#b96c33] px-5 mt-6 py-2 rounded-full">
                Go to dashboard
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="box_small bg-[#0F0F0F] rounded-2xl p-6">
              <img className="w-10" src="/dh1.svg" />
              <h3 className="text-lg mt-3  text-white">
                DH-Decentralized Exchange
              </h3>
              <p className="mt-2">
                Superfast matching engine with optimum security for the traders
                will be launched in Jan 2025. DH Exchange will initially support
                8 networks.
              </p>
            </div>
            <div className="box_small bg-[#0F0F0F] rounded-2xl p-6">
              <img className="w-10" src="/dh2.svg" />
              <h3 className="text-lg mt-3  text-white">DH-Tradeable Token</h3>
              <p className="mt-2">
                ERC20 Standard token with burning mechanism will be deployed on
                Binance smart chain with an initial price of 0.3$.
              </p>
            </div>
            <div className="box_small bg-[#0F0F0F] rounded-2xl p-6">
              <img className="w-10" src="/dh3.svg" />
              <h3 className="text-lg mt-3  text-white">DH- New Network Plan</h3>
              <p className="mt-2">
                New network plan for all DH users will be launched, which will
                have many more interesting features in addition to current
                plans.
              </p>
            </div>
            <div className="box_small bg-[#0F0F0F] rounded-2xl p-6">
              <img className="w-10" src="/dh4.svg" />
              <h3 className="text-lg mt-3  text-white">DH-Tradeable Token</h3>
              <p className="mt-2">
                ERC20 Standard token with burning mechanism will be deployed on
                Binance smart chain with an initial price of 0.3$.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supercharge;
