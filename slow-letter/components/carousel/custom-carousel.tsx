import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CarouselItemProps, TemplateProps } from "../type/type";
import { useStore } from "../zustand_stores/store";

function CarouselItem({ imgUrl }: CarouselItemProps) {
  return (
    <>
      <motion.div
        className="w-full h-full"
        style={{
          borderRadius: "40px",
          backgroundImage: `url(${imgUrl.replace(
            "https://slowletter.s3.ap-northeast-2.amazonaws.com",
            ""
          )})`,
          backgroundSize: "cover",
        }}
      ></motion.div>
    </>
  );
}

export default function CarouselContainer({ templatesArr }: TemplateProps) {
  const [dotIdx, setDotIdx] = useState([1, 2, 3, 4, 5]);

  const [slideIdx, setSlideIdx] = useState(1);

  const saveTemplate = useStore((state: any) => state.saveTemplate);

  useEffect(() => {
    saveTemplate(`/templates/carousel-item-${slideIdx}.svg`, slideIdx);
  }, [slideIdx]);

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
        <div className="carousel-items-container">
          {slideIdx === 1 ? (
            <>
              <div className="carousel-item-sm-left">
                <CarouselItem imgUrl={templatesArr[1].templateUrl} />
              </div>
              <div className="carousel-item-md-left">
                <CarouselItem imgUrl={templatesArr[0].templateUrl} />
              </div>
              <div className="carousel-item-lg">
                <CarouselItem imgUrl={templatesArr[4].templateUrl} />
              </div>
              <div className="carousel-item-md-right">
                <CarouselItem imgUrl={templatesArr[3].templateUrl} />
              </div>
              <div className="carousel-item-sm-right">
                <CarouselItem imgUrl={templatesArr[2].templateUrl} />
              </div>
            </>
          ) : null}
          {slideIdx === 2 ? (
            <>
              <div className="carousel-item-sm-left">
                <CarouselItem imgUrl={templatesArr[0].templateUrl} />
              </div>
              <div className="carousel-item-md-left">
                <CarouselItem imgUrl={templatesArr[4].templateUrl} />
              </div>
              <div className="carousel-item-lg">
                <CarouselItem imgUrl={templatesArr[3].templateUrl} />
              </div>
              <div className="carousel-item-md-right">
                <CarouselItem imgUrl={templatesArr[2].templateUrl} />
              </div>
              <div className="carousel-item-sm-right">
                <CarouselItem imgUrl={templatesArr[1].templateUrl} />
              </div>
            </>
          ) : null}
          {slideIdx === 3 ? (
            <>
              <div className="carousel-item-sm-left">
                <CarouselItem imgUrl={templatesArr[4].templateUrl} />
              </div>
              <div className="carousel-item-md-left">
                <CarouselItem imgUrl={templatesArr[3].templateUrl} />
              </div>
              <div className="carousel-item-lg">
                <CarouselItem imgUrl={templatesArr[2].templateUrl} />
              </div>
              <div className="carousel-item-md-right">
                <CarouselItem imgUrl={templatesArr[1].templateUrl} />
              </div>
              <div className="carousel-item-sm-right">
                <CarouselItem imgUrl={templatesArr[0].templateUrl} />
              </div>
            </>
          ) : null}
          {slideIdx === 4 ? (
            <>
              <div className="carousel-item-sm-left">
                <CarouselItem imgUrl={templatesArr[3].templateUrl} />
              </div>
              <div className="carousel-item-md-left">
                <CarouselItem imgUrl={templatesArr[2].templateUrl} />
              </div>
              <div className="carousel-item-lg">
                <CarouselItem imgUrl={templatesArr[1].templateUrl} />
              </div>
              <div className="carousel-item-md-right">
                <CarouselItem imgUrl={templatesArr[0].templateUrl} />
              </div>
              <div className="carousel-item-sm-right">
                <CarouselItem imgUrl={templatesArr[4].templateUrl} />
              </div>
            </>
          ) : null}
          {slideIdx === 5 ? (
            <>
              <div className="carousel-item-sm-left">
                <CarouselItem imgUrl={templatesArr[2].templateUrl} />
              </div>
              <div className="carousel-item-md-left">
                <CarouselItem imgUrl={templatesArr[1].templateUrl} />
              </div>
              <div className="carousel-item-lg">
                <CarouselItem imgUrl={templatesArr[0].templateUrl} />
              </div>
              <div className="carousel-item-md-right">
                <CarouselItem imgUrl={templatesArr[4].templateUrl} />
              </div>
              <div className="carousel-item-sm-right">
                <CarouselItem imgUrl={templatesArr[3].templateUrl} />
              </div>
            </>
          ) : null}
        </div>

        <div className="carousel-indicator-container">
          <div
            className="carousel-button-left"
            onClick={onPreviousTemplate}
          ></div>
          {dotIdx.map((item, key) => (
            <div
              key={key}
              className={
                slideIdx === item ? "dot-indicator-active" : "dot-indicator"
              }
            ></div>
          ))}
          <div className="carousel-button-right" onClick={onNextTemplate}></div>
        </div>
      </div>
      <style jsx>
        {`
          .carousel-container {
            width: fit-content;
            height: fit-content;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 2rem;
          }
          .carousel-items-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 2rem;
          }
          .carousel-item-lg {
            width: 40rem;
            height: 20rem;
            border-radius: 40px;
            z-index: 100;
          }
          .carousel-item-md-left {
            position: absolute;
            left: 16rem;
            width: 30rem;
            height: 15rem;
            border-radius: 40px;
            filter: blur(0.5px);
            z-index: 80;
          }
          .carousel-item-md-right {
            position: absolute;
            right: 16rem;
            width: 30rem;
            height: 15rem;
            border-radius: 40px;
            filter: blur(0.5px);
            z-index: 80;
          }
          .carousel-item-sm-left {
            position: absolute;
            left: 13rem;
            width: 20rem;
            height: 10rem;
            border-radius: 40px;
            filter: blur(1px);
            z-index: 60;
          }
          .carousel-item-sm-right {
            position: absolute;
            right: 13rem;
            width: 20rem;
            height: 10rem;
            border-radius: 40px;
            filter: blur(1px);
            z-index: 60;
          }
          .carousel-indicator-container {
            width: 8rem;
            height: 1.5rem;
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
            left: 0;
            width: 1rem;
            height: 1rem;
            background-image: url("/carousel-arrow-left.svg");
            background-size: cover;
            cursor: pointer;
          }
          .carousel-button-right {
            right: 0;
            width: 1rem;
            height: 1rem;
            background-image: url("/carousel-arrow-right.svg");
            background-size: cover;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
