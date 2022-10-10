import ProjectTitle from "../components/main-title/project-title";
import TypeIn from "../components/input/inputitem";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { setToken } from "../function/token/tokenHandler";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.id === "Email"
      ? setEmail(e.target.value.trim())
      : setPassword(e.target.value.trim());
  }

  return (
    <>
      <div className="signin-container w-full h-full flex">
        <div className="signin-leftcontainer w-full h-full flex justify-center items-center">
          <ProjectTitle />
        </div>

        <div className="sigin-rightcontainer flex flex-col w-full h-full items-center justify-center">
          <div className="login-container flex flex-col bg-white pt-2 pb-4 px-6 shadow-lg drop-shadow-2xl rounded-lg">
            <div className="login-header flex flex-col p-3">
              <span className="font-bold text-sm text-black text-2xl w-fit">
                Welcome!
              </span>
              <span className="text-sm text-black text-l w-fit">
                Please sign in your account
              </span>
            </div>

            <div className="login-inputs space-y-4 mt-6">
              <TypeIn
                width="20rem"
                height="3rem"
                placeholderFontSize="16px"
                labelFontSize="1rem"
                id="Email"
                hint="Email"
                label="Email"
                iconImg="/emailIcon.svg"
                values={email}
                onChange={onChange}
              />
              <TypeIn
                width="20rem"
                height="3rem"
                id="Password"
                placeholderFontSize="16px"
                labelFontSize="1rem"
                hint="Password"
                label="Password"
                iconImg="/PasswordIcon.svg"
                values={password}
                onChange={onChange}
              />

              <button
                className="bg-blue-600 hover:bg-blue-900 text-white font-bold w-80 py-2 px-4 rounded"
                type="button"
                id="loginBtn"
                onClick={() => {
                  const form = new FormData();
                  form.append("email", email);
                  form.append("password", password);
                  axios
                    .post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, form, {
                      headers: {
                        "content-type": "multipart/form-data",
                      },
                    })
                    .then((res) => {
                      setToken(
                        res.data.payload.token,
                        res.data.payload.refreshToken
                      );
                      router.push("/");
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="login-footer flex flex-row items-start  px-3 py-5">
            <span className="inline-block align-baseline font-bold text-m text-gray-600 px-2">
              Don't have account yet?
            </span>
            <Link href="/signup">
              <a className="inline-block align-baseline font-bold text-m text-blue-600 hover:text-blue-darker">
                Sign up here!
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
