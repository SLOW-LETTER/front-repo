import ProjectTitle from "../components/project-title";
import Button from "../components/button";
import Earth from "../components/earth";

export default function Home() {
  return (
    <>
      <div className="earth-globe">
        <Earth />
      </div>
      <ProjectTitle />
      <div className="button-container">
        <Button text="Sign in" />
        <Button text="Sign up" />
      </div>
      <style jsx>
        {`
          .earth-globe {
            width: 40rem;
            height: 100%;
            opacity: 1;
            position: absolute;
            top: 3.5rem;
            right: 0;
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
