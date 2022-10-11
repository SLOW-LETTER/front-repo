import Image from "next/image";
import Checkbox from "../../components/input/checkbox";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import { useStore } from "../../components/zustand_stores/store";
import Buttondefault from "../../components/button/button";
import axios from "axios";

import { useRouter } from "next/router";
export default function Notification() {
  const [checkBox1, setcheckBox1] = useState(false);
  const [checkBox2, setcheckBox2] = useState(false);
  const [checkBox3, setcheckBox3] = useState(false);
  const [checkBox4, setcheckBox4] = useState(false);

  const [Email, setEmail] = useState("Example@Example.com");
  const [name, setName] = useState("Example");
  const [pic, setPic] = useState("/defaultProfile.svg");
  const userToken: string = useStore((state: any) => state.userToken);
  const router = useRouter();
  type InputEvent = ChangeEvent<HTMLInputElement>;

  useEffect(() => {
    const form = new FormData();
    form.append("X-AUTH-TOKEN", userToken);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/users-info`)
      .then((res) => {
        setEmail(res.data.payload.email);
        setName(res.data.payload.name);
        //setPic(res.data.payload.profileImageUrl);
        setcheckBox1(res.data.payload.isCheckedOtherSend);
        setcheckBox2(res.data.payload.isCheckedMyReceive);
        setcheckBox3(res.data.payload.isCheckedmysend);
        setcheckBox4(res.data.payload.isCheckedOtherReceive);

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickCheck1 = () => {
    if (checkBox1 === true) {
      setcheckBox1(false);
    } else {
      setcheckBox1(true);
    }
  };

  const onClickCheck2 = () => {
    if (checkBox2 === true) {
      setcheckBox2(false);
    } else {
      setcheckBox2(true);
    }
  };

  const onClickCheck3 = () => {
    if (checkBox3 === true) {
      setcheckBox3(false);
    } else {
      setcheckBox3(true);
    }
  };

  const onClickCheck4 = () => {
    if (checkBox4 === true) {
      setcheckBox4(false);
    } else {
      setcheckBox4(true);
    }
  };

  return (
    <>
      <div className="notifcation-page flex h-5/6">
        <div className="modal-container bg-white w-full h-full shadow drop-shadow-lg rounded-lg">
          <div className="Page-container w-full flex flex-col items-center justify-center space-y-2">
            <div className="Profile-container flex flex-row py-12">
              <Image
                className="Profile-pic round rounded-full "
                src={pic}
                width="100"
                height="100"
                border-radius="30%"
              ></Image>
              <div className="ProfileID flex flex-col py-5 px-7">
                <span>{name}</span>
                <span>{Email}</span>
              </div>
            </div>

            <div className="notification-header justify-start space-y-2">
              <label className="font-bold text-xl pl-10">My Settings</label>

              <hr className="line py-2" />
            </div>

            <div className="checkbox-container flex flex-row w-96 justify-between">
              <div className="label font-semibold p-3 w-56 text-start">
                When others send you tickets
              </div>
              <input
                id=""
                type="checkbox"
                onClick={onClickCheck1}
                className="checkbox flex border-blue-300 w-32 h-8 mr-2 mt-2  rounded-lg cursor-pointer hover:bg-blue-100  border-3 border-blue-600 "
              />
            </div>

            <div className="checkbox-container flex flex-row w-96 justify-between">
              <div className="label font-semibold p-3 w-56 text-start">
                When you recieve tckets
              </div>
              <input
                id=""
                type="checkbox"
                onClick={onClickCheck2}
                className="checkbox flex border-blue-300 w-32 h-8 mr-2 mt-2  rounded-lg cursor-pointer hover:bg-blue-100  border-3 border-blue-600 "
              />
            </div>
            <div className="checkbox-container flex flex-row w-96 justify-between">
              <div className="label font-semibold p-3 w-56 text-start">
                When you send tickets
              </div>
              <input
                id=""
                type="checkbox"
                onClick={onClickCheck3}
                className="checkbox flex border-blue-300 w-32 h-8 mr-2 mt-2  rounded-lg cursor-pointer hover:bg-blue-100  border-3 border-blue-600 "
              />
            </div>

            <div className="checkbox-container flex flex-row w-96 justify-between">
              <div className="label font-semibold p-3 w-56 text-start">
                When you letter arrive to others
              </div>
              <input
                id=""
                type="checkbox"
                onClick={onClickCheck4}
                className="checkbox flex border-blue-300 w-32 h-8 mr-2 mt-2  rounded-lg cursor-pointer hover:bg-blue-100  border-3 border-blue-600 "
              />
            </div>

            <Buttondefault
              text={"Save"}
              btnWidth={"10em"}
              btnColor={"#2563eb"}
              onClick={() => {
                const form = new FormData();
                // form.append("isCheckedOtherSend", checkBox1);
                // form.append("isCheckedMyReceive", checkBox2);
                // form.append("isCheckedmysend", checkBox3);
                // form.append("isCheckedOtherReceive", checkBox4);
                axios
                  .patch(
                    `${process.env.NEXT_PUBLIC_API_URL}/users-info/settings`,
                    {
                      params: {
                        isCheckedOtherSend: checkBox1,
                        isCheckedMyRecieve: checkBox2,
                        isCheckedmysend: checkBox3,
                        isCheckedOtherReceive: checkBox4,
                      },
                    }
                  )
                  .then((res) => {
                    alert("succesfully changed");
                    router.push("/mypage/notification");
                  })
                  .catch((err) => console.log(err));
              }}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
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
