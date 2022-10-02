import ProjectTitle from "../components/main-title/project-title";
import CustomButton from "../components/button/custom-button";
import Earth from "../components/earth/earth";
import Link from "next/link";
import { useStore } from "../components/zustand_stores/store";

export default function Home() {
  const userToken = useStore((state: any) => state.userToken);
  return (
    <div className="main-page-container w-full h-full flex">
      <div className="main-page-left-subcontainer justify-center items-center">
        <div className="title-button-container flex flex-col gap-5">
          <ProjectTitle />
          <div className="button-container">
            {userToken === "" ? (
              <>
                <Link href="/signin">
                  <a>
                    <CustomButton text="Sign in" />
                  </a>
                </Link>
                <Link href="/signup">
                  <a>
                    <CustomButton text="Sign up" />
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/letter/template">
                  <a>
                    <CustomButton text="Write a letter" />
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="main-page-right-subcontainer">
        <Earth />
      </div>
      <style jsx>
        {`
          .main-page-left-subcontainer {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .button-container {
            width: fit-content;
            height: fit-content;
            display: flex;
            gap: 10px;
          }
          .main-page-right-subcontainer {
            width: 50%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
}
