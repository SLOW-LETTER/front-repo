import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const onClick = () => {
    setToggle((prev) => (prev === true ? false : true));
  };
  return (
    <>
      <div className=" side-bar-cover flex gap-y-20">
        <aside
          className="flex flex-col w-56 h-screen py-20 px-5 items-start bg-white z-10"
          x-show="asideOpen"
        >
          <ul className="flex flex-col gap-y-2 space-y-5 ">
            <li onClick={onClick} className="w-48">
              <a
                href="/account/accountinfo"
                className="flex flex-row p-2 py-4  text-black hover:text-blue bg-white hover:bg-blue-600 focus:bg-blue-600 rounded-lg text-start text-xl"
              >
                <Image
                  src={toggle === true ? "/Account.svg" : "/Accountactive.svg"}
                  width="30"
                  height="30"
                  className="focus:fill-white"
                />
                <span>Account</span>
              </a>
              <ul id="drop-menu">
                <li>
                  <a
                    href="/account/accountinfo"
                    className="flex flex-col items-start w-full p-2 pl-10 text-sm text-black hover:text-blue-600 hover:underline focus:underline focus:text-blue-600"
                  >
                    Account Info
                  </a>
                </li>
                <li>
                  <a
                    href="/account/changePW"
                    className="flex flex-col items-start w-full p-2 pl-10  text-sm text-black hover:text-blue-600 hover:underline focus:underline focus:text-blue-600"
                  >
                    Change Password
                  </a>
                </li>
                <li>
                  <a
                    href="/account/deleteaccount"
                    className="flex flex-col items-start w-full p-2 pl-10 text-sm text-black hover:text-blue-600 hover:underline focus:underline focus:text-blue-600"
                  >
                    Delete Account
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row p-2 py-4 text-black hover:text-blue bg-white hover:bg-blue-600  focus:bg-blue-600 rounded-lg text-start text-xl"
              >
                <Image src="/Tickets.svg" width="30" height="30" />
                <span>Tickets</span>
              </a>
            </li>
            <li>
              <a
                href="/notification"
                className="flex flex-row p-2 py-4 text-black hover:text-blue bg-white hover:bg-blue-600 focus:bg-blue-600 rounded-lg text-start text-xl"
              >
                <Image src="/Notification.svg" width="30" height="30" />
                <span>Notification</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
