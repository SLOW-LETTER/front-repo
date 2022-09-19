import { Props } from "../types/children-type";
import NavBar from "./navbar/navbar";

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
