import React from "react";

export default function SummaryCard({ title, value, subValue }) {
    return (
        <div style={{
            padding: "20px",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>
            <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>{title}</h3>
            <p style={{ fontSize: "28px", fontWeight: "700", margin: "10px 0 2px 0" }}>
                {value}
            </p>
            <span style={{ color: "#777", fontSize: "14px" }}>{subValue}</span>
        </div>
    );
}