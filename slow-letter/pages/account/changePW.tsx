import Image from "next/image";
import Sidebar from "../../components/sidebar";
import SettingItems from "../../components/setting-Items";
import SettingModal from "../../components/setting-modal";
import { Button, useToast } from "@chakra-ui/react";
export default function ChangePw() {
  const toast = useToast();
  return (
    <>
      <SettingModal />
      <div className="Page flex flex-col items-center ">
        <div className="Profile-container flex flex-row py-8">
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
        <div className="input-container items-center py-14">
          <hr className="line py-2" />
          <SettingItems
            ID="Editpsw"
            Hint="*************"
            Label="Password"
            Types="Password"
          />
          <hr className="line py-2" />
          <SettingItems
            ID="Checkpsw"
            Hint="*************"
            Label="Confrim Password"
            Types="Password"
          />
        </div>
        <Button
          className="Changebtn px-10"
          onClick={() => {
            toast({
              title: "You have Successfully Changed your password!",
              status: "success",
              position: "bottom",
              isClosable: true,
              duration: 2000,
            });
          }}
          colorScheme="red"
          width="40"
          background="red"
          variant={"solid"}
        >
          Change Password
        </Button>
      </div>
      <style jsx>
        {`
          .Page {
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
        `}
      </style>
    </>
  );
}
