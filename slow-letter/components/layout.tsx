import { Props } from "../types/children-type";
import NavBar from "./navbar";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";
import Link from "next/link";

export default function Layout({ children }: Props) {
  const router = useRouter();
  return (
    <>
      <div className="page-background">
        <NavBar />
        {router.pathname === "/mypage/account/changePW" ? <Sidebar /> : null}
        {router.pathname === "/mypage/account/accountinfo" ? <Sidebar /> : null}
        {router.pathname === "/mypage/account/deleteaccount" ? (
          <Sidebar />
        ) : null}
        {router.pathname === "/mypage/notification" ? <Sidebar /> : null}
        {router.pathname === "/mypage/tickets" ? <Sidebar /> : null}
        {children}
      </div>
      <style jsx>
        {`
          .page-background {
            width: 100%;
            height: 45rem;
            background: rgba(237, 242, 244, 1);
            opacity: 1;
            position: absolute;
            top: 0px;
            left: 0px;
          }

          .side-bar-cover {
            left: 0;
            top: 0;
            width: 300px;
            height: 100%;
            background: #ffffff;
            position: absolute;
          }
        `}
      </style>
    </>
  );
}
