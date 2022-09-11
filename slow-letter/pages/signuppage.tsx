import TypeIn from "../components/inputitem";
import ProjectTitle from "../components/project-title";
import Button from "../components/button";
import Image from "next/image";
import PwCheck from "../components/pswCheck";
export default function Signup() {
  return (
    <>
      <ProjectTitle
        containerTop="17rem"
        containerLeft="20rem"
        titleTop="0"
        titleLeft="0"
        subtitleTop="16rem"
        subtitleLeft="0"
      />
      <div className="login-container p-2">
        <div className="flex flex-col w-full items-start px-7 py-3 h-5/6 bg-white shadow-lg drop-shadow-2xl rounded-lg">
          <a className="font-bold text-sm text-black text-2xl">Sign Up!</a>
          <a className="text-sm text-black text-l">Please enter your info</a>
          <div className="flex flex-col py-3">
            <TypeIn
              ID="Email"
              Hint="Email"
              Label="Email"
              Iconimg="/emailIcon.svg"
              IconHeight="30"
              IconWidth="30"
            />
            <TypeIn
              ID="psw"
              Hint="Password"
              Label="Password"
              Iconimg="/UsernameIcon.svg"
              IconHeight="30"
              IconWidth="30"
            />
            <TypeIn
              ID="pswCheck"
              Hint="Confirm Password"
              Label="Confirm Password"
              Iconimg="/PasswordIcon.svg"
              IconHeight="30"
              IconWidth="30"
            />
            <TypeIn
              ID="Username"
              Hint="UserName"
              Label="UserName"
              Iconimg="/PasswordIcon.svg"
              IconHeight="30"
              IconWidth="30"
            />
            <TypeIn
              ID="Phonenum"
              Hint="xxx-xxxx-xxxx"
              Label="Phone Number"
              Iconimg="/PhoneIcon.svg"
              IconHeight="30"
              IconWidth="30"
            />
          </div>
          <Button text="Sign up" btnWidth={"20rem"} />
        </div>
        <div className="flex flex-row items-start  px-7 py-5">
          <a className="inline-block align-baseline font-bold text-m text-gray-600 px-4">
            Have an account already?
          </a>
          <a
            className="inline-block align-baseline font-bold text-m text-blue-600 hover:text-blue-darker"
            href="/loginpage"
          >
            Sign in here!
          </a>
        </div>
        <PwCheck />
      </div>
      <style jsx>
        {`
          .login-container {
            height: 50rem;
            position: absolute;
            top: 8em;
            right: 22.5em;
            padding:1em;
          }
          .Button{
            padding: 1em:
          }
          .square{
            background: blue;
            top: 290px;
            right:140px;
          }
        `}
      </style>
    </>
  );
}
