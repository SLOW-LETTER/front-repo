import SettingModal from "../../components/setting-modal";
import Image from "next/image";
import Checkbox from "../../components/input/checkbox";
import { useState } from "react";
import Buttondefault from "../../components/button/button";
export default function Notification() {
  const [checkBox1, setcheckBox1] = useState(false);
  const [checkBox2, setcheckBox2] = useState(false);
  const [checkBox3, setcheckBox3] = useState(false);
  const [checkBox4, setcheckBox4] = useState(false);

  function onClick1() {}
  function onClick() {}
  return (
    <>
      <div className="notifcation-page flex h-5/6">
        <div className="modal-container bg-white w-full h-full shadow drop-shadow-lg rounded-lg">
          <div className="Page-container w-full flex flex-col items-center justify-center space-y-2">
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

            <div className="notification-header justify-start space-y-2">
              <label className="font-bold text-xl pl-10">My Settings</label>

              <hr className="line py-2" />
            </div>
            <Checkbox Label="when others send you tickets" />

            <Checkbox Label="when you recieve tickets " />

            <Checkbox Label="when you send tickets " />

            <Checkbox Label="when your letter arrive to others" />

            <Buttondefault text={"Save"} btnWidth={"10em"} btnColor={"blue"} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
           {
            /* .Page-container {
            position: absolute;
            top: 6em;
            right: 23em;
          } */
          }
          .modal-container {
            position: relative;
            margin-left: 45vh;
            width: 120vh;
            margin-top: 3vh;
          }
          .Profile-pic {
            border-radius: 50%;
          }
          .line {
            width: 500px;
            text-align: left;
            margin-left: 0px;
          }
        `}
      </style>
    </>
  );
}
