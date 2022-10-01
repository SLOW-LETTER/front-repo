import { useEffect, useState } from "react";

export function useCheckUserToken() {
  const [checkUserToken, setCheckUserToken] = useState("");
  useEffect(() => {
    const userTokenString = window.sessionStorage.getItem("user-token");
    if (userTokenString === null) {
      return;
    } else {
      const userTokenObj = JSON.parse(userTokenString);
      setCheckUserToken(userTokenObj.state.userToken);
    }
  }, [checkUserToken]);

  return {checkUserToken};
}