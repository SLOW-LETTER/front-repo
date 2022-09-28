import SettingModal from "../../components/setting-modal";
import Image from "next/image";
import Checkbox from "../../components/checkbox";
import { useState } from "react";
import Buttondefault from "../../components/button";
export default function Notification() {
  const [checkBox1, setcheckBox1] = useState(false);
  const [checkBox2, setcheckBox2] = useState(false);
  const [checkBox3, setcheckBox3] = useState(false);
  const [checkBox4, setcheckBox4] = useState(false);

  function onClick1() {}
  function onClick() {}
  return (
    <>
      <div className="Page flex">
        <SettingModal />
        <div className="Page-container flex flex-col items-center space-y-4">
          <div className="Profile-container flex flex-row py-12">
            <Image
              className="Profile-pic round rounded-full "
              src="/defaultProfile.svg"
              width="100"
              height="100"
              border-radius="30%"
            ></Image>
            <div className="ProfileID flex flex-col py-5 px-7">
              <span>Email</span>
              <span>Example@example.com</span>
            </div>
          </div>
          <label className="mysetting font-bold text-xl">My Settings</label>
          <hr className="line py-2" />
          <Checkbox Label="when others send you tickets" />

          <Checkbox Label="when you recieve tickets " />

          <Checkbox Label="when you send tickets " />

          <Checkbox Label="when your letter arrive to others" />

          <Buttondefault text={"Save"} btnWidth={"10em"} btnColor={"blue"} />
        </div>
      </div>
      <style jsx>
        {`
          .Page-container {
            position: absolute;
            top: 6em;
            right: 23em;
          }
          .Profile-pic {
            border-radius: 50%;
          }
          .line {
            width: 500px;
            text-align: left;
            margin-left: 0px;
          }
          .mysetting {
            position: absolute;
            top: 8em;
            left: 10px;
          }
        `}
      </style>
    </>
  );
}
