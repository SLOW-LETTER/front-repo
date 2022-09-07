import ProjectTitle from "../components/project-title";
import CustomButton from "../components/custom-button";
import Earth from "../components/earth";

export default function Home() {
  return (
    <>
      <div className="earth-globe">
        <Earth />
      </div>
      <ProjectTitle containerTop="12rem"
  containerLeft="10rem"
  titleTop="0"
  titleLeft="0"
  subtitleTop="16rem"
  subtitleLeft="0" />
      <div className="button-container">
        <CustomButton buttonSize="" text="Sign in" />
        <CustomButton buttonSize="" text="Sign up" />
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
