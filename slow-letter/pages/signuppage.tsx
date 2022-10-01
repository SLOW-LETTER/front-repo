import TypeIn from "../components/inputitem";
import ProjectTitle from "../components/project-title";
import PwCheck from "../components/pswCheck";
import Buttondefault from "../components/button";

import React, { useState, ChangeEvent } from "react";
import {
  LengthCheck,
  CapCheck,
  LowCheck,
  SpecialLetterCheck,
  EmailCheck,
} from "../function/validation";
import axios from "axios";
import { apiURL } from "../components/apiURL";
import { useRouter } from "next/router";
type InputEvent = ChangeEvent<HTMLInputElement>;

export default function Signup() {
  const [cnfrmError, setcnfrmError] = useState(false);
  const [pswInput, setpswInput] = useState("");
  const [cnfrmInput, setcnfrmInput] = useState("");
  const [pwValid, setpwValid] = useState(false);
  const [emailInput, setemailInput] = useState("");
  const [phoneNum, setphoneNum] = useState("");
  const [userName, setuserName] = useState("");
  const [emailCheck, setemailCheck] = useState(false);
  const [focus, setFocus] = useState("hidden");

  const router = useRouter();

  const onPasswordChange = (evnt: InputEvent) => {
    const pswValue = evnt?.target.value.trim(); //get inserted value in pswvalue
    setpswInput(pswValue); //change pswInput by using usestate
    {
      LengthCheck(pswValue) &&
      CapCheck(pswValue) &&
      LowCheck(pswValue) &&
      SpecialLetterCheck(pswValue)
        ? setpwValid(true)
        : setpwValid(false);
    } //if at least one of the validation does not pass it is not valid
    console.log(pswValue);
  };

  const onConfirmPasswordChange = (evnt: InputEvent) => {
    const cnfrmValue = evnt?.target.value.trim();
    setcnfrmInput(cnfrmValue);
    console.log(cnfrmValue);
    check(pswInput, cnfrmValue);
  };

  const onEmailChange = (evnt: InputEvent) => {
    const emailInput = evnt?.target.value.trim();
    setemailInput(emailInput);
    EmailCheck(emailInput) ? setemailCheck(true) : setemailCheck(false);
  };

  const onPhoneChange = (evnt: InputEvent) => {
    const phoneNum = evnt?.target.value.trim();
    setphoneNum(phoneNum);
    console.log(evnt);
  };

  const onUserNameChange = (evnt: InputEvent) => {
    const userName = evnt?.target.value.trim();
    setuserName(userName);
  };

  const check = (pswInput: string, cnfrmInput: string) => {
    //따로 함수선언
    if (cnfrmInput.length > 0) {
      if (pswInput === cnfrmInput) {
        setcnfrmError(true);
      } else {
        setcnfrmError(false);
      }
    }
  };
  const onFocus = (evnt: React.FocusEvent<HTMLElement>) => {
    setFocus("visible");
    console.log(evnt);
  };

  const onBlur = (evnt: InputEvent) => {
    setFocus("hidden");
  };

  return (
    <>
      <ProjectTitle
        containerTop="17rem"
        containerLeft="20rem"
        titleTop="0"
        titleLeft="0"
        subtitleTop="16rem"
        subtitleLeft="0"
      />
      <div className="login-container p-2">
        <div className="flex flex-col w-full items-start px-7 py-3 h-5/6 bg-white shadow-lg drop-shadow-2xl rounded-lg">
          <a className="font-bold text-sm text-black text-2xl">Sign Up!</a>
          <a className="text-sm text-black text-l">Please enter your info</a>
          <div className="flex flex-col py-3">
            <TypeIn
              ID="Email"
              Hint="Example@Example.com"
              Label="Email"
              Iconimg="/emailIcon.svg"
              IconHeight="30"
              IconWidth="30"
              Values={emailInput}
              onChange={onEmailChange}
            />
            {emailCheck ? (
              ""
            ) : (
              <div className="flex px-4 text-xs text-red-600">
                * Your email is not email format
              </div>
            )}
            <TypeIn
              ID="Username"
              Hint="UserName"
              Label="UserName"
              Iconimg="/UsernameIcon.svg"
              IconHeight="30"
              IconWidth="30"
              Values={userName}
              onChange={onUserNameChange}
            />
            <TypeIn
              ID="Password"
              Hint="Password"
              Label="Password"
              Iconimg="/PasswordIcon.svg"
              IconHeight="30"
              IconWidth="30"
              Values={pswInput}
              onChange={onPasswordChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            {pwValid ? (
              <PwCheck
                color="#3B9904"
                icon="/checksign.svg"
                visibility={focus}
              />
            ) : (
              <PwCheck
                color="rgb(238,96,91,0.8)"
                icon="/pswWarn.svg"
                visibility={focus}
              />
            )}

            <TypeIn
              ID="pswCheck"
              Hint="Confirm Password"
              Label="Confirm Password"
              Iconimg="/PasswordIcon.svg"
              IconHeight="30"
              IconWidth="30"
              Values={cnfrmInput}
              onChange={onConfirmPasswordChange}
            />
            <div
              className={
                cnfrmError ? "hidden" : "flex px-4 text-xs text-red-600"
              }
            >
              * Please match your password
            </div>
            <TypeIn
              ID="Phonenum"
              Hint="xxx-xxxx-xxxx"
              Label="Phone Number"
              Iconimg="/PhoneIcon.svg"
              IconHeight="30"
              IconWidth="30"
              Values={phoneNum}
              onChange={onPhoneChange}
            />
          </div>
          <Buttondefault
            text="Sign up"
            btnWidth={"20rem"}
            btnColor={"#2563eb"}
            onClick={() => {
              if (pwValid === false) {
                alert("You have to pass the password validation");
              } else {
                const form = new FormData();
                form.append("email", emailInput);
                form.append("password", cnfrmInput);
                form.append("name", userName);
                form.append("phone", phoneNum);
                axios
                  .post(`${apiURL}/users/join`, form, {
                    headers: {
                      "content-type": "multipart/form-data",
                    },
                  })
                  .then((res) => router.push("/"))
                  .catch((err) => console.log(err));
              }
            }}
          />
        </div>
        <div className="flex flex-row items-start  px-7 py-5">
          <a className="inline-block align-baseline font-bold text-m text-gray-600 px-4">
            Have an account already?
          </a>
          <a
            className="inline-block align-baseline font-bold text-m text-blue-600 hover:text-blue-darker"
            href="/loginpage"
          >
            Sign in here!
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .login-container {
            height: 53rem;
            position: absolute;
            top: 8em;
            right: 22.5em;
            padding:1em;
          }
          .Button{
            padding: 1em:
          }
          .square{
            background: blue;
            top: 290px;
            right:140px;
          }
        `}
      </style>
    </>
  );
}
