import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CarouselContainer() {
  const [dotIdx, setDotIdx] = useState([1, 2, 3, 4, 5]);

  const [slideIdx, setSlideIdx] = useState(1);

  const onNextTemplate = () => {
    setSlideIdx((prev) => {
      if (prev === 5) {
        return 1;
      } else {
        return prev + 1;
      }
    });
  };
  const onPreviousTemplate = () => {
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
        {slideIdx === 1 ? (
          <>
            <div className="carousel-item-sm-left">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-3.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-sm-right">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-2.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-md-left">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-4.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-md-right">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-1.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-lg">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-0.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
          </>
        ) : null}
        {slideIdx === 2 ? (
          <>
            <div className="carousel-item-sm-left">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-4.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-sm-right">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-3.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-md-left">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-0.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-md-right">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-2.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-lg">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-1.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
          </>
        ) : null}
        {slideIdx === 3 ? (
          <>
            <div className="carousel-item-sm-left">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-0.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-sm-right">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-4.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-md-left">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-1.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-md-right">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-3.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-lg">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-2.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
          </>
        ) : null}
        {slideIdx === 4 ? (
          <>
            <div className="carousel-item-sm-left">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-1.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-sm-right">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-0.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-md-left">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-2.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-md-right">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-4.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-lg">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-3.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
          </>
        ) : null}
        {slideIdx === 5 ? (
          <>
            <div className="carousel-item-sm-left">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-2.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-sm-right">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-1.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-md-left">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-3.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-md-right">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-0.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
            <div className="carousel-item-lg">
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(/carousel-item-4.svg)",
                  borderRadius: "40px",
                  backgroundSize: "cover",
                }}
              ></motion.div>
            </div>
          </>
        ) : null}

        <div className="carousel-slide-container">
          <div className="carousel-button-left" onClick={onPreviousTemplate}>
            <Image src="/carousel-arrow-left.svg" layout="fill" alt="" />
          </div>
          {dotIdx.map((item, key) => (
            <div
              key={key}
              className={
                slideIdx === item ? "dot-indicator-active" : "dot-indicator"
              }
            ></div>
          ))}
          <div className="carousel-button-right" onClick={onNextTemplate}>
            <Image src="/carousel-arrow-right.svg" layout="fill" alt="" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .carousel-container {
            position: absolute;
            width: 70%;
            height: 25rem;
            top: 13rem;
            left: 12rem;
            border-radius: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .carousel-item-lg {
            position: absolute;
            left: 8rem;
            width: 40rem;
            height: 20rem;
            border-radius: 40px;
          }
          .carousel-item-md-left {
            position: absolute;
            left: 4rem;
            width: 30rem;
            height: 15rem;
            border-radius: 40px;
            filter: blur(0.5px);
          }
          .carousel-item-md-right {
            position: absolute;
            left: 22rem;
            width: 30rem;
            height: 15rem;
            border-radius: 40px;
            filter: blur(0.5px);
          }
          .carousel-item-sm-left {
            position: absolute;
            left: 1.5rem;
            width: 20rem;
            height: 10rem;
            border-radius: 40px;
            filter: blur(1px);
          }
          .carousel-item-sm-right {
            position: absolute;
            left: 35rem;
            width: 20rem;
            height: 10rem;
            border-radius: 40px;
            filter: blur(1px);
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
