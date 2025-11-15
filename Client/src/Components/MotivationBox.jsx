import React from "react";

export default function MotivationBox() {
    const reviews = [
        "“Best cakes in the city!” — Priya",
        "“Amazing taste and quality!” — Arun",
        "“Super fresh and beautiful cakes!” — Meena"
    ];

    return (
        <div style={{
            padding: "20px",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>
            <h3 style={{ marginBottom: "10px" }}>Customer Motivation</h3>

            {reviews.map((review, index) => (
                <p key={index} style={{
                    background: "#f7f7f7",
                    padding: "12px",
                    borderRadius: "8px",
                    marginBottom: "10px"
                }}>
                    ⭐ {review}
                </p>
            ))}
        </div>
    );
}
