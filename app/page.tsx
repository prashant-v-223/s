"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import LastCard from "./components/LastCard";
import Head from "next/head";
import GatewayScroll from "./components/GatewayScroll/GatewayScroll";
import Card8 from "./components/Card8";
import Supercharge from "./components/SuperchargeSections/Supercharge";
import BetaAccess from "./components/BetaAccess/BetaAccess";
import HeroSection from "./components/HeroSection/HeroSection";
import Interoperability from "./components/Interoperability/Interoperability";
import CircutAnimation from "./components/CircutAnimation/CircutAnimation";
import GatewayScrollMobile from "./components/GatewayScrollMobile/GatewayScroll";
import GovernedCommunity from "./components/GovernedCommunity/GovernedCommunity";
export default function Home() {
  const [width, setWidth] = useState(0); // Initial width of 0
  const targetWidth = 1; // Target width in pixels
  const duration = 1000; // Duration of the animation in milliseconds
  const stepTime = 15; // Interval time in milliseconds
  const increment = targetWidth / (duration / stepTime); // Incremental width per step

  useEffect(() => {
    let interval: any = null;

    if (width > 0 && width < targetWidth) {
      interval = setInterval(() => {
        setWidth((prevWidth) => {
          const newWidth = prevWidth + increment;
          return newWidth >= targetWidth ? targetWidth : newWidth;
        });
      }, stepTime);
    }

    return () => clearInterval(interval);
  }, [width, increment, stepTime, targetWidth]);

  const handleClick = () => {
    setWidth(width === 1 ? 0 : 1);
    console.log("11");
  };
  console.log("width", width);

  return (
    <div className=" ">
      <Head>
        <title>The BEP20 Token govern by the community.!!</title>
        <meta
          name="description"
          content="The BEP20 Token govern by the community.!!"
        />
        <meta property="og:image" content="/dashh.svg" />
      </Head>
      <>
        <meta charSet="utf-8" />
        <title>Futureswap</title>
        <meta
          content="The most powerful open trading platform for crypto assets. 20x leveraged trading with automated market making. Trade or lend cryptocurrency."
          name="description"
        />
        <meta content="Futureswap" property="og:title" />
        <meta
          content="The most powerful open trading platform for crypto assets. 20x leveraged trading with automated market making. Trade or lend cryptocurrency."
          property="og:description"
        />

        <style
          dangerouslySetInnerHTML={{
            __html:
              '@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="3a116b48-7105-1c76-ee27-722232aa6553"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3a116b48-7105-1c76-ee27-722232aa6552"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="5085e286-d2db-2a49-acb3-706dc6e2a4a3"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="5085e286-d2db-2a49-acb3-706dc6e2a4a2"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="7f68df3c-e24f-2ea1-72fc-8fe6f5775b71"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="7f68df3c-e24f-2ea1-72fc-8fe6f5775b70"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="f6cc5286-d7b0-7a7c-e2a6-69c5f7dcdcd2"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="f6cc5286-d7b0-7a7c-e2a6-69c5f7dcdcd1"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="779abac9-a96d-f368-bd2d-6d0db5bace4f"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="779abac9-a96d-f368-bd2d-6d0db5bace4e"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="93173541-55e4-2cfa-1ea4-c616f71b75b9"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="93173541-55e4-2cfa-1ea4-c616f71b75b8"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="db6f446c-f98a-f85e-c008-1841f6abc667"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="db6f446c-f98a-f85e-c008-1841f6abc666"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="296c1d86-7531-60e4-7844-73c5baf38e8e"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="296c1d86-7531-60e4-7844-73c5baf38e8d"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="263f6a83-5c78-daa1-24fe-f7abc4bc7923"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="a47fece7-889f-b8b6-1383-0e97bcca5444"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="bb040d50-17ca-554b-b660-c61e673dfc36"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="333e9f30-75cc-796d-5b16-5da1cb7e00a4"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="d07a390e-c3d6-57af-d4fc-97f57c9ec4f0"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="06060a13-93bb-29b5-98d1-3a092dfdb004"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="beeea06e-0600-6df0-12da-b5a7370b7124"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="beeea06e-0600-6df0-12da-b5a7370b7123"] {opacity:1;}}@media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="d190c1df-cdb2-1179-2e57-61160b1795fe"] {-webkit-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="dbc88dd3-3248-0d5a-40ed-ac860efae099"] {-webkit-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3e8f9130-95d2-c295-148c-7fb4d3274a05"] {-webkit-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="b884066b-dfe0-b27f-d8b6-602283a3d9b0"] {-webkit-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="d190c1df-cdb2-1179-2e57-61160b1795fe"] {-webkit-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="dbc88dd3-3248-0d5a-40ed-ac860efae099"] {-webkit-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3e8f9130-95d2-c295-148c-7fb4d3274a05"] {-webkit-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="b884066b-dfe0-b27f-d8b6-602283a3d9b0"] {-webkit-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(33%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}}',
          }}
        />
        <link
          href="images/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="images/webclip.png" rel="apple-touch-icon" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />

        <div className="page-wrap">
          <div
            data-collapse="medium"
            data-animation="over-right"
            data-duration={800}
            data-easing="ease-in-out-quart"
            data-easing2="ease-in-out-quart"
            data-w-id="312063b2-8b3a-4edc-dcfd-b7b68bda434c"
            role="banner"
            className="nav w-nav"
          >
            <div className="nav-container">
              <a
                aria-current="page"
                className="nav-logo-link w-nav-brand w--current"
                href="/"
                aria-label="home"
              >
                <img
                  src="images/Group 1000004870.png"
                  loading="lazy"
                  alt=""
                  className="nav-logo"
                  width={220}
                />
              </a>
              <nav
                role="navigation"
                className="nav-menu-container w-nav-menu"
                id="targetElement"
                style={{
                  opacity: `${width}`,
                  height: `${width > 0 ? "100vh" : "0px"}`,
                  transition: "0.5s ease-in-out opacity ",
                }}
              >
                <div className="nav-menu" style={{}}>
                  <a
                    data-w-id="d190c1df-cdb2-1179-2e57-61160b1795fe"
                    href=""
                    className="nav-link-block w-inline-block"
                  >
                    <img
                      src="images/Icon-Nav-Hover.svg"
                      loading="lazy"
                      alt=""
                      className="nav-link"
                      style={{ opacity: 0 }}
                    />
                    <div
                      className="nav-link-name"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Trade
                    </div>
                  </a>
                  <a
                    data-w-id="dbc88dd3-3248-0d5a-40ed-ac860efae099"
                    href=""
                    target="_blank"
                    className="nav-link-block w-inline-block"
                  >
                    <img
                      src="images/Icon-Nav-Hover.svg"
                      loading="lazy"
                      alt=""
                      className="nav-link"
                      style={{ opacity: 0 }}
                    />
                    <div
                      className="nav-link-name"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Docs
                    </div>
                  </a>
                  <a
                    data-w-id="dbc88dd3-3248-0d5a-40ed-ac860efae099"
                    href=""
                    target="_blank"
                    className="nav-link-block w-inline-block"
                  >
                    <img
                      src="images/Icon-Nav-Hover.svg"
                      loading="lazy"
                      alt=""
                      className="nav-link"
                      style={{ opacity: 0 }}
                    />
                    <div
                      className="nav-link-name"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Governance
                    </div>
                  </a>
                  <a
                    data-w-id="3e8f9130-95d2-c295-148c-7fb4d3274a05"
                    href="https://angel.co/company/futureswap/jobs/"
                    target="_blank"
                    className="nav-link-block w-inline-block"
                  >
                    <img
                      src="images/Icon-Nav-Hover.svg"
                      loading="lazy"
                      alt=""
                      className="nav-link"
                      style={{ opacity: 0 }}
                    />
                    <div
                      className="nav-link-name"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Jobs
                    </div>
                  </a>
                  <a
                    data-w-id="b884066b-dfe0-b27f-d8b6-602283a3d9b0"
                    href="https://discord.gg/futureswap"
                    target="_blank"
                    className="nav-link-block w-inline-block"
                  >
                    <img
                      src="images/Icon-Nav-Hover.svg"
                      loading="lazy"
                      alt=""
                      className="nav-link"
                      style={{ opacity: 0 }}
                    />
                    <div
                      className="nav-link-name"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Discord
                    </div>
                  </a>
                  <div className="nav-social-info">Follow us</div>
                  <div className="nav-social-container">
                    <a
                      href="https://twitter.com/futureswapx"
                      target="_blank"
                      className="social-holder is-nav-social-holder w-inline-block"
                    >
                      <img
                        src="images/Icon-Twitter-Green.svg"
                        loading="lazy"
                        alt=""
                        className="green-social is-nav-green-social"
                      />
                    </a>
                    <a
                      href="https://discord.gg/futureswap"
                      target="_blank"
                      className="social-holder w-inline-block"
                    >
                      <img
                        src="images/Icon-Discord-Green.svg"
                        loading="lazy"
                        alt=""
                        className="green-social is-nav-green-social"
                      />
                    </a>
                  </div>
                </div>
              </nav>
              <nav
                role="navigation"
                className="nav-menu-container w-nav-menu"
                id="targetElement1"
              >
                <div className="nav-menu" style={{ justifyContent: "end" }}>
                  <a
                    data-w-id="d190c1df-cdb2-1179-2e57-61160b1795fe"
                    href=""
                    className="nav-link-block w-inline-block"
                  >
                    <img
                      src="images/Icon-Nav-Hover.svg"
                      loading="lazy"
                      alt=""
                      className="nav-link"
                      style={{ opacity: 0 }}
                    />
                    <div
                      className="nav-link-name"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Trade
                    </div>
                  </a>
                  <a
                    data-w-id="dbc88dd3-3248-0d5a-40ed-ac860efae099"
                    href=""
                    target="_blank"
                    className="nav-link-block w-inline-block"
                  >
                    <img
                      src="images/Icon-Nav-Hover.svg"
                      loading="lazy"
                      alt=""
                      className="nav-link"
                      style={{ opacity: 0 }}
                    />
                    <div
                      className="nav-link-name"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Docs
                    </div>
                  </a>
                  <a
                    data-w-id="dbc88dd3-3248-0d5a-40ed-ac860efae099"
                    href=""
                    target="_blank"
                    className="nav-link-block w-inline-block"
                  >
                    <img
                      src="images/Icon-Nav-Hover.svg"
                      loading="lazy"
                      alt=""
                      className="nav-link"
                      style={{ opacity: 0 }}
                    />
                    <div
                      className="nav-link-name"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Governance
                    </div>
                  </a>
                  <a
                    data-w-id="3e8f9130-95d2-c295-148c-7fb4d3274a05"
                    href="https://angel.co/company/futureswap/jobs/"
                    target="_blank"
                    className="nav-link-block w-inline-block"
                  >
                    <img
                      src="images/Icon-Nav-Hover.svg"
                      loading="lazy"
                      alt=""
                      className="nav-link"
                      style={{ opacity: 0 }}
                    />
                    <div
                      className="nav-link-name"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Jobs
                    </div>
                  </a>
                  <a
                    data-w-id="b884066b-dfe0-b27f-d8b6-602283a3d9b0"
                    href="https://discord.gg/futureswap"
                    target="_blank"
                    className="nav-link-block w-inline-block"
                  >
                    <img
                      src="images/Icon-Nav-Hover.svg"
                      loading="lazy"
                      alt=""
                      className="nav-link"
                      style={{ opacity: 0 }}
                    />
                    <div
                      className="nav-link-name"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Discord
                    </div>
                  </a>
                  <div className="nav-social-info">Follow us</div>
                  <div className="nav-social-container">
                    <a
                      href="https://twitter.com/futureswapx"
                      target="_blank"
                      className="social-holder is-nav-social-holder w-inline-block"
                    >
                      <img
                        src="images/Icon-Twitter-Green.svg"
                        loading="lazy"
                        alt=""
                        className="green-social is-nav-green-social"
                      />
                    </a>
                    <a
                      href="https://discord.gg/futureswap"
                      target="_blank"
                      className="social-holder w-inline-block"
                    >
                      <img
                        src="images/Icon-Discord-Green.svg"
                        loading="lazy"
                        alt=""
                        className="green-social is-nav-green-social"
                      />
                    </a>
                  </div>
                </div>
              </nav>
              <div
                className="menu-button w-nav-button"
                style={{
                  WebkitUserSelect: "text",
                }}
                aria-label="menu"
                role="button"
                tabIndex={0}
                aria-controls="w-nav-overlay-0"
                aria-haspopup="menu"
                aria-expanded="false"
              >
                <div className="menu-icon-container" onClick={handleClick}>
                  <div className="menu-icon-top" />
                  <div className="menu-icon-bottom" />
                </div>
              </div>
            </div>
            <div
              className="w-nav-overlay"
              data-wf-ignore=""
              id="w-nav-overlay-0"
            />
          </div>
          <div className="hero-wrapper">
            <div className="hero-info-container">
              <div className="hero-info">
                <div className="hero-subheader">
                  Built on web3. Powered by You.
                </div>
                <h1 className="h1">The Future of Leverage Is Here</h1>
                <p className="p">
                  Leverage on any tokens with a protocol trusted with billions
                  for its performance and reliability.
                </p>
                <div className="hero-buttons-container">
                  <a
                    href="/api/"
                    className="filled-button is-filled-hero-button w-button"
                  >
                    Start Trading
                  </a>
                  <a href="" className="outlined-button w-button">
                    Add Liquidity
                  </a>
                </div>
              </div>
            </div>
            <div
              className="waves-wrapper"
              style={{
                willChange: "opacity, transform",
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="waves-container">
                <img
                  src="images/Graphic-Hero-Blur.jpg"
                  loading="lazy"
                  sizes="(max-width: 1279px) 100vw, 1250px"
                  srcSet="images/Graphic-Hero-Blur-p-500.jpeg 500w, images/Graphic-Hero-Blur-p-800.jpeg 800w, images/Graphic-Hero-Blur-p-1080.jpeg 1080w, images/Graphic-Hero-Blur.jpg 1286w"
                  alt=""
                  className="hero-blurs"
                />
                <img
                  src="images/Graphic-Purple-Wave.svg"
                  loading="lazy"
                  data-w-id="263f6a83-5c78-daa1-24fe-f7abc4bc7923"
                  alt=""
                  className="purple-wave"
                  style={{ opacity: 1 }}
                />
                <img
                  src="images/Graphic-Blue-Wave.svg"
                  loading="lazy"
                  data-w-id="a47fece7-889f-b8b6-1383-0e97bcca5444"
                  alt=""
                  className="blue-wave"
                  style={{ opacity: 1 }}
                />
                <img
                  src="images/Graphic-Teal-Wave.svg"
                  loading="lazy"
                  data-w-id="bb040d50-17ca-554b-b660-c61e673dfc36"
                  alt=""
                  className="teal-wave"
                  style={{ opacity: 1 }}
                />
                <div
                  data-w-id="06060a13-93bb-29b5-98d1-3a092dfdb004"
                  className="hero-card-wrapper"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                >
                  <a href="" className="hero-card w-inline-block">
                    <img
                      src="images/Icon-Ethereum.svg"
                      loading="lazy"
                      alt=""
                      className="hero-card-icon"
                    />
                    <div className="hero-card-info">
                      <div className="hero-card-name">
                        Ethereum <span className="hero-card-short">ETH</span>
                      </div>
                    </div>
                  </a>
                  <img
                    src="images/Graphic-Hero-Stem.svg"
                    loading="lazy"
                    alt=""
                    className="hero-card-stem"
                  />
                </div>
                <div
                  data-w-id="333e9f30-75cc-796d-5b16-5da1cb7e00a4"
                  className="hero-card-wrapper is-bitcoin"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                >
                  <a href="" className="hero-card w-inline-block">
                    <img
                      src="images/Icon-Bitcoin.svg"
                      loading="lazy"
                      alt=""
                      className="hero-card-icon"
                    />
                    <div className="hero-card-info">
                      <div className="hero-card-name">
                        Bitcoin <span className="hero-card-short">BTC</span>
                      </div>
                    </div>
                  </a>
                  <img
                    src="images/Graphic-Hero-Stem.svg"
                    loading="lazy"
                    alt=""
                    className="hero-card-stem"
                  />
                </div>
                <div
                  data-w-id="d07a390e-c3d6-57af-d4fc-97f57c9ec4f0"
                  className="hero-card-wrapper is-chainlink"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                >
                  <a href="" className="hero-card w-inline-block">
                    <img
                      src="images/Icon-Uniswap.svg"
                      loading="lazy"
                      alt=""
                      className="hero-card-icon"
                    />
                    <div className="hero-card-info">
                      <div className="hero-card-name">
                        Uniswap <span className="hero-card-short">UNI</span>
                      </div>
                    </div>
                  </a>
                  <img
                    src="images/Graphic-Hero-Stem.svg"
                    loading="lazy"
                    alt=""
                    className="hero-card-stem"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="s1">
            <div className="s1-wrapper">
              <div className="s1-container">
                <div className="s1-block-container">
                  <div className="s1-block">
                    <div className="s1-content-container">
                      <h3 className="h3 animated fadeIn">
                        All-time trade volume
                      </h3>
                      <div className="s1-numbers">
                        $
                        <span className="counter animated fadeInDownBig">
                          4,200,368,117
                        </span>
                      </div>
                    </div>
                    <div className="s1-gradient-glow" />
                    <div className="s1-gradient-mask" />
                    <div className="s1-gradient-outline" />
                  </div>
                </div>
                <div className="s1-block-container is-total-trades-block-container">
                  <div className="s1-block">
                    <div className="s1-content-container">
                      <h3 className="h3 is-green-h3 animated fadeIn">
                        Total Trades
                      </h3>
                      <div className="s1-numbers">
                        <span className="counter animated fadeInDownBig">
                          10,434
                        </span>
                      </div>
                    </div>
                    <div className="s1-gradient-glow is-green-gradient-glow" />
                    <div className="s1-gradient-mask" />
                    <div className="s1-gradient-outline" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="s2">
            <div className="s2-wrapper">
              <div
                data-w-id="5b6da96c-f3bc-7ac5-0a8a-bf7907321711"
                className="s2-info-container"
                style={{
                  willChange: "opacity",
                  transform:
                    "translate3d(0px, 75px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <h2 className="h2">Take full control of your crypto</h2>
                <p className="p is-s2-p">
                  Built on Arbitrum and Avalanche, our decentralized leverage
                  trading exchange focuses on being the best execution
                  environment for trades.
                </p>
              </div>
              <div className="s2-blocks-wrapper">
                <div
                  data-w-id="a07dd5fa-e232-2d4d-0204-e7a5e93200e2"
                  className="s2-blocks-container"
                  style={{
                    willChange: "opacity, transform",
                    transform:
                      "translate3d(0px, 75px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    data-w-id="0f9b7b89-f010-ae8c-147c-72ef0f4a1659"
                    className="s2-block"
                  >
                    <div className="s2-content-container">
                      <div className="s2-blur-container">
                        <div
                          className="s2-blur"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <div className="s2-icon-container">
                        <img
                          src="images/Graphic-Leverage.png"
                          loading="lazy"
                          alt=""
                          className="s2-icon"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <h3 className="s2-h3 animated fadeIn">
                        Leverage up to 30x
                      </h3>
                    </div>
                  </div>
                  <div className="s2-block">
                    <div className="s2-content-container">
                      <div className="s2-blur-container">
                        <div
                          className="s2-blur is-blur-2"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <div className="s2-icon-container">
                        <img
                          src="images/Graphic-Pools.png"
                          loading="lazy"
                          alt=""
                          className="s2-icon is-icon-2"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <h3 className="s2-h3 animated fadeIn">
                        Low-risk liquidity pools
                      </h3>
                    </div>
                  </div>
                  <div className="s2-block">
                    <div className="s2-content-container">
                      <div className="s2-blur-container">
                        <div
                          className="s2-blur is-blur-3"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <div className="s2-icon-container">
                        <img
                          src="images/Graphic-Transactions.png"
                          loading="lazy"
                          alt=""
                          className="s2-icon is-icon-3"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <h3 className="s2-h3 animated fadeIn">
                        Super cheap transactions
                      </h3>
                    </div>
                  </div>
                  <div className="s2-block">
                    <div className="s2-content-container">
                      <div className="s2-blur-container">
                        <div
                          className="s2-blur is-blur-4"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <div className="s2-icon-container">
                        <img
                          src="images/Graphic-Execution.png"
                          loading="lazy"
                          alt=""
                          className="s2-icon is-icon-4"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <h3 className="s2-h3 animated fadeIn">
                        Utilizes the most liquid AMMs
                      </h3>
                    </div>
                  </div>
                  <div className="s2-block">
                    <div className="s2-content-container">
                      <div className="s2-blur-container">
                        <div
                          className="s2-blur is-blur-5"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <div className="s2-icon-container">
                        <img
                          src="images/Graphic-Fees.png"
                          loading="lazy"
                          alt=""
                          className="s2-icon is-icon-5"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <h3 className="s2-h3 animated fadeIn">
                        Permissionless trading
                      </h3>
                    </div>
                  </div>
                  <div className="s2-block">
                    <div className="s2-content-container">
                      <div className="s2-blur-container">
                        <div
                          className="s2-blur is-blur-6"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <div className="s2-icon-container">
                        <img
                          src="images/Graphic-Oracle.png"
                          loading="lazy"
                          alt=""
                          className="s2-icon is-icon-6"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <h3 className="s2-h3 animated fadeIn">
                        Fully composable
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container p-0">
            <CircutAnimation />
            <GovernedCommunity />
            <Interoperability />
          </div>
          <div className="container-fluid ">
            <Supercharge />{" "}
          </div>
          <div className="container p-0">
            <BetaAccess />
            <Card8 />
            <LastCard />
            <div className="flex justify-center">
              <img className="w-[70px]" src="/footer_star.svg" />
            </div>
            <Footer />
            <GatewayScroll />
          </div>
        </div>
      </>
    </div>
  );
}
