import ProjectTitle from "../components/project-title";

export default function Signup() {
  return (
    <>
      <ProjectTitle />
      <div className="login-container">
        <div className="flex flex-col w-full p-8 h-5/6 bg-white shadow-lg drop-shadow-2xl rounded-lg">
          <a className="font-bold text-sm text-black text-2xl">Sign Up!</a>
          <a className="text-sm text-black text-l">Please enter your info</a>

          <div className="py-3 mb-2">
            <label
              className="block text-m font-bold text-black mb-4 ml-4"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="shadow bg-white items-center text-black w-72 appearance-none border rounded-lg py-2 px-3 text-grey-darker"
              id="Username"
              type="text"
              placeholder="example@example.com"
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
              className="shadow items-center bg-white text-black w-72 appearance-none border rounded-lg py-2 px-3 text-grey-darker"
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
            href="#"
          >
            Sign up here!
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .login-container {
            position: absolute;
            top: 8em;
            right: 22.5em;
          }
        `}
      </style>
    </>
  );
}
