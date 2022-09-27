import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/homePage'
import ViewProduct from './pages/viewproduct'
import Parser from 'html-react-parser';   

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/home" element={<HomePage />} />
      <Route path="/view" element={<ViewProduct name="This is Time!" desc=" This is the best plant. It will grow really fast if you takr proper care." quantity='3' price='₹299' services={["Cash On Delivery!",
        "Free Replacements available"]} warnings= {Parser("Water Every 2 days.<br/>Keep away from pets")} />} />


    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
