import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <Image src="/project-logo.svg" layout="fill" alt="temp" />
        </div>
      </div>
      <style jsx>
        {`
          .navbar-container {
            width: 100%;
            height: 3.5rem;
            background: rgba(255, 255, 255, 1);
            opacity: 1;
            position: absolute;
            top: 0px;
            left: 0px;
            box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
          }
          .navbar-logo-container {
            width: 2.5rem;
            height: 2.5rem;
            opacity: 1;
            position: absolute;
            top: 0.52rem;
            left: 1.5rem;
            z-index: 20;
          }
        `}
      </style>
    </>
  );
}
