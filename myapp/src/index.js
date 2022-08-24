import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"; 
import './css/styles.css'
import './css/index.css';
import "./css/bootstrap.css";
import Layout from './Layout';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import CertPage from "./pages/certificates-archive/certificates-page.jsx";
import MainLayout from "./pages/main/MainLayout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Navigate to = "/React-Portfolio" replace />}>
        </Route>
        <Route path = "/" element = {<Layout />}>
          <Route path = "React-Portfolio" element = {<MainLayout />}/>
          <Route path = "certificates" element = {<CertPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();