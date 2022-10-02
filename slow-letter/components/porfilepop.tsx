import Buttondefault from "./button/button";
import Image from "next/image";

export default function Popover() {
  return (
    <>
      <div className="page  hidden flex flex-col items-center">
        <div className="arrow-up items-center"></div>
        <div className="pop-over flex flex-col bg-white rounded-3xl p-8 border-4 border-blue-600 space-y-5">
          <div>
            <Image src="/defaultProfile.svg" width="50px" height="50px" />
          </div>
          <span className="text-center font-semibold ">email</span>
          <Buttondefault
            text="My Setting"
            btnWidth="150px"
            btnHeight="35px"
            btnColor="gray"
            radius="30px"
            //onClick
          ></Buttondefault>
          <Buttondefault
            text="Sign Out"
            btnWidth="150px"
            btnHeight="35px"
            btnColor="red"
            radius="30px"
            //onClick
          ></Buttondefault>
        </div>
      </div>
      <style jsx>
        {`
          .arrow-up {
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 20px solid blue;
          }
        `}
      </style>
    </>
  );
}
