import React from "react";
import Navigator from "./Components/Navigator";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./Components/Orders/Orders";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "30px", background: "#f2f4f7", minHeight: "100vh", display: "flex" }}>
        <div style={{ paddingLeft: "40px" }}>
          <Navigator />
        </div>

        <div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/costing" element={<Dashboard />}></Route>
            <Route path="/inventory" element={<Dashboard />}></Route>
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}
