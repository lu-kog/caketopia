import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Layout/Sidebar";
import Header from "./Components/Layout/Header";
import InventoryPage from "./Components/Inventory/InventoryPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <Sidebar />
        <div className="content-area">
          <Header />
          <Routes>
            <Route path="/inventory" element={<InventoryPage />} />
            {/* Add other routes here */}
            <Route path="/" element={<InventoryPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;