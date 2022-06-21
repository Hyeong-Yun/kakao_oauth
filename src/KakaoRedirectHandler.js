import React, { useEffect } from "react";
import axios from "axios";

const KakaoRedirectHandler = (props) => {
  const href = window.location.href;
  let params = new URL(document.location).searchParams;
  let code = params.get("code"); // 인가코드 받는 부분
  let client_id = `fce3741c701f1740538fe91ee4203fd0`;
  let REDIRECT_URI = `http://localhost:3000/auth/kakao/callback`;

  useEffect(() => {
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  }, []);

  return <div>로그인</div>;
};

export default KakaoRedirectHandler;
