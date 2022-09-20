import React from "react";
import UserForm from "./components/Create/Create";
import Home from "./components/Home/Home";
// import OneUser from "./components/oneUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Read from "./components/Read/Read";
import Delete from "./components/Delete/Delete";
import Edit from "./components/Edit/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Create" element={<UserForm />} />
        <Route path="/Read/:id" element={<Read />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/delete/:id" element={<Delete />} />
        <Route path="/" element={<Home />} />

       
      </Routes>
    </Router>
  );
}

export default App;
