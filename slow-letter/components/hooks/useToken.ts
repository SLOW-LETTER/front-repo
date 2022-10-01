import { useEffect, useState } from "react";
import { useTokenStore } from "../zustand_hooks/tokenStore";

export function useToken() {
  const userToken = useTokenStore((state: any) => state.userToken);
  const [savedUserToken, setSavedUserToken] = useState("temp");

  useEffect(() => {
    setSavedUserToken(userToken);
  }, [userToken])

  return {savedUserToken, setSavedUserToken}
}