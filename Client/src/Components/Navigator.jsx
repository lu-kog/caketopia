import React from "react";
import { Link } from "react-router-dom";

export default function Navigator() {
    return (
        <div style={{ 
            width: "200px", 
            padding: "20px", 
            background: "#f5f5f5", 
            minHeight: "100vh" 
        }}>
            
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Cake Bake</p>

            <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ margin: "12px 0" }}>
                    <Link to="/dashboard">Dashboard</Link>
                </li>

                <li style={{ margin: "12px 0" }}>
                    <Link to="/orders">Orders</Link>
                </li>

                <li style={{ margin: "12px 0" }}>
                    <Link to="/costing">Cost & Price</Link>
                </li>

                <li style={{ margin: "12px 0" }}>
                    <Link to="/inventory">Inventories</Link>
                </li>
            </ul>

            <p style={{ marginTop: "40px", color: "red", cursor: "pointer" }}>Log out</p>
        </div>
    );
}
