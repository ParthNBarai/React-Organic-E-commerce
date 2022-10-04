import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/homePage'
import ViewProduct from './pages/viewproduct'
import CartPage from './pages/cartPage'
import Signup from './pages/Signup'
import Parser from 'html-react-parser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route exact path="/view" element={<ViewProduct />} />


    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
