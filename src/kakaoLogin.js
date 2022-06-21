import React from "react";
import "./kakaoLoginCss.css";
import { KAKAO_AUTH_URL } from "./OAuth";

const kakaoLogin = () => {
  return (
    <>
      <a href={KAKAO_AUTH_URL}>
        <div className="kakao_btn">카카오로 로그인하기 </div>
      </a>
    </>
  );
};

export default kakaoLogin;
