import { Props } from "../types/children-type";
import NavBar from "./navbar/navbar";

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <section className="w-full" style={{height: "41.5rem"}}>{children}</section>
    </>
  );
}
