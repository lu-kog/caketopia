import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="material-symbols-outlined logo-icon">cake</span>
        <span className="sidebar-title">BakeryApp</span>
      </div>
      <nav className="sidebar-nav">
        <a className="nav-item" href="/"><span className="material-symbols-outlined">home</span>Dashboard</a>
        <a className="nav-item" href="/orders"><span className="material-symbols-outlined">shopping_cart</span>Orders</a>
        <a className="nav-item active" href="/inventory"><span className="material-symbols-outlined">inventory_2</span>Inventory</a>
        <a className="nav-item" href="/pricing"><span className="material-symbols-outlined">receipt_long</span>Pricing</a>
        <a className="nav-item" href="/reports"><span className="material-symbols-outlined">bar_chart</span>Reports</a>
        <a className="nav-item" href="/settings"><span className="material-symbols-outlined">settings</span>Settings</a>
      </nav>
    </aside>
  );
}

export default Sidebar;