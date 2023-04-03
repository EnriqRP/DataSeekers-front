import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS Styles
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import ViewUsers from "./components/View/ViewUsers"
import ViewReport from "./components/View/ViewReport"
import UserForm from "./components/Users/AddUser"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbar />
    <div className="container my-4">
      <Routes>
        <Route path="/" element={<ViewUsers/>}/>
        <Route path="/viewReport" element={<ViewReport/>}/>
        <Route path="/addUser" element={<UserForm/>}/>
      </Routes>
    </div>
  </BrowserRouter>
);


