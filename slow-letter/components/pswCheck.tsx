import Image from "next/image";

interface Pwcheck {
  PassWord: String;
}

export default function PwCheck() {
  return (
    <>
      <div className="pswValid w-72 p-4 flex flex-col text-align justify-evenly gap-y-2 bg-white div-3 text-black rounded-lg drop-shadow-2xl border-2 border-neutral-400">
        <div>Requirements!</div>
        <div className="flex flex-row bg-red-400 rounded-md shadow">
          <Image src="/pswWarn.svg" width="30px" height="30px"></Image>
          <div className="pwUpperC   text-center w-72 text-white">
            Contains an uppercase letter
          </div>
        </div>

        <div className="flex flex-row bg-red-400 rounded-md shadow">
          <Image src="/pswWarn.svg" width="30px" height="30px"></Image>
          <div className="pwLength text-center w-72 text-white">
            Minimum of 6 characters
          </div>
        </div>
        <div className="flex flex-row bg-red-400 rounded-md shadow">
          <Image src="/pswWarn.svg" width="30px" height="30px"></Image>
          <div className="pwNumber text-center w-72 text-white">
            Contains a number
          </div>
        </div>

        <div className="flex flex-row bg-red-400 rounded-md shadow  ">
          <Image src="/pswWarn.svg" width="30px" height="30px"></Image>
          <div className="pwSpecialC text-center w-72 text-white ">
            Contains a special character
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .pswValid {
            visibility: visible;
            position: absolute;
            top: 170px;
            right: -250px;
          }
        `}
      </style>
    </>
  );
}
