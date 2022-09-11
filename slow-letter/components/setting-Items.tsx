interface items {
  ID: string;
  Label: string;
  Hint: string;
}

export default function SettingItems({ Label, ID, Hint }: items) {
  return (
    <>
      <div className="input-container">
        {Label === "Your Bio" ? (
          <div className="input-container flex flex-col justify-between">
            <label className="label-input p-3">{Label}</label>
            <textarea
              id={ID}
              className="Bio w-full bg-white h-72"
              placeholder={Hint}
              cols={40}
              rows={5}
            />
          </div>
        ) : (
          <div className="input-container flex flex-row justify-between">
            <label className="label-input p-3">{Label}</label>
            <input id={ID} className="input-value" placeholder={Hint} />
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
            color: black;
          }
          .input-value {
            width: 18rem;
            height: 42px;
            background: white;
            border-color: light-grey;
            border-width: 4px;
            border-image: initial;
            border-style: ridge;
            border-radius: 8px;
            alignitems: center;
          }
          .input-value::placeholder {
            color: grey;
            font-size: 16px;
            padding: 15px;
          }
          .input-value {
            width: 18rem;
            height: 42px;
            background: white;
            border-color: light-grey;
            border-width: 4px;
            border-image: initial;
            border-style: ridge;
            border-radius: 8px;
            alignitems: center;
          }
          .input-value::placeholder {
            color: grey;
            font-size: 16px;
            padding: 15px;
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
            padding: 10px;
          }
        `}
      </style>
    </>
  );
}
