import TypeIn from "../components/inputitem";
import ProjectTitle from "../components/title/project-title";
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
import Link from "next/link";
type InputEvent = ChangeEvent<HTMLInputElement>;

export default function Signup() {
  const [cnfrmError, setcnfrmError] = useState(true);
  const [pswInput, setpswInput] = useState("");
  const [cnfrmInput, setcnfrmInput] = useState("");
  const [pwValid, setpwValid] = useState(false);
  const [emailInput, setemailInput] = useState("");
  const [phoneNum, setphoneNum] = useState("");
  const [userName, setuserName] = useState("");
  const [emailCheck, setemailCheck] = useState(true);
  const [focus, setFocus] = useState("none");

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
    }
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
  };

  const onBlur = (evnt: InputEvent) => {
    setFocus("none");
  };

  return (
    <>
      <div className="page-conatiner flex w-full h-full ">
        <div className="page-subleft flex w-full h-full items-center place-items-center justify-center">
          <ProjectTitle />
        </div>
        <div className="page-subright flex flex-col w-full h-full items-center justify-center">
          <div className="signup-container flex flex-col p-4 bg-white shadow-lg drop-shadow-2xl space-y-2 rounded-lg">
            <div className="signup-header flex flex-col space-y-1">
              <span className="font-bold text-sm text-black text-2xl">
                Sign Up!
              </span>
              <span className="text-sm text-black text-l">
                Please enter your info
              </span>
            </div>
            <div className="signup-list flex flex-col  space-y-4 py-1">
              <TypeIn
                id="Email"
                hint="Example@Example.com"
                label="Email"
                iconImg="/emailIcon.svg"
                values={emailInput}
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
                id="Username"
                hint="UserName"
                label="UserName"
                iconImg="/UsernameIcon.svg"
                values={userName}
                onChange={onUserNameChange}
              />
              <TypeIn
                id="Password"
                hint="Password"
                label="Password"
                iconImg="/PasswordIcon.svg"
                values={pswInput}
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
                id="pswCheck"
                hint="Confirm Password"
                label="Confirm Password"
                iconImg="/PasswordIcon.svg"
                values={cnfrmInput}
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
                id="Phonenum"
                hint="xxx-xxxx-xxxx"
                label="Phone Number"
                iconImg="/PhoneIcon.svg"
                values={phoneNum}
                onChange={onPhoneChange}
              />
            </div>
            <Buttondefault
              text="Sign up"
              btnWidth={"16rem"}
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

          <div className="flex flex-row items-start space-x-4 mt-4">
            <span className="inline-block align-baseline font-bold text-m text-gray-600">
              Have an account already?
            </span>
            <Link href="/loginpage">
              <a className="inline-block align-baseline font-bold text-m text-blue-600 hover:text-blue-darker">
                Sign in here!
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
      .page-subleft{
    
      }
        `}</style>
    </>
  );
}
