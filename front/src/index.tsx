import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Components from "./pages/home";
import "./assets/scss/style.scss";
// 전역 axios 설정
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8095";
axios.defaults.withCredentials = true; // withCredentials 전역 설정

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
axios.get('/main')
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)})

root.render(
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Components />} />
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))Oals
reportWebVitals();
