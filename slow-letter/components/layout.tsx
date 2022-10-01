import { Props } from "../types/children-type";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";
import NavBar from "./navbar/navbar";

export default function Layout({ children }: Props) {
  const router = useRouter();
  return (
    <>
      <NavBar />
      <section className="w-full" style={{ height: "41.5rem" }}>
        {children}
        {router.pathname === "/mypage/account/changePW" ? <Sidebar /> : null}
        {router.pathname === "/mypage/account/accountinfo" ? <Sidebar /> : null}
        {router.pathname === "/mypage/account/deleteaccount" ? (
          <Sidebar />
        ) : null}
        {router.pathname === "/mypage/notification" ? <Sidebar /> : null}
        {router.pathname === "/mypage/tickets" ? <Sidebar /> : null}
      </section>

      <style jsx>
        {`
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
