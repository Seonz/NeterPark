import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Components from "./pages/home/home";
import "./assets/scss/style.scss";
import apiClient from "./axiosConfig";
import MainLoginform from "./pages/login/login";
// 전역 axios 설정

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// apiClient
//   .get("/main")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

root.render(
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Components />} />
        <Route path="/login" element={<MainLoginform />} />
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))Oals
reportWebVitals();
