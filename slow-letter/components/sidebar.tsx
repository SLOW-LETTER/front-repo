import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const router = useRouter();

  const onClick = () => {
    setToggle((prev) => (prev === true ? false : true));
  };
  return (
    <>
      <aside
        className="side-bar-cover flex flex-col w-56 h-full py-24 px-5 items-start bg-white"
        x-show="asideOpen"
      >
        <ul className="flex flex-col gap-y-2 space-y-8 ">
          <li onClick={onClick} className="w-48">
            <a
              href="/mypage/account/accountinfo"
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
            </a>
            <ul id="drop-menu">
              <li>
                <a
                  href="/mypage/account/accountinfo"
                  className={
                    router.pathname === "/mypage/account/accountinfo"
                      ? "Account-Info flex flex-col items-start w-full p-2 pl-10 text-sm underline text-blue-600"
                      : "Account-Info flex flex-col items-start w-full p-2 pl-10 text-sm text-black hover:text-blue-600 hover:underline "
                  }
                >
                  Account Info
                </a>
              </li>
              <li>
                <a
                  href="/mypage/account/changePW"
                  className={
                    router.pathname === "/mypage/account/changePW"
                      ? "Change-PW flex flex-col items-start w-full p-2 pl-10  text-sm text-blue-600 underline"
                      : "Change-PW flex flex-col items-start w-full p-2 pl-10  text-sm text-black hover:text-blue-600 hover:underline"
                  }
                >
                  Change Password
                </a>
              </li>
              <li>
                <a
                  href="/mypage/account/deleteaccount"
                  className={
                    router.pathname === "/mypage/account/deleteaccount"
                      ? "Del-Acc flex flex-col items-start w-full p-2 pl-10 text-sm text-blue-600 underline"
                      : "Del-Acc flex flex-col items-start w-full p-2 pl-10 text-sm text-black hover:text-blue-600 hover:underline"
                  }
                >
                  Delete Account
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="/mypage/tickets"
              className={
                router.pathname === "/mypage/tickets"
                  ? "Tickets flex flex-row p-2 py-4 text-white  bg-blue-600  rounded-lg text-start text-xl"
                  : "Tickets flex flex-row p-2 py-4 text-black hover:text-blue bg-white hover:bg-blue-600  hover:text-white rounded-lg text-start text-xl"
              }
            >
              <Image src="/Tickets.svg" width="30" height="30" />
              <span>Tickets</span>
            </a>
          </li>
          <li>
            <a
              href="/mypage/notification"
              className={
                router.pathname === "/mypage/notification"
                  ? "notification flex flex-row p-2 py-4 text-white bg-blue-600 rounded-lg text-start text-xl"
                  : "notification flex flex-row p-2 py-4 text-black hover:text-white bg-white hover:bg-blue-600 rounded-lg text-start text-xl"
              }
            >
              <Image src="/Notification.svg" width="30" height="30" />
              <span>Notification</span>
            </a>
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
