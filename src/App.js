import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Naubar from "./Pages/Naubar";
import { BrowserRouter } from 'react-router-dom';
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
      <Naubar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
