import { kMaxLength } from "buffer";
import { ChangeEvent, ChangeEventHandler } from "react";

interface items {
  ID: string;
  Label: string;
  Hint: string;
  Types: string;
  values: string;
  onChangetext?: ChangeEventHandler<HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function SettingItems({
  Label,
  ID,
  Hint,
  Types,
  values,
  onChange,
  onChangetext,
}: items) {
  return (
    <>
      <div className="input-container">
        {Label === "Your Bio" ? (
          <div className="input-container flex flex-col justify-between">
            <label className="label-input font-semibold p-3">{Label}</label>
            <textarea
              id={ID}
              className="Bio w-full bg-white h-72 p-3"
              placeholder={Hint}
              cols={40}
              rows={5}
              value={values}
              maxLength={200}
              onChange={onChangetext}
            />
          </div>
        ) : Label === "Confirm Password" ? (
          <div className="input-container flex flex-row  justify-between">
            <label className="label-input font-semibold p-3">{Label}</label>
            <input
              id={ID}
              className="input-value"
              placeholder={Hint}
              type={Types}
              value={values}
              maxLength={16}
              onChange={onChange}
            />
            <p className=" invisible  input-value-required">
              Please enter Password
            </p>
          </div>
        ) : (
          <div className="input-container flex flex-row  justify-between">
            <label className="label-input font-semibold p-3">{Label}</label>
            <input
              id={ID}
              className="input-value"
              placeholder={Hint}
              type={Types}
              value={values}
              maxLength={Label === "Password" ? 16 : 25}
              onChange={onChange}
            />
          </div>
        )}
      </div>

      <style jsx>
        {`
          .input-container {
            width: 30rem;
            font-family: Plus Jakarta Sans;
            text-align: left;
            padding: 0.5em;
            color: black;
          }
          .label-intput {
            width: 18rem;
            height: 42px;
            font-weight: bold;
            color: black;
            font-family: Plus Jakarta Sans;
          }
          .input-value {
            width: 18rem;
            height: 42px;
            background: white;
            border-color: grey;
            border-width: 1px;
            border-image: initial;
            padding-left: 15px;
            border-style: ridge;
            border-radius: 8px;
            alignitems: center;
          }
          .input-value::placeholder {
            color: grey;
            font-size: 16px;
          }
          .input-value:focus {
            border-color: #3563e9;
            outline: none;
          }
          .Bio {
            background: white;
            border-color: grey;
            border-width: 1px;
            border-image: initial;
            border-style: ridge;
            border-radius: 8px;
            alignitems: center;
          }
          .Bio::placeholder {
            color: grey;
            font-size: 16px;
          }
          .Bio::focus {
            border-color: #3563e9;
            outline: none;
          }
        `}
      </style>
    </>
  );
}
