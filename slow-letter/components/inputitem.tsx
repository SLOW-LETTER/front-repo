import Image from "next/image";
import PwCheck from "./pswCheck";

interface Props {
  ID: string;
  Hint: string;
  Label: string;
  Iconimg: string;
  IconWidth: string;
  IconHeight: string;
}

export default function TypeIn({
  ID,
  Hint,
  Label,
  Iconimg,
  IconWidth,
  IconHeight,
}: Props) {
  return (
    <>
      <div className="input-container">
        <div className="input-container flex flex-row">
          <Image src={Iconimg} className="Icon" width={25} height={25} />
          <label className="label-input">{Label}</label>
        </div>
        {/* {Label === "Password" ? (
          <PasswordCheck ID={ID} Hint={Hint} />
        ) : (
          <input
            id={ID}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}"
            className="input-value"
            placeholder={Hint}
            required
          />
        )} */}
        <input id={ID} className="input-value" placeholder={Hint} />
      </div>

      <style jsx>
        {`
          .input-container {
            width: 18rem;
            top:  ;
            left: ;
            font-family: Plus Jakarta Sans;
            text-align: left;
            padding: 0.5em;
            color:black;
          }
          .label-intput {
            width: 18rem;
            height: 42px;
            color:black;
          }
            .input-value {
              width: 18rem;
              height: 42px;
              background: white;
              border-color: light-grey;
              border-width: 4px;
              border-image:initial;
              
              border-style: ridge;
              border-radius: 8px;
              alignitems: center;
            }
            .input-value::placeholder {
              color: grey;
              font-size: 16px;
              padding: 15px;
            }
            .input-value::focus{
              
            }
            .Icon{
              width:${IconWidth}
              height:${IconHeight}
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
