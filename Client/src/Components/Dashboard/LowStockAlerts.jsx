import React from "react";

export default function LowStockAlerts() {
    const lowStock = [
        { item: "Flour", qty: "4 kg" },
        { item: "Sugar", qty: "2 kg" },
        { item: "Cocoa", qty: "1 kg" }
    ];

    return (
        <div style={{
            padding: "20px",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>
            <h3 style={{ marginBottom: "10px" }}>Low Stock Alerts</h3>

            <ul style={{ paddingLeft: "16px" }}>
                {lowStock.map((i, index) => (
                    <li key={index} style={{ marginBottom: "8px", fontSize: "15px" }}>
                        {i.item} – <b>{i.qty} left</b>
                    </li>
                ))}
            </ul>
        </div>
    );
}
