import Link from "next/link";
import Buttondefault from "../button/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Custom_Popover from "../porfilepop";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  ButtonGroup,
  Box,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { MdAccountCircle } from "react-icons/md";
//import { removeCookies } from "../../function/cookie-handler/cookieHandler";
import { useStore } from "../zustand_stores/store";
import { removeCookies } from "../../function/cookie-handler/cookieHandler";
import axios from "axios";
import { apiURL } from "../apiURL";

export default function NavItems() {
  const router = useRouter();
  let userToken: string = useStore((state: any) => state.userToken);
  const [Email, setEmail] = useState("Example@Example.com");
  const [profilePop, setProfilePop] = useState<{
    pic: File | string;
    name: string;
  }>({
    name: "Username",
    pic: "/defaultProfile.svg",
  });

  function mySetting() {
    console.log("clicked");

    router.push("/mypage/account/accountinfo");
  }

  function signOut() {
    removeCookies("accessToken", { path: "/" });
    removeCookies("refreshToken", { path: "/" });
    router.push("/");

    // const resetToken = useStore(() => state.resetUserToken);
    // userToken = resetToken;
  }

  useEffect(() => {
    const form = new FormData();
    axios
      .get(`${apiURL}/users-info`, { headers: { "X-AUTH-TOKEN": userToken } })
      .then((res) => {
        setEmail(res.data.payload.email);
        setProfilePop({ ...profilePop, name: res.data.payload.name });

        //setProfile({ ...profilePop, pic: res.data.payload.profileImageUrl });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userToken]);

  return (
    <>
      <nav className="nav-items-container">
        <div className="sending-container">
          <Link href="/letter/template">
            <a>
              <div className="send-icon"></div>
            </a>
          </Link>
        </div>
        <div className="notification-container">
          <div className="notification-sub-icon"></div>
          <div className="notification-icon"></div>
        </div>
        <div className="ticket-container">
          <div className="ticket-icon"></div>
        </div>
        {/* <button
          className="profile-container flex flex-col"
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <div className="profile-icon"></div>
        </button> */}
        <Popover placement="bottom-end" closeOnBlur={false}>
          <PopoverTrigger>
            <IconButton
              variant="outline"
              borderRadius={"60%"}
              colorScheme="blue"
              aria-label="Call Sage"
              fontSize="33px"
              icon={<MdAccountCircle />}
            />
          </PopoverTrigger>

          <PopoverContent
            color="teal.100"
            bg="white"
            width="110%"
            borderRadius={"5%"}
            borderWidth={"2px"}
            borderColor="blue.800"
          >
            <PopoverCloseButton bg="purple.500" />
            <PopoverBody>
              <div className="items-inside items-center justify-center">
                <div className="pop-over flex flex-col  items-center justify-center  rounded-3xl p-8 ">
                  <div>
                    <Image
                      src="/defaultProfile.svg"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <span className="text-center text-black font-semibold ">
                    {profilePop.name}
                  </span>
                  <span className="text-center text-black font-semibold ">
                    {Email}
                  </span>
                  <div className="btn-Container space-y-4 mt-4">
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
            </PopoverBody>
          </PopoverContent>
        </Popover>

        {/* <Link href={"/mypage/account/accountinfo"}>
          <a className="profile-container flex flex-col"></a>
        </Link> */}
      </nav>
      <Popover />
      <style jsx>
        {`
          .nav-items-container {
            width: 15rem;
            height: 2.5rem;
            position: absolute;
            right: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
          }
          .sending-container {
            width: 2.5rem;
            height: 2.5rem;
            opacity: 0.800000011920929;
            border: 1px solid rgba(195, 212, 233, 0.4000000059604645);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sending-container:hover {
            opacity: 0.6;
          }
          .send-icon {
            width: 1.5rem;
            height: 1.5rem;
            background: url("/letter-send-icon.svg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
          .notification-container {
            width: 2.5rem;
            height: 2.5rem;
            opacity: 0.800000011920929;
            border: 1px solid rgba(195, 212, 233, 0.4000000059604645);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .notification-container:hover {
            opacity: 0.6;
          }
          .notification-icon {
            width: 1rem;
            height: 1.3rem;
            background: url("/notification-icon.svg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
          .notification-sub-icon {
            width: 0.7rem;
            height: 0.7rem;
            background: rgba(255, 68, 35, 1);
            position: absolute;
            top: 0.1rem;
            left: 6.4rem;
            border-radius: 50%;
          }
          .ticket-container {
            width: 2.5rem;
            height: 2.5rem;
            opacity: 0.800000011920929;
            border: 1px solid rgba(195, 212, 233, 0.4000000059604645);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ticket-container:hover {
            opacity: 0.6;
          }
          .ticket-icon {
            width: 1.5rem;
            height: 1.5rem;
            background: url("/ticket-icon.svg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
          .profile-container {
            width: 2.5rem;
            height: 2.5rem;
            opacity: 0.800000011920929;
            border: 1px solid rgba(195, 212, 233, 0.4000000059604645);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .profile-container:hover {
            opacity: 0.6;
          }
          .profile-icon {
            width: 1.5rem;
            height: 1.5rem;
            background: url("/profile-icon.svg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
        `}
      </style>
    </>
  );
}
