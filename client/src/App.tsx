import React from "react";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Write } from "./components/pages/Write";
import { Read } from "./components/pages/Read";
import Auth from "./components/pages/Auth";

function App() {
  return (
    <div className="App bg-baseBG h-full min-h-screen pb-5">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/write" element={<Write />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
