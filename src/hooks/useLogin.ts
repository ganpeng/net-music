import { useContext, useEffect } from "react";
import { TracksContext } from "../context";
import {
  getLoginQrkey,
  getUserAccount,
  loginQrCheck,
  loginQrCreate,
} from "../service";

let timer: NodeJS.Timer | null = null;

export function useLogin() {
  const tracksContext = useContext(TracksContext);
  const loginInit = async function () {
    const loginKeyRes = await getLoginQrkey();
    if (loginKeyRes.code === 200) {
      let qrkey = loginKeyRes.data.unikey;
      if (qrkey) {
        const loginQrRes = await loginQrCreate(qrkey);
        if (loginQrRes.code === 200) {
          tracksContext?.setQrimg(loginQrRes.data.qrimg);
          timer = setInterval(async () => {
            if (qrkey) {
              const loginQrCheckRes = await loginQrCheck(qrkey);
              if (loginQrCheckRes.code === 803) {
                window.localStorage.setItem("cookie", loginQrCheckRes.cookie);
                tracksContext?.setCookie(loginQrCheckRes.cookie);
                tracksContext?.setLoginVisible(false);
                const userAccountRes = await getUserAccount();
                if (userAccountRes.code === 200) {
                  tracksContext?.setUserAccount(userAccountRes);
                }
                if (timer) {
                  clearInterval(timer);
                }
              }
              if (loginQrCheckRes.code === 800) {
                console.log(loginQrCheckRes.message);
                if (timer) {
                  clearInterval(timer);
                }
              }
            }
          }, 3000);
        }
      }
    }
  };

  useEffect(() => {
    if (timer && !tracksContext?.loginVisible) {
      clearInterval(timer);
    }
  }, [tracksContext?.loginVisible]);

  return {
    loginInit,
  };
}
