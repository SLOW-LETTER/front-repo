import TypeIn from "../components/input/inputitem";
import ProjectTitle from "../components/main-title/project-title";
import PwCheck from "../components/signup/pswCheck";
import Buttondefault from "../components/button/button";

import React, { useState, ChangeEvent } from "react";
import {
  lengthCheck,
  capCheck,
  lowCheck,
  specialLetterCheck,
  emailValid,
} from "../function/validation";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useStore } from "../components/zustand_stores/store";

type InputEvent = ChangeEvent<HTMLInputElement>;

export default function Signup() {
  const [cnfrmError, setcnfrmError] = useState(true);
  const [pswInput, setpswInput] = useState("");
  const [cnfrmInput, setcnfrmInput] = useState("");
  const [pwValid, setpwValid] = useState(false);
  const [emailInput, setemailInput] = useState("");
  const [phoneNum, setphoneNum] = useState("");
  const [userName, setuserName] = useState("");
  const [emailCheck, setemailCheck] = useState(false); // this is to check if user pass the email test  "@"
  const [focus, setFocus] = useState("hidden");
  const [msgHide, setmsgHide] = useState(true);
  const [emailDuplicate, setemailDuplicate] = useState(false); //this is to check if email duplicate
  const userToken: string = useStore((state: any) => state.userToken);

  const router = useRouter();

  const onPasswordChange = (evnt: InputEvent) => {
    const pswValue = evnt?.target.value.trim(); //get inserted value in pswvalue
    setpswInput(pswValue); //change pswInput by using usestate
    {
      lengthCheck(pswValue) &&
      capCheck(pswValue) &&
      lowCheck(pswValue) &&
      specialLetterCheck(pswValue)
        ? setpwValid(true)
        : setpwValid(false);
    }
  };

  const onConfirmPasswordChange = (evnt: InputEvent) => {
    const cnfrmValue = evnt?.target.value.trim();
    setcnfrmInput(cnfrmValue);
    check(pswInput, cnfrmValue);
  };

  const onEmailChange = (evnt: InputEvent) => {
    const emailInput = evnt?.target.value.trim();
    setemailInput(emailInput);
    {
      emailInput !== ""
        ? emailValid(emailInput)
          ? (setemailCheck(true), setmsgHide(true))
          : (setemailCheck(false), setmsgHide(false))
        : alert("Please enter valid Email Address");
    }
  };

  const onPhoneChange = (evnt: InputEvent) => {
    const phoneNum = evnt?.target.value.trim();
    setphoneNum(phoneNum);
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
  const onFocus = () => {
    setFocus("inline");
  };

  const onBlur = () => {
    setFocus("hidden");
  };

  return (
    <>
      <div className="Signuppage-conatiner flex w-full h-full ">
        <div className="page-subleft flex w-full h-full items-center place-items-center justify-center">
          <ProjectTitle />
        </div>
        <div className="page-subright flex flex-col w-full h-full items-center justify-center">
          <div className="signup-container flex flex-col p-4 px-10 bg-white shadow-lg drop-shadow-2xl space-y-2 rounded-lg">
            <div className="signup-header flex flex-col space-y-1">
              <span className="font-bold text-sm text-black text-2xl">
                Sign Up!
              </span>
              <span className="text-sm text-black text-l">
                Please enter your info
              </span>
            </div>

            <div className="signup-list flex flex-col  space-y-3 py-1">
              <div className="emailCheckBtn">
                <Buttondefault
                  text={"Check!"}
                  btnWidth={"60px"}
                  btnColor={""}
                  fontSize={"13px"}
                  btnHeight={"27px"}
                  onClick={() => {
                    if (emailInput === "") {
                      alert("Please enter valid email address");
                    } else {
                      const form = new FormData();
                      form.append("email", emailInput);
                      axios
                        .post(`${process.env.NEXT_PUBLIC_API_URL}/users/email/validation`, form)
                        .then((res) => {
                          setemailDuplicate(res.data.payload?.validation);
                        })
                        .catch((err) => console.log(err));
                      {
                        emailDuplicate
                          ? emailCheck
                            ? alert("This means it passed the duplicate test")
                            : alert(
                                "this means that it didnot pass email valid test"
                              )
                          : alert(
                              "This is means it did no pass the duplicate test"
                            );
                      }
                    }
                  }}
                />
              </div>
              <TypeIn
                width="16rem"
                height="2rem"
                id="Email"
                hint="Example@Example.com"
                label="Email"
                placeholderFontSize="14px"
                labelFontSize=".9rem"
                iconImg="/emailIcon.svg"
                values={emailInput}
                onChange={onEmailChange}
              />
              {msgHide ? (
                <></>
              ) : (
                <div className="flex px-4 text-xs text-red-600">
                  * Your email is not email format
                </div>
              )}
              <TypeIn
                width="16rem"
                height="2rem"
                id="Username"
                hint="UserName"
                label="UserName"
                placeholderFontSize="14px"
                labelFontSize=".9rem"
                iconImg="/UsernameIcon.svg"
                values={userName}
                onChange={onUserNameChange}
              />
              <div className="signinPsw-container">
                <form>
                  <TypeIn
                    width="16rem"
                    height="2rem"
                    id="Password"
                    hint="Password"
                    label="Password"
                    placeholderFontSize="14px"
                    labelFontSize=".9rem"
                    iconImg="/PasswordIcon.svg"
                    values={pswInput}
                    onChange={onPasswordChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </form>

                <div
                  className={
                    pwValid
                      ? `pswValid-container w-72 p-4 flex flex-col text-align ${focus} justify-evenly gap-y-2 bg-white div-3 text-black rounded-lg drop-shadow-3xl border-4  border-teal-600`
                      : `pswValid-container w-72 p-4 flex flex-col text-align ${focus} justify-evenly gap-y-2 bg-white div-3 text-black rounded-lg drop-shadow-3xl border-4  border-red-600`
                  }
                >
                  <span
                    className={
                      pwValid
                        ? "text-green-600 font-bold "
                        : "text-red-600 font-bold"
                    }
                  >
                    Requirements!
                  </span>
                  {capCheck(pswInput) ? (
                    <PwCheck
                      validationMsg="Contains an uppercase letter"
                      valid={true}
                    />
                  ) : (
                    <PwCheck
                      validationMsg="Contains an uppercase   letter"
                      valid={false}
                    />
                  )}
                  {lowCheck(pswInput) ? (
                    <PwCheck
                      validationMsg="Contains an lowcase letter"
                      valid={true}
                    />
                  ) : (
                    <PwCheck
                      validationMsg="Contains an lowcase letter"
                      valid={false}
                    />
                  )}{" "}
                  {lengthCheck(pswInput) ? (
                    <PwCheck
                      validationMsg="Minimum of 6 characters"
                      valid={true}
                    />
                  ) : (
                    <PwCheck
                      validationMsg="Minimum of 6 characters"
                      valid={false}
                    />
                  )}
                  {specialLetterCheck(pswInput) ? (
                    <PwCheck
                      validationMsg="Contains a special character"
                      valid={true}
                    />
                  ) : (
                    <PwCheck
                      validationMsg="Contains a special character"
                      valid={false}
                    />
                  )}
                </div>
              </div>

              <TypeIn
                width="16rem"
                height="2rem"
                placeholderFontSize="14px"
                labelFontSize=".9rem"
                id="pswCheck"
                hint="Confirm Password"
                label="Confirm Password"
                iconImg="/PasswordIcon.svg"
                values={cnfrmInput}
                onChange={onConfirmPasswordChange}
              />
              <span
                className={
                  cnfrmError ? "hidden" : "flex px-4 text-xs text-red-600"
                }
              >
                * Please match your password
              </span>

              <TypeIn
                width="16rem"
                height="2rem"
                id="Phonenum"
                hint="xxx-xxxx-xxxx"
                label="Phone"
                placeholderFontSize="14px"
                labelFontSize=".9rem"
                iconImg="/PhoneIcon.svg"
                values={phoneNum}
                onChange={onPhoneChange}
              />
              <Buttondefault
                text="Sign up"
                btnWidth={"16rem"}
                btnColor={"#2563eb"}
                fontSize=""
                onClick={() => {
                  if (emailCheck === false) {
                    alert("You have to pass the email valid test");
                  } else if (pwValid === false) {
                    alert(
                      "You have to fill in all the space with valid information\n Please check if the Password is valid"
                    );
                  } else {
                    const form = new FormData();
                    form.append("email", emailInput);
                    form.append("password", cnfrmInput);
                    form.append("name", userName);
                    form.append("phone", phoneNum);
                    axios
                      .post(`${process.env.NEXT_PUBLIC_API_URL}/users/join`, form, {
                        headers: {
                          "content-type": "multipart/form-data",
                        },
                      })
                      .then((res) => {
                        alert("Sign in sucessful");
                        router.push("/signin");
                      })
                      .catch((err) => console.log(err));
                  }
                }}
              />
            </div>
          </div>

          <div className="flex flex-row items-start space-x-4 mt-4">
            <span className="inline-block align-baseline font-bold text-m text-gray-600">
              Have an account already?
            </span>
            <Link href="/signin">
              <a className="inline-block align-baseline font-bold text-m text-blue-600 hover:text-blue-darker">
                Sign in here!
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pswValid-container {
          position: absolute;
          right: 20px;
          z-index: 10;
        }
      `}</style>
    </>
  );
}
