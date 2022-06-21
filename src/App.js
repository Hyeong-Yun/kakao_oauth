import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import KakaoLogin from "./kakaoLogin";
import KakaoRedirectHandler from "./KakaoRedirectHandler";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KakaoLogin></KakaoLogin>}></Route>
        <Route
          path="/auth/kakao/callback"
          element={<KakaoRedirectHandler></KakaoRedirectHandler>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
