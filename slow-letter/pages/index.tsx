import ProjectTitle from "../components/project-title";
import CustomButton from "../components/custom-button";
import Earth from "../components/earth";
import Link from "next/link";
import { useTokenStore } from "../components/zustand_hooks/tokenStore";
import { useEffect, useState } from "react";

export default function Home() {
  const userToken = useTokenStore((state: any) => state.userToken);

  const [savedUserToken, setSavedUserToken] = useState("temp");

  useEffect(() => {
    setSavedUserToken(userToken);
  }, [savedUserToken]);

  return (
    <>
      <div className="earth-globe">
        <Earth />
      </div>
      <ProjectTitle
        containerTop="12rem"
        containerLeft="10rem"
        titleTop="0"
        titleLeft="0"
        subtitleTop="16rem"
        subtitleLeft="0"
      />
      <div className="button-container">
        {savedUserToken === "temp" ? (
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
      <style jsx>
        {`
          .earth-globe {
            width: 50%;
            height: 90%;
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
