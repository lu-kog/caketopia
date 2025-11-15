import React from "react";

export default function OrderCard({ order, onView }) {
    const statusStyle = {
        Pending: { background: "#fde047" },
        Delivered: { background: "#86efac" },
        Cancelled: { background: "#fca5a5" }
    };

    return (
        <div style={{
            padding: "20px",
            borderRadius: "12px",
            background: "white",
            border: "1px solid #ddd",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>

            <h3 style={{ margin: "0 0 5px 0" }}>{order.cake}</h3>
            <p style={{ margin: 0, color: "#555" }}>{order.flavor}</p>

            <hr style={{ margin: "12px 0" }} />

            <p><b>Delivery:</b> {order.delivery}</p>
            <p><b>Customer:</b> {order.customer}</p>
            <p><b>Phone:</b> {order.phone}</p>

            <div style={{
                marginTop: "10px",
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: "6px",
                ...statusStyle[order.status]
            }}>
                {order.status}
            </div>

            {order.notes && (
                <p style={{
                    marginTop: "12px",
                    padding: "10px",
                    borderRadius: "8px",
                    background: "#f7f7f7"
                }}>
                    📝 {order.notes}
                </p>
            )}

            {order.review && (
                <p style={{
                    marginTop: "12px",
                    padding: "10px",
                    borderRadius: "8px",
                    background: "#f4fce3"
                }}>
                    ⭐ {order.review}
                </p>
            )}

            {/* ✅ VIEW DETAILS BUTTON */}
            <button
                onClick={() => onView(order)}
                style={{
                    marginTop: "10px",
                    padding: "10px 14px",
                    background: "#4f46e5",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    width: "100%"
                }}
            >
                View Details
            </button>

        </div>
    );
}
