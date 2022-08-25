import ProjectTitle from "../components/project-title";
import Button from "../components/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="earth-globe">
        <Image src="/earth-globe.svg" layout="fill" alt="temp" />
      </div>
      <ProjectTitle />
      <div className="button-container">
        <Button text="Sign in" />
        <Button text="Sign up" />
      </div>
      <style jsx>
        {`
          .earth-globe {
            width: 70rem;
            height: 45rem;
            opacity: 1;
            position: absolute;
            top: 1rem;
            left: 10rem;
            transform: rotate(-2deg);
          }
          .button-container {
            width: 25rem;
            height: 5rem;
            opacity: 1;
            position: absolute;
            top: 33rem;
            left: 10rem;
            display: flex;
            flex-direction: row;
            justify-content: left;
            align-items: center;
            gap: 20px;
          }
        `}
      </style>
    </>
  );
}
