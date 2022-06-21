const REST_API_KEY = "fce3741c701f1740538fe91ee4203fd0";
const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
