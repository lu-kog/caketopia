import React from "react";
import "./Header.css";
import avatar from "../../assets/avatar.jpg"; // Your avatar asset

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-search">
          <span className="material-symbols-outlined search-icon">search</span>
          <input className="search-input" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header-right">
        <button className="notification-btn">
          <span className="material-symbols-outlined">notifications</span>
          <span className="notification-dot"></span>
        </button>
        <div className="header-avatar">
          <img src={avatar} alt="User avatar" />
          <div className="header-avatar-details">
            <p className="avatar-name">Charu Priya</p>
            <p className="avatar-role">Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;