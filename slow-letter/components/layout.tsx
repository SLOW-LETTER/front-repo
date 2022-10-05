import { Props } from "../types/children-type";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";
import NavBar from "./navbar/navbar";

export default function Layout({ children }: Props) {
  const router = useRouter();

  return (
    <>
      <NavBar />
      <section className="w-full h-full" style={{ height: "92%" }}>
        {children}
        {router.pathname === "/mypage/account/changePW" ? <Sidebar /> : null}
        {router.pathname === "/mypage/account/accountinfo" ? <Sidebar /> : null}
        {router.pathname === "/mypage/account/deleteaccount" ? (
          <Sidebar />
        ) : null}
        {router.pathname === "/mypage/notification" ? <Sidebar /> : null}
        {router.pathname === "/mypage/tickets" ? <Sidebar /> : null}
      </section>

      <style jsx>{``}</style>
    </>
  );
}
