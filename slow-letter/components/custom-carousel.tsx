import Image from "next/image";
import { useState } from "react";
import Button from "./button";

export default function CarouselContainer() {
  const [templateList, setTemplateList] = useState([
    "carousel-item-1",
    "carousel-item-2",
    "carousel-item-3",
    "carousel-item-4",
    "carousel-item-5",
  ]);

  const [slideIdx, setSlideIdx] = useState(1);

  const onNextTemplate = () => {
    setTemplateList((prev) => {
      const firstTemplate = prev.shift();
      if (typeof firstTemplate !== "undefined") {
        prev.push(firstTemplate);
      } else {
        return [...prev];
      }
      return [...prev];
    });
    setSlideIdx((prev) => {
      if (prev === 5) {
        return 1;
      } else {
        return prev + 1;
      }
    });
  };
  const onPreviousTemplate = () => {
    setTemplateList((prev) => {
      const lastTemplate = prev.pop();
      if (typeof lastTemplate !== "undefined") {
        prev.unshift(lastTemplate);
      } else {
        return [...prev];
      }
      return [...prev];
    });
    setSlideIdx((prev) => {
      if (prev === 1) {
        return 5;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-item-4"></div>
        <div className="carousel-item-5" onClick={onPreviousTemplate}></div>
        <div className="carousel-item-3"></div>
        <div className="carousel-item-2" onClick={onNextTemplate}></div>
        <div className="carousel-item-1">
          <div className="button-container">
            <Button buttonSize="sm" text="Write a letter" />
          </div>
        </div>
        <div className="carousel-slide-container">
          <div className="carousel-button-left" onClick={onPreviousTemplate}>
            <Image src="/carousel-arrow-left.svg" layout="fill" alt="temp" />
          </div>
          <div
            className={
              slideIdx === 1 ? "dot-indicator-active" : "dot-indicator"
            }
          ></div>
          <div
            className={
              slideIdx === 2 ? "dot-indicator-active" : "dot-indicator"
            }
          ></div>
          <div
            className={
              slideIdx === 3 ? "dot-indicator-active" : "dot-indicator"
            }
          ></div>
          <div
            className={
              slideIdx === 4 ? "dot-indicator-active" : "dot-indicator"
            }
          ></div>
          <div
            className={
              slideIdx === 5 ? "dot-indicator-active" : "dot-indicator"
            }
          ></div>
          <div className="carousel-button-right" onClick={onNextTemplate}>
            <Image src="/carousel-arrow-right.svg" layout="fill" alt="temp" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .carousel-container {
            position: absolute;
            width: 70%;
            height: 25rem;
            top: 15rem;
            left: 12rem;
            border-radius: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .carousel-item-1 {
            position: absolute;
            left: 8rem;
            width: 40rem;
            height: 20rem;
            background: url(${"/" + templateList[0] + ".svg"});
            background-size: cover;
            border-radius: 40px;
          }
          .button-container {
            position: absolute;
            top: 15rem;
            left: 29.5rem;
            width: 9rem;
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .carousel-item-2 {
            position: absolute;
            left: 22rem;
            width: 30rem;
            height: 15rem;
            border-radius: 40px;
            filter: blur(0.5px);
            background: url(${"/" + templateList[1] + ".svg"});
            background-size: cover;
            border-radius: 40px;
          }

          .carousel-item-5 {
            position: absolute;
            left: 4rem;
            width: 30rem;
            height: 15rem;
            border-radius: 40px;
            filter: blur(0.5px);
            background: url(${"/" + templateList[4] + ".svg"});
            background-size: cover;
            border-radius: 40px;
          }
          .carousel-item-3 {
            position: absolute;
            left: 35rem;
            width: 20rem;
            height: 10rem;
            border-radius: 40px;
            filter: blur(1px);
            background: url(${"/" + templateList[2] + ".svg"});
            background-size: cover;
            border-radius: 40px;
          }
          .carousel-item-4 {
            position: absolute;
            left: 1.5rem;
            width: 20rem;
            height: 10rem;
            border-radius: 40px;
            filter: blur(1px);
            background: url(${"/" + templateList[3] + ".svg"});
            background-size: cover;
            border-radius: 40px;
          }
          .carousel-slide-container {
            position: absolute;
            width: 8rem;
            height: 1.5rem;
            position: absolute;
            left: 24rem;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.3rem;
          }
          .dot-indicator {
            width: 0.5rem;
            height: 0.5rem;
            background-color: #999999;
            border-radius: 50%;
          }
          .dot-indicator-active {
            width: 0.6rem;
            height: 0.6rem;
            background-color: #3563e9;
            border-radius: 50%;
          }
          .carousel-button-left {
            position: absolute;
            left: 0;
            width: 1rem;
            height: 1rem;
          }
          .carousel-button-right {
            position: absolute;
            right: 0;
            width: 1rem;
            height: 1rem;
          }
        `}
      </style>
    </>
  );
}
