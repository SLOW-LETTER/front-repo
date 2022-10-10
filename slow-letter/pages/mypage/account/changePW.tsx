import Image from "next/image";
import Sidebar from "../../../components/sidebar";
import SettingItems from "../../../components/setting-Items";
import SettingModal from "../../../components/setting-modal";
import { Button, useToast } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../components/zustand_stores/store";
import { apiURL } from "../../../components/apiURL";
import { StringLiteral } from "typescript";
import { stringify } from "querystring";
import axios from "axios";

export default function ChangePw() {
  const toast = useToast();
  const [pswValue, setpswInput] = useState("");
  const [confirmPsw, setconfirmPsw] = useState("");
  const [newPsw, setNewPsw] = useState("");
  const [pswMatch, setpsMatch] = useState(true);
  const [profile, setProfile] = useState<{
    Email: string;
    name: string;
    Pic: File | string;
  }>({
    Email: "Example@Example.com",
    name: "Example",
    Pic: "/defaultProfile.svg",
  });

  const userToken = useStore((state: any) => state.userToken);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const values = e.target;

    values.id === "editPsw"
      ? setpswInput(values.value.trim())
      : values.id === "checkPsw"
      ? setconfirmPsw(values.value.trim())
      : setNewPsw(values.value.trim());

    pswMatchCheck();
  }
  function pswMatchCheck() {
    pswValue === confirmPsw ? setpsMatch(true) : setpsMatch(false);
    if (confirmPsw.length > 0) {
      if (pswValue === confirmPsw) {
        setpsMatch(true);
      } else {
        setpsMatch(false);
      }
    }
  }
  useEffect(() => {
    const form = new FormData();
    axios
      .get(`${apiURL}/users-info`, { headers: { "X-AUTH-TOKEN": userToken } })
      .then((res) => {
        setProfile((prevState) => {
          return {
            ...prevState,
            Email: res.data.payload.email,
          };
        });
        setProfile((prevState) => {
          return {
            ...prevState,
            name: res.data.payload.name,
          };
        });
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <div className="pswChange-page flex h-5/6">
        <div className="modal-container bg-white w-full h-full shadow drop-shadow-lg rounded-lg">
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
                <span>{profile.name}</span>
                <span>{profile.Email}</span>
              </div>
            </div>
            <div className="input-container items-center py-8">
              <hr className="line py-2" />
              <SettingItems
                ID="editPsw"
                Hint="*************"
                Label="Password"
                Types="Password"
                values={pswValue}
                onChange={onChange}
              />
              <hr className="line py-2" />
              <SettingItems
                ID="checkPsw"
                Hint="*************"
                Label="Confrim Password"
                Types="Password"
                values={confirmPsw}
                onChange={onChange}
              />
              <hr className="line py-2" />
              <SettingItems
                ID="newPsw"
                Hint="*************"
                Label="New Password"
                Types="Password"
                values={newPsw}
                onChange={onChange}
              />
            </div>
            <Button
              className="Changebtn px-10"
              colorScheme="red"
              width="40"
              background="red"
              variant={"solid"}
              onClick={(event) => {
                event.preventDefault();

                if (pswMatch === false) {
                  alert(
                    "Your Password does not match with the confirm password"
                  );
                } else {
                  const form = new FormData();
                  form.append("oldPassword", pswValue);
                  form.append("newPassword", newPsw);
                  form.append("X-AUTH-TOKEN", userToken);
                  axios
                    .patch(`${apiURL}/users-info/password`, {
                      header: { "X-AUTH-TOKEN": userToken },
                      form,
                    })
                    .then((res) => {
                      toast({
                        title: "You have Successfully Changed your password!",
                        status: "success",
                        position: "bottom",
                        isClosable: true,
                        duration: 2000,
                      });
                    })
                    .catch((err) => {
                      console.log(err), console.log(userToken);
                    });
                }
              }}
            >
              Change Password
            </Button>
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
