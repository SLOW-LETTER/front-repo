import Image from "next/image";

interface Props {
  validationMsg:string;
  valid: boolean;
}

export default function PwCheck({ validationMsg, valid }: Props) {
  return (
    <>
{
  valid ? 
  (<div className="list flex flex-row bg-green-600 rounded-md shadow">
  <Image src="/checksign.svg" width="30px" height="30px"></Image>
  <div className='pwUpperCap bg-red text-center w-72 text-white'>
   {validationMsg}
  </div>
</div>):
(<div className="list flex flex-row bg-rose-400 rounded-md shadow">
          <Image src="/pswWarn.svg" width="30px" height="30px"></Image>
          <div className="pwUpperCap   text-center w-72 text-white">
            {validationMsg}
          </div>
        </div>)
}
      <style jsx>
        {`

          .pwSpecialC {
            font-family: Plus Jakarta Sans;
          }
        `}
      </style>
    </>
  );
}
