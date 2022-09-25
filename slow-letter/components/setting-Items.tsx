import { kMaxLength } from "buffer";

interface items {
  ID: string;
  Label: string;
  Hint: string;
  Types: string;
}

export default function SettingItems({ Label, ID, Hint, Types }: items) {
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
              maxLength={100}
            />
          </div>
        ) : Label === "Confirm Password" ? (
          <div className="input-container flex flex-row  justify-between">
            <label className="label-input font-medium p-3">{Label}</label>
            <input
              id={ID}
              className="input-value"
              placeholder={Hint}
              type={Types}
              maxLength={16}
            />
            <p className=" invisible  input-value-required">
              Please enter Password
            </p>
          </div>
        ) : (
          <div className="input-container flex flex-row  justify-between">
            <label className="label-input font-medium p-3">{Label}</label>
            <input
              id={ID}
              className="input-value"
              placeholder={Hint}
              type={Types}
              maxLength={Label === "Password" ? 16 : 100}
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
          }
          .input-value {
            width: 18rem;
            height: 42px;
            background: white;
            border-color: light-grey;
            border-width: 4px;
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
          }
          .Bio {
            background: white;
            border-color: light-grey;
            border-width: 4px;
            border-image: initial;
            border-style: ridge;
            border-radius: 8px;
            alignitems: center;
          }
          .Bio::placeholder {
            color: grey;
            font-size: 16px;
          }
        `}
      </style>
    </>
  );
}
