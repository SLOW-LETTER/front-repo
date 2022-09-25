import ProjectTitle from "../components/project-title";
import TypeIn from "../components/inputitem";

export default function Login() {
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
        <div className="flex flex-col w-full p-8 h-5/6 bg-white shadow-lg drop-shadow-2xl rounded-lg">
          <a className="font-bold text-sm text-black text-2xl">Welcome!</a>

          <a className="text-sm text-black text-l">
            Please sign in your account
          </a>

          <div className="py-3 mb-2">
            <label
              className="block text-m font-bold text-black mb-4 ml-4"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className={` shadow bg-white items-center text-black w-72 appearance-none border rounded-lg py-2 px-3 text-grey-darker`}
              id="Username"
              type="text"
              placeholder="example@example.com"
            />

            <TypeIn
              ID="Email"
              Hint="Email"
              Label="Email"
              Iconimg=""
              IconHeight="30"
              IconWidth="30"
              Values=""
            />
          </div>

          <div className="py-3 mb-2">
            <label
              className="block text-m font-bold text-black mb-4 ml-4"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className=" PasswordInput shadow items-center bg-white text-black w-72 appearance-none border rounded-lg py-2 px-3 text-grey-darker"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            className="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 w-full rounded"
            type="button"
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
