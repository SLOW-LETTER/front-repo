import Buttondefault from "./button/button";
import Image from "next/image";
import { useRouter } from "next/router";
import { removeCookies } from "../function/cookie-handler/cookieHandler";

interface pop {
  visibility: string;
}

export default function Custom_Popover({ visibility }: pop) {
  const router = useRouter();
  function mySetting() {
    router.push("/mypage/account/accountinfo");
  }

  function signOut() {
    removeCookies("accessToken", { path: "/" });
    removeCookies("refreshToken", { path: "/" });
  }
  return (
    <>
      <div className="page flex flex-col">
        <div className="arrow-container">
          <div className="arrow-up"></div>
        </div>
        <div className="items-inside items-center justify-center">
          <div className="pop-over flex flex-col  items-center justify-center bg-white rounded-3xl p-8 border-2 border-blue-600 space-y-5">
            <div>
              <Image src="/defaultProfile.svg" width="50px" height="50px" />
            </div>
            <span className="text-center font-semibold ">email</span>
            <Buttondefault
              text="My Account"
              btnWidth="150px"
              btnHeight="35px"
              btnColor="gray"
              radius="30px"
              onClick={mySetting}
            ></Buttondefault>
            <Buttondefault
              text="Sign Out"
              btnWidth="150px"
              btnHeight="35px"
              btnColor="red"
              radius="30px"
              onClick={signOut}
            ></Buttondefault>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .arrow-container {
            padding-left: 70%;
          }
          .arrow-up {
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 20px solid blue;
          }
          .page {
             {
              /* position: absolute;
            top: 8vh;
            right: 0.5vh; */
            }
            z-index: 100;
            visibility: ${visibility};
          }
        `}
      </style>
    </>
  );
}
