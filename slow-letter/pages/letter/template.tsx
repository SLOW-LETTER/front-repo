import Button from "../../components/button";
import CustomCarousel from "../../components/custom-carousel";
import Steps from "../../components/steps";

export default function Template() {
  return (
    <div className="whole-container">
      <Steps />
      <CustomCarousel />
      <div className="button-container">
        <Button text="Next" />
      </div>
      <style jsx>
        {`
          .whole-container {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .button-container {
            position: absolute;
            width: 12rem;
            height: 4rem;
            top: 39rem;
            left: 65rem;
            display: flex;
            align-items: center;
            justify-content: center;

          }
        `}
      </style>
    </div>
  );
}
