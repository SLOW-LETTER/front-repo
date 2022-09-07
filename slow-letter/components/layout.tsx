import { Props } from "../types/children-type";
import NavBar from "./navbar";

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="page-background">
        <NavBar />
        {children}
      </div>
      <style jsx>
        {`
          .page-background {
            width: 100%;
            height: 100%;
            background: rgba(237, 242, 244, 1);
            opacity: 1;
            position: absolute;
            top: 0px;
            left: 0px;
          }
        `}
      </style>
    </>
  );
}
