import Image from "next/image";
import {
  ChangeEvent,
  ChangeEventHandler,
  DOMAttributes,
  FocusEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  useState,
} from "react";
import PwCheck from "./pswCheck";

interface Props {
  id: string;
  hint: string;
  label: string;
  iconImg: string;
  values: string;
  onChange?: ChangeEventHandler;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  //  onKeyup?: KeyboardEventHandler;
}

export default function TypeIn({
  id,
  hint,
  label,
  iconImg,
  values = "",
  onChange,
  onFocus,
  onBlur,
}: 
Props) {
  return (
    <>
      <div className="input-container flex flex-col space-y-1">
        <div className="label-container flex flex-row space-x-1 pl-2">
          <Image src={iconImg} className="Icon" width={20} height={20} />
          <label>{label}</label>
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
            font-size: .9rem;
            font-weight: semibold;
            padding-top: 1px;
          }
          .input-value {
            width: 16rem;
            height: 2rem;
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
            font-size: 14px;
          }
          
        `}
      </style>
    </>
  );
}
