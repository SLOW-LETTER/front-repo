import Image from "next/image";
import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  useState,
} from "react";
import PwCheck from "./pswCheck";

interface Props {
  ID: string;
  Hint: string;
  Label: string;
  Iconimg: string;
  IconWidth: string;
  IconHeight: string;
  Values: string;
  onChange?: ChangeEventHandler;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  //  onKeyup?: KeyboardEventHandler;
}

export default function TypeIn({
  ID,
  Hint,
  Label,
  Iconimg,
  IconWidth,
  IconHeight,
  Values = "",
  onChange,
  onFocus,
  onBlur,
}: // onKeyup,
Props) {
  return (
    <>
      <div className="input-container">
        <div className="input-container flex flex-row">
          <Image src={Iconimg} className="Icon" width={25} height={25} />
          <label className="label-input">{Label}</label>
        </div>
        {Label === "Password" ? (
          <input
            id={ID}
            className="input-value"
            placeholder={Hint}
            type="Password"
            value={Values}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        ) : Label === "Confirm Password" ? (
          <input
            id={ID}
            className="input-value"
            placeholder={Hint}
            type="Password"
            value={Values}
            onChange={onChange}
            //  onKeyUp={onKeyup}
          />
        ) : Label === "Phone Number" ? (
          <input
            id={ID}
            className="input-value"
            placeholder={Hint}
            type="number"
            value={Values}
            onChange={onChange}
          />
        ) : (
          <input
            id={ID}
            className="input-value"
            placeholder={Hint}
            value={Values}
            onChange={onChange}
          />
        )}
      </div>

      <style jsx>
        {`
          .input-container {
            width: 18rem;
            top: ;
            left: ;
            font-family: Plus Jakarta Sans;
            text-align: left;
            padding: 0.5em;
            color: black;
            font-weight: 500;
          }
          .label-intput {
            width: 18rem;
            height: 42px;
            color: black;
          }
          .input-value {
            width: 18rem;
            height: 42px;
            background: white;
            border-color: light-grey;
            border-width: 2px;
            border-image: initial;
            padding-left: 15px;
            border-style: solid;
            border-radius: 8px;
            alignitems: center;
          }
          .input-value::placeholder {
            color: grey;
            font-size: 16px;
          }
          .input-value::focus {
          }
          .Icon {
            width: ${IconWidth};
            height: ${IconHeight};
          }
        `}
      </style>
    </>
  );
}

// <div className="py-3 mb-2">
// <label
//   className="block text-m font-bold text-black mb-4 ml-4"
//   htmlFor="Email"
// >
//   Email
// </label>
// <input
//   className="shadow bg-white items-center text-black w-72 appearance-none border rounded-lg py-2 px-3 text-grey-darker"
//   id="Username"
//   type="text"
//   placeholder="example@example.com"
// />
// </div>
