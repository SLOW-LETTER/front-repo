import ProjectTitle from "../components/title/project-title";
import CustomButton from "../components/button/custom-button";
import Earth from "../components/earth/earth";
import Link from "next/link";
import { useCheckUserToken } from "../components/hooks/use-check-user-token";

export default function Home() {
  const { checkUserToken } = useCheckUserToken();
  return (
    <div className="main-page-container w-full h-full flex items-center">
      <div className="main-page-left-subcontainer">
        <ProjectTitle />
        <div className="button-container">
          {checkUserToken === "" ? (
            <>
              <Link href="/loginpage">
                <a>
                  <CustomButton text="Sign in" />
                </a>
              </Link>
              <Link href="/signuppage">
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
      <div className="main-page-right-subcontainer">
        <Earth />
      </div>
      <style jsx>
        {`
          .main-page-left-subcontainer {
            width: 50%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          .button-container {
            width: fit-content;
            height: fit-content;
            display: flex;
            gap: 20px;
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
