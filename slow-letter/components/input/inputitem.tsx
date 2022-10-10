import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  ChangeEventHandler,
  DOMAttributes,
  FocusEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  useState,
} from "react";
import Buttondefault from "../button/button";
import PwCheck from "../signup/pswCheck";

interface Props {
  id: string;
  hint: string;
  label: string;
  width: string;
  iconImg: string;
  height: string;
  values: string;
  placeholderFontSize: string;
  labelFontSize: string;
  onChange?: ChangeEventHandler;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

export default function TypeIn({
  id,
  hint,
  label,
  iconImg,
  width,
  height,
  values,
  onChange,
  onFocus,
  placeholderFontSize,
  labelFontSize,
  onBlur,
}: Props) {
  const router = useRouter();
  const [emailValidCheck, setemailValidCheck] = useState(false);

  return (
    <>
      <div className="input-container flex flex-col space-y-1">
        <div className="label-container flex flex-row space-x-1 pl-2">
          <Image src={iconImg} className="Icon" width={20} height={20} />
          <label>{label}</label>
          {label === "Email" ? (
            <Buttondefault
              text={"Check!"}
              btnWidth={"60px"}
              btnColor={""}
              fontSize={"15px"}
              btnHeight={"27px"}
              onClick={() => {
                const form = new FormData();
                form.append("email", values);
                axios
                  .post(`${process.env.NEXT_PUBLIC_API_URL}/users/email/validation`, form, {
                    headers: {
                      "content-type": "multipart/form-data",
                    },
                  })
                  .then((res) => {
                    setemailValidCheck(res.data.payload?.validation);
                    router.push("");
                    setemailValidCheck(res.data.payload?.validation);
                  })
                  .catch((err) => console.log(err));
                {
                  emailValidCheck
                    ? alert("This is valid Email Address")
                    : alert("This is invalid Email Address");
                }
              }}
            />
          ) : null}
        </div>
        {label === "Password" ? (
          <input
            id={id}
            className="input-value"
            placeholder={hint}
            type="Password"
            value={values}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength={16}
          />
        ) : label === "Confirm Password" ? (
          <input
            id={id}
            className="input-value"
            placeholder={hint}
            type="Password"
            value={values}
            onChange={onChange}
            maxLength={16}
          />
        ) : label === "Phone Number" ? (
          <input
            id={id}
            className="input-value"
            placeholder={hint}
            type="text"
            value={values}
            onChange={onChange}
            maxLength={13}
          />
        ) : (
          <input
            id={id}
            className="input-value"
            placeholder={hint}
            value={values}
            onChange={onChange}
            maxLength={25}
          />
        )}
      </div>

      <style jsx>
        {`
          .input-container {
            width: fit-content;
            height: fit-content;
          }
          .label-container {
            width: fit-content;
            height: fit-content;
            font-family: Plus Jakarta Sans;
            text-align: left;
          }
          .label-container label {
            width: fit-content;
            height: fit-content;
            color: black;
            font-size: 0.9rem;
            font-size: ${labelFontSize};
            font-weight: semibold;
            padding-top: 1px;
          }
          .input-value {
            width: ${width};
            height: ${height};
            background: white;
            border-color: light-grey;
            border-width: 2px;
            border-image: initial;
            padding-left: 15px;
            border-style: solid;
            border-radius: 8px;
            align-items: center;
            font-size: 14px;
          }
          .input-value::placeholder {
            color: grey;
            font-size: ${placeholderFontSize};
          }
        `}
      </style>
    </>
  );
}
