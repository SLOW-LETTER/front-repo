import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStore } from "../../components/zustand_stores/store";

export default function useTokenCheckRedirect() {
  const router = useRouter();
  const userToken = useStore((state: any) => state.userToken);

  useEffect(() => {
    userToken === ""
      ? router.push("/signin")
      : router.pathname === "/signin" || router.pathname === "/signup"
      ? router.push("/")
      : null;
  }, [userToken]);
}
