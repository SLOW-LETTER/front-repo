import ProjectTitle from "../components/project-title";
import TypeIn from "../components/inputitem";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { apiURL } from "../components/apiURL";
import { useRouter } from "next/router";
import { useTokenStore } from "../components/zustand_hooks/tokenStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveUserToken = useTokenStore((state: any) => state.saveUserToken);

  const router = useRouter();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e);

    e.target.id === "Email"
      ? setEmail(e.target.value.trim())
      : setPassword(e.target.value.trim());
  }

  return (
    <>
      <ProjectTitle
        containerTop="17em"
        containerLeft="20rem"
        titleTop="0"
        titleLeft="0"
        subtitleTop="16rem"
        subtitleLeft="0"
      />
      <div className="login-container">
        <div className="flex flex-col w-full px-8 py-8 h-5/6 bg-white shadow-lg drop-shadow-2xl rounded-lg">
          <a className="font-bold text-sm text-black text-2xl">Welcome!</a>
          <a className="text-sm text-black text-l">
            Please sign in your account
          </a>

          <div className="">
            <TypeIn
              ID="Email"
              Hint="Email"
              Label="Email"
              Iconimg="/emailIcon.svg"
              IconHeight="30"
              IconWidth="30"
              Values={email}
              onChange={onChange}
            />
            <TypeIn
              ID="Password"
              Hint="Password"
              Label="Password"
              Iconimg="/PasswordIcon.svg"
              IconHeight="30"
              IconWidth="30"
              Values={password}
              onChange={onChange}
            />
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 w-full rounded"
            type="button"
            id="loginBtn"
            onClick={() => {
              const form = new FormData();
              form.append("email", email);
              form.append("password", password);
              axios
                .post(`${apiURL}/users/login`, form, {
                  headers: {
                    "content-type": "multipart/form-data",
                  },
                })
                .then((res) => {
                  saveUserToken(res.data.payload?.token);
                  router.push("/");
                })
                .catch((err) => console.log(err));
            }}
          >
            Sign In
          </button>
        </div>
        <div className="flex flex-row items-start  px-7 py-5">
          <a className="inline-block align-baseline font-bold text-m text-gray-600 px-4">
            Don't have account yet?
          </a>
          <a
            className="inline-block align-baseline font-bold text-m text-blue-600 hover:text-blue-darker"
            href="/signuppage"
          >
            Sign up here!
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .login-container {
            position: absolute;
            top: 15em;
            right: 22.5em;
          }
        `}
      </style>
    </>
  );
}
