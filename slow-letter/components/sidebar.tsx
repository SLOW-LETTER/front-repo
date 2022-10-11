import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import * as React from "react";

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const router = useRouter();

  const onClickAccInfo = () => {
    router.push("/mypage/account/accountinfo");
  };

  const onClickChangePW = () => {
    router.push("/mypage/account/changePW");
  };
  const onClickDelete = () => {
    router.push("/mypage/account/deleteaccount");
  };
  const onClickTickets = () => {
    router.push("/mypage/myTickets");
  };
  const onClickNotification = () => {
    router.push("/mypage/notification");
  };
  return (
    <>
      <aside
        className="side-bar-cover flex flex-col w-56 h-full py-24 px-5 items-start bg-white"
        x-show="asideOpen"
      >
        <ul className="flex flex-col gap-y-2 space-y-8 ">
          <li className="w-48">
            <button
              onClick={onClickAccInfo}
              className={
                router.pathname ===
                ("/mypage/account/accountinfo" ||
                  "/mypage/account/changePW" ||
                  "/mypage/account/deleteaccount")
                  ? "Account flex flex-row p-2 py-4  text-white hover:text-blue bg-blue-600 rounded-lg text-start text-xl"
                  : "Account flex flex-row p-2 py-4  text-black hover:text-white bg-white hover:bg-blue-600 rounded-lg text-start text-xl"
              }
            >
              <Image
                src={
                  router.pathname ===
                  ("/mypage/account/accountinfo" ||
                    "/mypage/account/changePW" ||
                    "/mypage/account/deleteaccount")
                    ? "/Accountactive.svg"
                    : "/Account.svg"
                }
                width="30"
                height="30"
                className="Account-Icon focus:fill-white"
              />
              <span>Account</span>
            </button>
            <ul id="drop-menu">
              <li>
                <button
                  onClick={onClickAccInfo}
                  className={
                    router.pathname === "/mypage/account/accountinfo"
                      ? "Account-Info flex flex-col items-start w-full p-2 pl-10 text-sm underline text-blue-600"
                      : "Account-Info flex flex-col items-start w-full p-2 pl-10 text-sm text-black hover:text-blue-600 hover:underline "
                  }
                >
                  Account Info
                </button>
              </li>
              <li>
                <div>
                  <button
                    className={
                      router.pathname === "/mypage/account/changePW"
                        ? "Change-PW flex flex-col items-start w-full p-2 pl-10  text-sm text-blue-600 underline"
                        : "Change-PW flex flex-col items-start w-full p-2 pl-10  text-sm text-black hover:text-blue-600 hover:underline"
                    }
                    onClick={onClickChangePW}
                  >
                    Change Password
                  </button>
                </div>
              </li>
              <li>
                <div>
                  <button
                    className={
                      router.pathname === "/mypage/account/deleteaccount"
                        ? "Del-Acc flex flex-col items-start w-full p-2 pl-10 text-sm text-blue-600 underline"
                        : "Del-Acc flex flex-col items-start w-full p-2 pl-10 text-sm text-black hover:text-blue-600 hover:underline"
                    }
                    onClick={onClickDelete}
                  >
                    Delete Account
                  </button>
                </div>
              </li>
            </ul>
          </li>

          <li onClick={onClickTickets}>
            <div>
              <button
                className={
                  router.pathname === "/mypage/myTickets"
                    ? "Tickets flex flex-row p-2 py-4 text-white  bg-blue-600  rounded-lg text-start text-xl"
                    : "Tickets flex flex-row p-2 py-4 text-black hover:text-blue bg-white hover:bg-blue-600  hover:text-white rounded-lg text-start text-xl"
                }
              >
                <Image
                  src="/Tickets.svg"
                  //router.pathname === "/mypage/myTickets"
                  //? "/TicketActive.svg":
                  width="30"
                  height="30"
                />
                <span>Tickets</span>
              </button>
            </div>
          </li>

          <li onClick={onClickNotification}>
            <div>
              <button
                className={
                  router.pathname === "/mypage/notification"
                    ? "notification flex flex-row p-2 py-4 text-white bg-blue-600 rounded-lg text-start text-xl"
                    : "notification flex flex-row p-2 py-4 text-black hover:text-white bg-white hover:bg-blue-600 rounded-lg text-start text-xl"
                }
              >
                <Image
                  src={
                    "/Notification.svg"
                    // router.pathname === "/mypage/notification"
                    //   ? "/NotificationAcitive.svg"
                    //   : "/Notification.svg"
                  }
                  width="30"
                  height="30"
                />
                <span>Notification</span>
              </button>
            </div>
          </li>
        </ul>
      </aside>
      <style jsx>{`
        .side-bar-cover {
          position: absolute;
          top: 0px;
          display: inline-block;
        }
      `}</style>
    </>
  );
}
