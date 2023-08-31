import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./assets/scss/style.scss";
import Components from "./pages/home/home";
import MainJoinform from "./pages/join/join";
import MainLoginform from "./pages/login/login";
import Notice from "./pages/notice/notice";
import reportWebVitals from "./reportWebVitals";
// 전역 axios 설정

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Components />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/login" element={<MainLoginform />} />
        <Route path="/join" element={<MainJoinform />} />
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))Oals
reportWebVitals();
