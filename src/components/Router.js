import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "../App";
import SignIn from "./SignIn";


const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<SignIn/>} />
      <Route path="/Creator/:uId" element={<App />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;